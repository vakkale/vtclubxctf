/* 
The Page component is a wrapper for each page of the website.
It is used to set the page title, subtitle, content, sub-content, etc.
*/

import React, { FC, useState, useEffect, useRef } from "react";
import {
  Route,
  useLocation,
  useNavigate,
  Outlet,
  useParams,
  Routes,
} from "react-router-dom";
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
import { collection, getDoc } from "firebase/firestore";
import { DocumentReference } from "firebase/firestore/lite";
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
  subPages?: SubPage[]; // Optional, only used if there are sub-pages
}

export interface SubPage {
  title: string; // Sub-content title
  url: string; // Sub-content URL (used for routing, relative to the main page)
  date?: string; // Optional
  category?: string; // Optional
  contentReference: DocumentReference; // firestore document reference to the sub-page content
}
export interface SubPageContent {
  content: TiptapContent;
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

  //turn location into a string
  const locationString = location.pathname.toString();
  const currentSubpageUrl = useParams().subpageId;
  const sideBarSize = props.subPages ? "large" : "small";

  const [pageState, setPageState] = useState<PageComponentProps>(props);
  const pageStateRef = useRef<PageComponentProps>(pageState);
  const [loading, setLoading] = useState(false);

  // Function to update the page state
  const updatePageState = (updatedProps: Partial<PageProps>) => {
    // Merge the updated props with the existing props
    const updatedPage = { ...pageState, ...updatedProps };
    setPageState(updatedPage); // Update the local state
  };

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
                subPages={pageState.subPages}
                customSidebarFeature={pageState.customSidebarFeature}
                pushUpdate={updatePageState}
                editable={props.inEditMode}
              ></SideBar>
              <StandardContent
                content={pageState.content}
                image={pageState.featuredImage}
                editable={props.inEditMode}
                pushUpdate={updatePageState}
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
