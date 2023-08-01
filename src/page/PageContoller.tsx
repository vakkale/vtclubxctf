import React, { useState, useEffect, FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore/lite";
import { QueryDocumentSnapshot } from "firebase/firestore/lite";
import EditModeBar from "../modules/EditModeBar";
import { usePermissions } from "../helpers/PermissionsProvider";
// @ts-ignore
import Header from "../header/header.jsx";
// @ts-ignore
import Footer from "../footer/Footer.jsx";
// @ts-ignore
import Home from "../home/home.jsx";
// @ts-ignore
import db from "../data/database";
import Page, { PageProps } from "./Page";
import updatePageData from "./UpdatePageData";

const PageController: FC = (props) => {
  const [pages, setPages] = useState<PageProps[]>([]);
  const { hasPermissions } = usePermissions();
  const [inEditMode, setInEditMode] = useState<boolean>(false);

  const toggleEditing = () => {
    setInEditMode(!inEditMode);
  };

  useEffect(() => {
    async function getPages() {
      const page_list = collection(db, "pages");
      const page_snapshot = await getDocs(page_list);

      const pagesData: PageProps[] = page_snapshot.docs.map(
        (doc: QueryDocumentSnapshot) => {
          const pageData = doc.data();
          const page: PageProps = {
            title: pageData.title,
            subtitle: pageData.subtitle,
            background: pageData.background,
            yPos: pageData.yPos,
            hasSubPages: pageData.hasSubPages,
            content: pageData.content,
            featuredImage: pageData.featuredImage,
            url: pageData.url,
            sideBarText: pageData.sideBarText,
            customSidebarFeature: pageData.customSidebarFeature,
            subPages: pageData.subPages,
            meta: pageData.meta,
          };
          return page;
        }
      );

      setPages(pagesData);
    }

    getPages();
  }, []);

  return (
    <BrowserRouter>
      <Header />
      {hasPermissions && (
        <EditModeBar toggleEditing={toggleEditing} inEditMode={inEditMode} />
      )}
      <Routes>
        {pages.map((pageProps) => (
          <Route
            key={pageProps.url}
            path={pageProps.url}
            element={
              <Page
                {...pageProps}
                inEditMode={inEditMode}
                updatePage={updatePageData}
              />
            }
          />
        ))}
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default PageController;
