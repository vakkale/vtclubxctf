/* 
The Page component is a wrapper for each page of the website.
It is used to set the page title, subtitle, content, sub-content, etc.
*/

import React, { FC, useState, useEffect, useRef } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
// @ts-ignore
import SideBar from "./components/SideBar.tsx";
// @ts-ignore
import PageHeader from "./components/PageHeader.tsx";
import StandardContent from "../cms/StandardContent";
import { TiptapContent } from "../cms/StandardContent";
// these two disappeared for some reason in a commit, spent half an hour trying to figure out why the styling was all over the place
import "../news/News.scss";
import "../modules/TopBar.scss";
import OfficerCardContent from "./components/OfficerCards";
// @ts-ignore
import db from "../data/database.jsx";
import {
  CollectionReference,
  DocumentReference,
  collection,
  doc,
} from "firebase/firestore/lite";
import {
  getContentFromDocRef,
  getSubpagesFromCollectionRef,
  updateSubpages,
} from "./UpdatePageData";
export interface PageProps {
  title: string; // Page title
  subtitle?: string; // Optional
  background: string; // Background image URL
  yPos?: string; // Optional (background image position)
  hasSubPages?: boolean; // Optional
  pageType?: string; // Optional
  content: string | TiptapContent; // Page content (markdown format)
  featuredImage?: string; // Optional
  url: string; // Page URL (used for routing, relative to the root)
  sideBarText?: string; // Optional, only used if there are no sub-pages
  customSidebarFeature?: {
    title: string; // Custom sidebar title
    subtitle?: string; // Optional
  };
  subPageCollection?: string; // Optional, only used if there are sub-pages
  meta?: {
    description: string; // Page description (for SEO)
    keywords: string[]; // Page keywords (for SEO)
    author: string; // Page author (for SEO)
    updatedAt: string; // Page last update date (for SEO)
  };
  /* subPages?: SubPage[]; // Optional, only used if there are sub-pages */
}

export interface SubPage {
  title: string; // Sub-content title
  url: string; // Sub-content URL (used for routing, relative to the main page)
  date?: string; // Optional
  category?: string; // Optional
  contentReference?: DocumentReference; // firestore document reference to the sub-page content
  content?: SubPageContent;
}
export interface SubPageContent {
  content: string | TiptapContent;
  featuredImage?: string;
}
interface AdditionalProps {
  inEditMode: boolean;
  updatePage: (updatedPage: PageProps) => void;
}

type PageComponentProps = PageProps & AdditionalProps;

const Page: FC<PageComponentProps> = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const subPageUrl = useParams().subpageUrl;
  const [prevSubPageUrl, setPrevSubPageUrl] = useState<string | undefined>(
    undefined
  );

  //turn location into a string
  const locationString = location.pathname.toString();

  const [pageState, setPageState] = useState<PageComponentProps>(props);
  const [currentPageContent, setCurrentPageContent] = useState<SubPageContent>({
    content: pageState.content,
    featuredImage: pageState.featuredImage,
  });
  const [subpages, setSubpages] = useState<SubPage[]>([]);
  const pageStateRef = useRef<PageComponentProps>(pageState);
  const [loading, setLoading] = useState(false);
  const sideBarSize = subpages ? "large" : "small";

  // Function to update the page state
  const updatePageState = (updatedProps: Partial<PageProps>) => {
    /*  if (subPageUrl.current) { */
    // Merge the updated props with the existing props
    const updatedPage = { ...pageState, ...updatedProps };
    setPageState(updatedPage); // Update the local state
  };

  useEffect(() => {
    console.log(subPageUrl);
    if (subPageUrl) {
      /* setLoading(true); */
      const subPage = subpages?.find((subPage) => subPage.url === subPageUrl);
      if (subPage) {
        if (subPage.content) {
          setCurrentPageContent(subPage.content);
          return;
        }
        const subPageContentRef = subPage.contentReference;
        if (subPageContentRef) {
          const subPageContent = getContentFromDocRef(subPageContentRef);
          subPageContent.then((content) => {
            subPage.content = content;
            setCurrentPageContent(content);
          });
          /* setLoading(false); */
        }
      }
    }
  }, [subPageUrl]);

  function createNewSubpage(
    newTitle: string,
    newUrl: string,
    newDate?: string,
    newCategory?: string
  ) {
    const newSubpage: SubPage = {
      title: newTitle,
      url: newUrl,
      date: newDate,
      category: newCategory,
      contentReference: doc(
        db,
        `pages/${pageState.url}/subpageContents/${newUrl}`
      ),
      content: {
        content: {
          type: "doc",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  text: "New subpage content",
                },
              ],
            },
          ],
        },
        featuredImage: "",
      },
    };
    setSubpages([...subpages, newSubpage]);
  }

  function updateLocalSubpageContent(updatedContent: SubPageContent) {
    /* if () {  */
    const updatedSubpages = subpages.map((subpage) => {
      if (subpage.url === subPageUrl) {
        subpage.content = updatedContent;
      }
      return subpage;
    });
    setSubpages(updatedSubpages);
  }

  useEffect(() => {
    if (!props.inEditMode) {
      const { inEditMode, updatePage, ...pageProps } = pageState;
      // if the page state is different from the props, update the props
      if (pageStateRef.current !== pageState) {
        props.updatePage(pageProps);
        pageStateRef.current = pageState;
      }
    }
    //eslint-disable-next-line
  }, [pageState]);

  useEffect(() => {
    getSubpages();
  }, []);

  async function getSubpages() {
    const colRef = collection(db, `pages/${pageState.url}/subpages`);
    const subpages = await getSubpagesFromCollectionRef(colRef);
    setSubpages(subpages);
  }

  return (
    <div>
      <PageHeader
        background={pageState.background}
        title={pageState.title}
        subtitle={pageState.subtitle}
        yPos={pageState.yPos}
        editable={props.inEditMode}
        pushUpdate={updatePageState}
      />
      <div className="topbar-container" id="topbar"></div>{" "}
      {/* FOR TESTING, REPLACE WITH ACTUAL TOPBAR COMPONENT */}
      <div className="bar-plus-content">
        <div className="page-content">
          {props.pageType !== "contact" && (
            <>
              <SideBar
                location={locationString}
                navigate={navigate}
                size={sideBarSize}
                sideBarText={pageState.sideBarText}
                subPages={subpages}
                rootUrl={pageState.url}
                customSidebarFeature={pageState.customSidebarFeature}
                pushUpdate={updatePageState}
                createNewSubpage={createNewSubpage}
                editable={props.inEditMode}
              ></SideBar>
              <StandardContent
                /* content={pageState.content} */
                content={currentPageContent.content}
                currentSubpageUrl={subPageUrl}
                image={pageState.featuredImage}
                editable={props.inEditMode}
                pushUpdate={updatePageState}
                pushSubpageContentUpdate={updateLocalSubpageContent}
                loading={loading}
              ></StandardContent>
            </>
          )}
          {props.pageType === "contact" && (
            <OfficerCardContent editing={props.inEditMode} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
