import PageHeader from "../modules/PageHeader";
import TopBar from "../modules/TopBar";
import SideBar from "../modules/SideBar";
import Route from "../modules/Route";
import recordsData from "../data/recordsData";
import routeData from '../data/routes';
import { useLocation } from "react-router-dom";
import { useEffect, useState } from 'react';

export default function Records() {
    const background = 'https://i.imgur.com/CxLIxTh.jpg';

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        if (window.innerWidth < 1000) {
            setIsMobile(true);/* 
            setFilters(['title']); */
        }
        else {
            setIsMobile(false);
        }
    }, []);

    const location = useLocation();
    const pathname = location.pathname;
    const routeName = pathname.substring(pathname.lastIndexOf('/') + 1);

    const [records, setRecords] = useState(recordsData[0]);

    //set article to the article that matches the url
    useEffect(() => {
        if (routeName !== '')
            setRecords(routeData.find(route => route.url === routeName));
        else
            setRecords(routeData[0]);
    }, [routeName]);

    // Array of filters for the ArticleSorter component
    const [filters, setFilters] = useState(['page']);
    // Set the sorted articles to send to the SideBar component
    const [sortedArticles, setSortedArticles] = useState(routeData);

    // Callback function to handle sorted articles
    const handleSortedArticles = articlesSorted => {
        setSortedArticles(articlesSorted);
        if (isMobile)
            setRecords(articlesSorted[0]);
    };

    return (
        <>
            <PageHeader image={background} title={"Trails"} subtitle={"Routes"} yPos={"30%"} />
            {isMobile ? <TopBar articles={routeData} filters={filters} onSort={handleSortedArticles}></TopBar>
                : <div className="topbar-container" id='topbar'></div>}
            <div className="bar-plus-content">
                <div className="page-content">
                    <SideBar className="sidebar" data={routeData} size="big"></SideBar>
                    {/* <Route className="article" route={route} ></Route> */}
                </div>
            </div>
        </>
    );
}