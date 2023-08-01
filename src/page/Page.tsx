/* 
The Page component is a wrapper for each page of the website.
It is used to set the page title, subtitle, content, sub-content, etc.
*/

import React, { FC, useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
// @ts-ignore
import SideBar from "./components/SideBar.tsx";
// @ts-ignore
import PageHeader from "./components/PageHeader.tsx";
import StandardContent from "../cms/StandardContent";
import { TiptapContent } from "../cms/StandardContent";

export interface PageProps {
  title: string; // Page title
  subtitle?: string; // Optional
  background: string; // Background image URL
  yPos?: string; // Optional (background image position)
  hasSubPages?: boolean; // Optional
  content: string | TiptapContent; // Page content (markdown format)
  featuredImage?: string; // Optional
  url: string; // Page URL (used for routing, relative to the root)
  sideBarText?: string; // Optional, only used if there are no sub-pages
  customSidebarFeature?: {
    title: string; // Custom sidebar title
    subtitle?: string; // Optional
  };
  subPages?: {
    title: string; // Sub-content title
    content: string; // Sub-content (markdown format)
    tags?: string[]; // Optional
    url: string; // Sub-content URL (used for routing, relative to the main page)
    featuredImage?: string; // Optional
    date?: string; // Optional
    category?: string; // Optional
  }[];
  meta?: {
    description: string; // Page description (for SEO)
    keywords: string[]; // Page keywords (for SEO)
    author: string; // Page author (for SEO)
    updatedAt: string; // Page last update date (for SEO)
  };
}

interface AdditionalProps {
  inEditMode: boolean;
  updatePage: (updatedPage: PageProps) => void;
}

type PageComponentProps = PageProps & AdditionalProps;

const Page: FC<PageComponentProps> = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    console.log("props: " + props);
  }, [props]);

  //turn location into a string
  const locationString = location.pathname.toString();
  const sideBarSize = props.subPages ? "large" : "small";

  const [pageState, setPageState] = useState<PageComponentProps>(props);

  // Function to update the page state
  const updatePageState = (updatedProps: Partial<PageProps>) => {
    console.log("pageState: " + pageState);
    // Merge the updated props with the existing props
    const updatedPage = { ...pageState, ...updatedProps };
    console.log("updatedPage: " + updatedPage);
    setPageState(updatedPage); // Update the local state
  };

  // Create a ref to store the previous value of inEditMode
  const prevInEditMode = useRef<boolean>(props.inEditMode);

  // Detect changes in inEditMode and update the page state accordingly
  useEffect(() => {
    console.log("pageState in useEffect: " + pageState);
    // Check if inEditMode goes from true to false
    if (prevInEditMode.current && !props.inEditMode) {
      // If inEditMode goes from true to false, update the page state with current props
      const { inEditMode, updatePage, ...pageProps } = props;
      console.log("PageProps in useEffect: " + pageProps);
      props.updatePage(pageProps);
      console.log("Pagestate in useEffect after updatePage(): " + pageState);
    }
    console.log("inEditMode: " + props.inEditMode);
    // Update the previous value of inEditMode with the current value
    prevInEditMode.current = props.inEditMode;
  }, [props.inEditMode]);

  return (
    <div>
      <PageHeader
        image={pageState.background}
        title={pageState.title}
        subtitle={pageState.subtitle}
        yPos={pageState.yPos}
        /* pushUpdate={updatePageState} */
      />
      <div className="topbar-container" id="topbar"></div>{" "}
      {/* FOR TESTING, REPLACE WITH ACTUAL TOPBAR COMPONENT */}
      <div className="bar-plus-content">
        <div className="page-content">
          <SideBar
            location={locationString}
            navigate={navigate}
            size={sideBarSize}
            sideBarText={pageState.sideBarText}
            subPages={pageState.subPages}
            customSidebarFeature={pageState.customSidebarFeature}
            /* pushUpdate={updatePageState} */
          ></SideBar>
          <StandardContent
            content={pageState.content}
            image={pageState.featuredImage}
            editable={props.inEditMode}
            pushUpdate={updatePageState}
          ></StandardContent>
        </div>
      </div>
    </div>
  );
};

export default Page;
