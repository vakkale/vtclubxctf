import React, { useState, useEffect, FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore/lite";
import { QueryDocumentSnapshot } from "firebase/firestore/lite";
// @ts-ignore
import Header from "../header/header.jsx";
// @ts-ignore
import Footer from '../footer/Footer.jsx';
// @ts-ignore
import Home from '../home/home.jsx';
// @ts-ignore
import db from "../data/database";
import Page, { PageProps } from "./Page";

const PageController: FC = (props) => {
  const [pages, setPages] = useState<PageProps[]>([]);

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

  console.log(pages);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {pages.map((pageProps) => (
          <Route
            key={pageProps.url}
            path={pageProps.url}
            element={<Page {...pageProps} />}
          />
        ))}
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default PageController;
