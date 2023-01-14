import './Routes.scss';
import PageHeader from "../modules/PageHeader";
import TopBar from "../modules/TopBar";
import SideBar from "../modules/SideBar";
import Route from "../modules/Route";
import routeData from "../data/routes";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from 'react';

export default function Routes() {
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

    //set article as state
    const [route, setRoute] = useState(routeData[0]);

    //set article to the article that matches the url
    useEffect(() => {
        if (routeName !== '')
            setRoute(routeData.find(route => route.url === routeName));
        else
            setRoute(routeData[0]);
    }, [routeName]);

    /* // Array of filters for the ArticleSorter component
    const [filters, setFilters] = useState(['year', 'season', 'category']);
    // Set the sorted articles to send to the SideBar component
    const [sortedArticles, setSortedArticles] = useState(routeData);

    // Callback function to handle sorted articles
    const handleSortedArticles = articlesSorted => {
        setSortedArticles(articlesSorted);
        if (isMobile)
            setRoute(articlesSorted[0]);
    }; */

    return (
        <>
            <PageHeader image={background} title={"Trails"} subtitle={"Routes"} yPos={"30%"} />
            {/* <TopBar articles={articleData} filters={filters} onSort={handleSortedArticles}></TopBar> */}
            <div className="topbar-container" id='topbar'></div>
            <div className="bar-plus-content">
                <div className="page-content">
                    <SideBar className="sidebar" data={routeData} size="big"></SideBar>
                    <Route className="article" route={route} ></Route>
                </div>
            </div>
        </>
    );
}