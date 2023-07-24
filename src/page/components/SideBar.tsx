import React, { FC, useEffect, useState } from "react";
import { Link, NavigateFunction } from "react-router-dom";

// Define the props for the SubPage component
interface SubPage {
  title: string;
  content: string;
  tags?: string[];
  url: string;
  featuredImage?: string;
  date?: string;
  category?: string;
}

// Define the props for the ListItem component
interface ListItemProps {
  title: string;
  url: string;
  date?: string;
  category?: string;
}

// Define the FeaturedItemProps type by omitting the url property from the ListItemProps type
type FeaturedItemProps = Omit<ListItemProps, "url">;

// Define the ListItem component
const ListItem: FC<ListItemProps> = ({ title, url, date, category }) => {
  // Render the list item with the specified title, date, and category
  return (
    <Link to={url}>
      <li className="list-item">
        <div className="list-header">
          <span className="list-item-date">{date}</span>
          <span className="list-item-category">{category}</span>
        </div>
        <div className="list-item-title">{title}</div>
      </li>
    </Link>
  );
};

// Define the FeaturedItem component
const FeaturedItem: FC<FeaturedItemProps> = ({ title, date, category }) => {
  // Render the featured item with the specified title, date, and category
  return (
    <div className="featured-item">
      <div className="featured-header">
        <span className="featured-item-date">{date}</span>
        <span className="featured-item-category">{category}</span>
      </div>
      <div className="featured-item-title">{title}</div>
    </div>
  );
};

// Define the props for the SideBar component
interface SideBarProps {
  location: string;
  navigate: NavigateFunction;
  size?: string;
  sideBarText?: string;
  subPages?: SubPage[];
  customSidebarFeature?: {
    title: string;
    subtitle?: string;
  };
}

// Define the SideBar component
const SideBar: FC<SideBarProps> = ({
  location,
  navigate,
  size,
  sideBarText,
  subPages,
  customSidebarFeature,
}) => {
  const [currentPage, setCurrentPage] = useState(subPages && subPages[0]);

  useEffect(() => {
    if (!subPages) return; // If there are no subpages, return
    const lastPath = location.split("/").pop();
    const matchingPage = subPages.find(
      (page) => page.url.split("/").pop() === lastPath
    );
    setCurrentPage(matchingPage || subPages[0]);
  }, [location, subPages]);

  // Render the list of subpages with the ListItem component
  return (
    <div
      className="sidebar-container"
      id="sidebar"
      style={{
        flex: size === "large" ? "calc(100% * (1 / 3))" : "25%",
      }}
    >
      {subPages && subPages.length > 0 && (
        <>
          <FeaturedItem
            title={currentPage?.title || ""}
            date={currentPage?.date || ""}
            category={currentPage?.category || ""}
          ></FeaturedItem>
          <ul className="content-list">
            {subPages &&
              subPages.map((subPage) => (
                <ListItem key={subPage.url} {...subPage} />
              ))}
          </ul>
        </>
      )}
      {(!subPages || subPages.length === 0) && customSidebarFeature && (
        <FeaturedItem
          title={customSidebarFeature.title || ""}
          date={customSidebarFeature.subtitle || ""}
        ></FeaturedItem>
      )}
      {(!subPages || subPages.length === 0) && !customSidebarFeature && (
        <div className="sidebar-text">{sideBarText}</div>
      )}
    </div>
  );
};

export default SideBar;
