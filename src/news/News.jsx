import './News.scss';
import PageHeader from "../modules/PageHeader";
import TopBar from "../modules/TopBar";
import SideBar from "../modules/SideBar";
import Article from "../modules/Article";
import articles from "../data/articles";
import { useLocation } from "react-router-dom";
import { useEffect } from 'react';

export default function News() {
    const background = 'https://i.imgur.com/RItaeRr.jpg';

    const location = useLocation();
    const pathname = location.pathname;
    const articleName = pathname.substring(pathname.lastIndexOf('/') + 1);
    const article = articles.find(article => article.url === articleName)

    //sets window scroll to the position of TopBar
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <PageHeader image={background} title={"News"} subtitle={"VT Club XCTF"} />
            <TopBar></TopBar>{/* TODO: make sidebar get data from topbar instead */}
            <div className="bar-plus-content">
                <div className="page-content">
                    <SideBar className="sidebar" data={articles}></SideBar>
                    {article
                        ? <Article className="article" article={article.content} image={article.image}></Article>
                        : <Article lassName="article" article={articles[0].content} image={articles[0].image}></Article>}
                </div>
            </div>

        </>
    );
}