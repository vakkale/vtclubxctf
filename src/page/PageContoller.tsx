import React, { useState, useEffect, FC } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
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
import updatePageData, { createNewPage } from "./UpdatePageData";

const PageController: FC = (props) => {
  const [pages, setPages] = useState<PageProps[]>([]);
  const { hasPermissions } = usePermissions();
  const [inEditMode, setInEditMode] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [navigateToNewPage, setNavigateToNewPage] = useState<boolean>(false);
  const [newPage, setNewPage] = useState<PageProps | null>(null);

  const toggleEditing = () => {
    setInEditMode(!inEditMode);
  };

  const handleNewPage = (page: PageProps) => {
    createNewPage(page);
    setPages([...pages, page]);
    setNewPage(page);
    setNavigateToNewPage(true);
    setInEditMode(true);
  };

  useEffect(() => {
    setNavigateToNewPage(false);
  }, [navigateToNewPage]);

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
            pageType: pageData.pageType,
          };
          return page;
        }
      );

      setPages(pagesData);
      setLoading(false);
    }

    getPages();
  }, []);

  const LoadingScreen = () => {
    return (
      <div
        className="page-loading-screen"
        style={{
          backgroundColor: "white",
          width: "100%",
          height: "100%",
          position: "absolute",
        }}
      >
        <div className="spinner-container">
          <div className="spinner-logo"></div>
          <div className="spinner-line"></div>
        </div>
      </div>
    );
  };

  return (
    <>
      {loading ? (
        <LoadingScreen />
      ) : (
        <BrowserRouter key={pages.length}>
          {navigateToNewPage && <Navigate to={newPage?.url || "/"} />}
          <Header />
          {hasPermissions && (
            <EditModeBar
              toggleEditing={toggleEditing}
              inEditMode={inEditMode}
              pushNewPage={handleNewPage}
            />
          )}
          <Routes>
            {pages.map((pageProps) => (
              <Route
                key={pageProps.url}
                path={pageProps.url}
                element={
                  <Page
                    key={pageProps.url}
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
      )}
    </>
  );
};

export default PageController;
