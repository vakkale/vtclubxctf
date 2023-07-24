import React from "react";
// @ts-ignore
import Page from "./Page.tsx";

function PageTest() {
  const pageprops = {
    title: "Test Page",
    subtitle: "This is a test page",
    background: "https://i.imgur.com/vTg3Pa7.jpg",
    content: "TESTING TESTING",
    url: "/test",
    hasSubPages: true,
    customSidebar: false,
    subPages: [
        {
            title: "Test Subpage",
            content: "TESTING TESTING TESTING",
            url: "subpage",
            date: "2021-01-01",
            category: "Test Category",
        },
        {
            title: "Test Subpage 2",
            content: "TESTING TESTING TESTING",
            url: "subpage2",
        },
    ],
    sideBarText: "This is a test sidebar. TESTINIIINGIGNGINGIG",
  };

  return <Page {...pageprops}></Page>;
}

export default PageTest;
