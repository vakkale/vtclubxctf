/* 
The Page component is a wrapper for each page of the website.
It is used to set the page title, subtitle, content, sub-content, etc.
*/

import React, { FC } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
// @ts-ignore
import SideBar from "./components/SideBar.tsx";
// @ts-ignore
import PageHeader from "./components/PageHeader.tsx";
import StandardContent from "../cms/StandardContent";
// @ts-ignore
import Article from "../modules/Article"; // FOR TESTING, REWRITE THIS COMPONENT

export interface PageProps {
  title: string; // Page title
  subtitle?: string; // Optional
  background: string; // Background image URL
  yPos?: string; // Optional (background image position)
  hasSubPages?: boolean; // Optional
  content: string; // Page content (markdown format)
  featuredImage?: string; // Optional
  url: string; // Page URL (used for routing, relative to the root)
  sideBarText?: string; // Optional, only used if there are no sub-pages
  customSidebarFeature?: {
    title: string; // Custom sidebar title
    subtitle?: string; // Optional
  }
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

const Page: FC<PageProps> = (props) => {
  const location = useLocation();
  const navigate = useNavigate();

  //turn location into a string
  const locationString = location.pathname.toString();
  const sideBarSize = props.subPages ? "large" : "small";

  return (
    <div>
      <PageHeader
        image={props.background}
        title={props.title}
        subtitle={props.subtitle}
        yPos={props.yPos}
      />
      <div className="topbar-container" id="topbar"></div>{" "}
      {/* FOR TESTING, REPLACE WITH ACTUAL TOPBAR COMPONENT */}
      <div className="bar-plus-content">
        <div className="page-content">
          <SideBar
            location={locationString}
            navigate={navigate}
            size={sideBarSize}
            sideBarText={props.sideBarText}
            subPages={props.subPages}
            customSidebarFeature={props.customSidebarFeature}
          ></SideBar>
          <StandardContent content={props.content} image={props.featuredImage} editable={true}></StandardContent>
        </div>
      </div>
    </div>
  );
};

export default Page;
