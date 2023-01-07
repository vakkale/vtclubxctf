import './News.scss';
import PageHeader from "../modules/PageHeader";
import TopBar from "../modules/TopBar";
import SideBar from "../modules/SideBar";
import Article from "../modules/Article";
import articleData from "../data/articles.jsx";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from 'react';

export default function News() {
    const background = 'https://i.imgur.com/RItaeRr.jpg';

    const location = useLocation();
    const pathname = location.pathname;
    const articleName = pathname.substring(pathname.lastIndexOf('/') + 1);

    //set article as state
    const [article, setArticle] = useState(articleData[0]);

    //set article to the article that matches the url
    useEffect(() => {
        setArticle(articleData.find(article => article.url === articleName));
    }, [articleName]);

    // Array of filters for the ArticleSorter component
    const filters = ['year', 'season', 'category'];
    // Set the sorted articles to send to the SideBar component
    const [sortedArticles, setSortedArticles] = useState(articleData);

    // Callback function to handle sorted articles
    const handleSortedArticles = articlesSorted => {
        setSortedArticles(articlesSorted);
    };

    return (
        <>
            <PageHeader image={background} title={"News"} subtitle={"VT Club XCTF"} yPos={"top"}/>
            <TopBar articles={articleData} filters={filters} onSort={handleSortedArticles}></TopBar>
            <div className="bar-plus-content">
                <div className="page-content">
                    <SideBar className="sidebar" data={sortedArticles} size="big"></SideBar>
                    {article ? <Article className="article" article={article.content} image={article.image}></Article>
                        : <Article className="article" article={<></>} image={""}></Article>}
                </div>
            </div>

        </>
    );
}