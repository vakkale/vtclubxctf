import {
  doc,
  setDoc,
  collection,
  DocumentReference,
} from "firebase/firestore/lite";
// @ts-ignore
import db from "../data/database";
import { PageProps } from "./Page";



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
const validateData = (data: Partial<PageProps>) => {
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
  if (!data.sideBarText && !data.customSidebarFeature && !data.subPages) {
    throw new Error(
      "SideBarText, customSidebarFeature, or subPages is required."
    );
  }
  // If all validations pass, return true
  return true;
};

// Function to update the Firestore document
const updatePageData = async (updatedData: Partial<PageProps>) => {

  if (!updatedData.url) {
    throw new Error("URL is required.");
  }
  // Assuming you have already initialized Firestore

  const docRef: DocumentReference = await doc(
    collection(db, "pages"),
    updatedData.url.substring(1)
  );

  /* doc(db, "pages", updatedData.url.substring(1)); */
  // Remove empty or undefined fields from the updatedData
  const parsedData = removeEmptyFields(updatedData);

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

export default updatePageData;
