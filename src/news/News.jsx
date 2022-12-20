import './News.scss';
import PageHeader from "../modules/PageHeader";
import TopBar from "../modules/TopBar";
import SideBar from "../modules/SideBar";
import Article from "../modules/Article";
import background from "../assets/photos/news-bg.jpg";
import articles from "../data/articles";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from 'react';

export default function News() {
    /* CONSTRUCTOR */
    /* set the current article as the first article at the top of array (most recent article) */
    /* set category and season to all, set year to year of current article */

    const location = useLocation();
    const pathname = location.pathname;
    const articleName = pathname.substring(pathname.lastIndexOf('/') + 1);
    const article = articles.find(featuredItem => featuredItem.url === articleName)

    return (
        <>
            <PageHeader image={background} title={"News"} subtitle={"VT Club XCTF"} />
            <TopBar></TopBar>{/* TODO: make sidebar get data from topbar instead */}
            <div className="page-content">
                <SideBar className="sidebar" data={articles}></SideBar>
                {article
                    ? <Article className="article" article={article.content} image={article.image}></Article>
                    : <Article className="article" article={articles[0].content} image={articles[0].image}></Article>}
            </div>
        </>
    );
}