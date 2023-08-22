import React, { FC, useEffect, useState } from "react";
import { Link, NavigateFunction } from "react-router-dom";
import "../../modules/SideBar.scss";
import { PageProps, SubPage } from "../Page";
import "../../assets/editor_icons/remixicon.css";

// Define the props for the ListItem component
interface ListItemProps {
  title: string;
  url: string;
  date?: string;
  category?: string;
  rootUrl: string;
}

// Define the FeaturedItemProps type by omitting the url and rootUrl properties from the ListItemProps type
type FeaturedItemProps = Omit<ListItemProps, "url" | "rootUrl">;

// Define the ListItem component
const ListItem: FC<ListItemProps> = ({
  title,
  url,
  date,
  category,
  rootUrl,
}) => {
  // Render the list item with the specified title, date, and category
  return (
    <Link to={`/${rootUrl}/${url}`}>
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

function NewSubpageListItem(
  props: Pick<SideBarProps, "createNewSubpage">
): JSX.Element {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [url, setUrl] = useState("");

  function promptForNewSubpage() {
    const newTitle = prompt("Please enter a title for the new page");
    if (newTitle) {
      setTitle(newTitle);
      setUrl(newTitle.toLowerCase().replace(" ", "-"));
    }
    const newDate = prompt("Please enter a date for the new page");
    if (newDate) {
      setDate(newDate);
    }
    const newCategory = prompt("Please enter a category for the new page");
    if (newCategory) {
      setCategory(newCategory);
    }
  }

  useEffect(() => {
    if (props.createNewSubpage && title.length > 0 && url.length > 0)
      props.createNewSubpage(title, url, date, category);
  }, [category]);

  // Render the list item with the specified title, date, and category
  return (
    <li
      className="list-item"
      onClick={() => {
        promptForNewSubpage();
      }}
    >
      <div className="list-item-new-page">
        <span className="list-item-new-page-icon">
          <i className="ri-node-tree"></i>
        </span>
        <span className="list-item-new-page-text">New Sub-Page</span>
      </div>
    </li>
  );
}

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
  pushUpdate?: (updatedProps: Partial<PageProps>) => void;
  editable?: boolean;
  rootUrl: string;
  createNewSubpage?: (
    title: string,
    date: string,
    category?: string,
    content?: string
  ) => void;
}

// Define the SideBar component
const SideBar: FC<SideBarProps> = ({
  location,
  navigate,
  size,
  sideBarText,
  subPages,
  customSidebarFeature,
  pushUpdate,
  editable,
  rootUrl,
  createNewSubpage,
}) => {
  const [currentPage, setCurrentPage] = useState(subPages && subPages[0]);
  const url = location.split("/").pop();

  useEffect(() => {
    if (!subPages) {
      return;
    }
    const matchingPage = subPages.find(
      (page) => page.url.split("/").pop() === url
    );
    setCurrentPage(matchingPage || subPages[0]);
  }, [url, subPages]);

  // Render the list of subpages with the ListItem component
  return (
    <div
      className="sidebar-container"
      id="sidebar"
      style={{
        /* flex: size === "small" ? "25%" : "calc(100% * (1 / 3))", */
        flex: "33%",
        // TODO: Add a ternary operator to set the flex value to 25% if the size prop is "small" and 33% otherwise
      }}
    >
      {subPages && subPages.length > 0 && url !== rootUrl && (
        <FeaturedItem
          title={currentPage?.title || ""}
          date={currentPage?.date || ""}
          category={currentPage?.category || ""}
        ></FeaturedItem>
      )}
      {(!subPages || subPages.length === 0 || url === rootUrl) &&
        customSidebarFeature && (
          <FeaturedItem
            title={customSidebarFeature.title || ""}
            date={customSidebarFeature.subtitle || ""}
          ></FeaturedItem>
        )}
      {(!subPages || subPages.length === 0) && !customSidebarFeature && (
        <div className="sidebar-text">{sideBarText}</div>
      )}
      <ul className="content-list">
        {subPages &&
          subPages.map((subPage) => (
            <ListItem key={subPage.url} {...subPage} rootUrl={rootUrl} />
          ))}
        {editable ? (
          <NewSubpageListItem createNewSubpage={createNewSubpage} />
        ) : null}
      </ul>
    </div>
  );
};

export default SideBar;
