import {
  doc,
  setDoc,
  collection,
  DocumentReference,
  CollectionReference,
  getDocs,
  getDoc,
  QueryDocumentSnapshot,
  query,
  where,
} from "firebase/firestore/lite";
// @ts-ignore
import db from "../data/database";
import { PageProps, SubPage, SubPageContent } from "./Page";

// Helper function to remove empty or undefined fields from an object
const removeEmptyFields = <T extends object>(obj: T): T => {
  const parsedObj = {} as T;
  Object.keys(obj).forEach((key) => {
    const value = obj[key as keyof T];
    if (value !== undefined && value !== "") {
      parsedObj[key as keyof T] = value;
    }
  });
  return parsedObj;
};

// Helper function to validate the data against the PageProps interface
export const validateData = (data: Partial<PageProps>) => {
  // Check if required fields have valid values
  if (!data.title) {
    throw new Error("Title is required.");
  }
  if (!data.background) {
    throw new Error("Background is required.");
  }
  if (!data.content) {
    throw new Error("Content is required.");
  }
  if (!data.url) {
    throw new Error("URL is required.");
  }
  if (!data.sideBarText && !data.customSidebarFeature ) {
    throw new Error(
      "SideBarText, customSidebarFeature, or subPages is required."
    );
  }
  // If all validations pass, return true
  return true;
};

/* 
  Helper function to parse the URL and remove the leading slash
  and replace the remaining slashes with underscores
  because Firestore doesn't allow slashes in document names
*/
function parseUrl(url: string) {
  if (url.charAt(0) !== "/") {
    return url.replace(/\//g, "_");
  } else {
    return url.substring(1).replace(/\//g, "_");
  }
}

// Function to update the Firestore document
const updatePageData = async (updatedData: Partial<PageProps>) => {
  if (!updatedData.url) {
    throw new Error("URL is required.");
  }
  // Assuming you have already initialized Firestore

  const docRef: DocumentReference = doc(
    collection(db, "pages"),
    parseUrl(updatedData.url)
  );

  // Remove empty or undefined fields from the updatedData
  const parsedData = removeEmptyFields(updatedData);

  // Validate the data against the PageProps interface
  if (!validateData(parsedData)) {
    // If validation fails, throw an exception or handle the error accordingly
    throw new Error("Invalid data.");
  }

  console.log("parsedData: ", parsedData);

  // Update the document with the parsedData
  try {
    await setDoc(docRef, parsedData);
    console.log("Document updated successfully!");
  } catch (error) {
    console.error("Error updating document:", error);
  }
};

export default updatePageData;

export const createNewPage = async (newPage: PageProps) => {
  const docRef: DocumentReference = doc(
    collection(db, "pages"),
    parseUrl(newPage.url)
  );

  // Remove empty or undefined fields from the updatedData
  const parsedData = removeEmptyFields(newPage);

  // Validate the data against the PageProps interface
  if (!validateData(parsedData)) {
    // If validation fails, throw an exception or handle the error accordingly
    throw new Error("Invalid data.");
  }

  // Update the document with the parsedData
  try {
    await setDoc(docRef, parsedData);
    console.log("Document updated successfully!");
  } catch (error) {
    console.error("Error updating document:", error);
  }
};

/* 
  Helper function to get the subpages from a collection reference
*/
export async function getSubpagesFromCollectionRef(ref: CollectionReference) {
  const subpageRef = await getDocs(ref);
  var subpages: SubPage[] = [];
  // TODO: make it only return the first 10 subpages
  subpageRef.docs.map((doc: QueryDocumentSnapshot) => {
    const subpageData = doc.data();
    const subpage: SubPage = {
      title: subpageData.title,
      url: subpageData.url,
      date: subpageData.date,
      category: subpageData.category,
      contentReference: subpageData.contentReference,
    };
    subpages.push(subpage);
  });
  return subpages;
}

export async function getContentFromDocRef(docRef: DocumentReference) {
  const doc = await getDoc(docRef);
  const contentData = doc.data();
  if (contentData && contentData.content) {
    const content: SubPageContent = {
      featuredImage: contentData.featuredImage || "",
      content: contentData.content,
    };
    return content;
  } else {
    throw new Error("No content found");
  }
}

export function getSubpageCollectionFromUrl(parentUrl: string) {
  return collection(db, `pages/${parseUrl(parentUrl)}/subpages`);
}

export function getSubpageContentCollectionFromUrl(parentUrl: string) {
  return collection(db, `pages/${parseUrl(parentUrl)}/subpageContents`);
}

export async function addNewSubpageToCollection(
  ref: CollectionReference,
  subpage: SubPage
) {
  const docRef = doc(ref, parseUrl(subpage.url));
  const parsedSubpage = removeEmptyFields(subpage);
  try {
    await setDoc(docRef, parsedSubpage);
    console.log("Document updated successfully!");
  } catch (error) {
    console.error("Error updating document:", error);
  }
}

export async function updateSubpageContent(
  docRef: DocumentReference,
  updatedSubpageContent: SubPageContent
) {
  try {
    await setDoc(docRef, updatedSubpageContent);
    console.log("Document updated successfully!");
  } catch (error) {
    console.error("Error updating document:", error);
  }
}

export async function updateSubpages(
  parentUrl: string,
  updatedSubpages: SubPage[],
  updatedSubpageContent: SubPageContent[]
) {
  const subpageCollectionRef = getSubpageCollectionFromUrl(parentUrl);
  const contentCollectionRef = getSubpageContentCollectionFromUrl(parentUrl);

  updatedSubpages.map((subpage, index) => {
    if (subpage.contentReference) {
      updateSubpageContent(
        subpage.contentReference,
        updatedSubpageContent[index]
      );
    } else {
      let contentDocRef = doc(contentCollectionRef, `/${subpage.title}`);
      updateSubpageContent(contentDocRef, updatedSubpageContent[index]);
    }
    addNewSubpageToCollection(subpageCollectionRef, subpage);
  });
}
