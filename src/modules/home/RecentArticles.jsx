import articles from "../../data/articles";
import "./RecentArticles.scss";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function RecentArticles() {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        if (window.innerWidth < 1000) {
            setIsMobile(true);
        }
        else {
            setIsMobile(false);
        }
    }, []);

    const articleLayout = (article, index) => {
        return (
            <Link to={`/news/${article.url}`} className={(!isMobile && index === 0) ? "first-article" : "small-article"} key={index}>
                <div className="image-container">
                    <img
                        className="recent-article-image"
                        style={{ objectFit: "cover" }}
                        alt={article.title}
                        width="100%"
                        height="100%"
                        src={article.image}
                    ></img>
                </div>
                <div className="article-info-container">
                    <div className="article-info-header">
                        <div className="recent-article-date">{article.date}</div>
                        <div className="recent-article-category">{article.category}</div>
                    </div>
                    <div className="recent-article-title">{article.title}</div>
                    <div className="read-more">Read more</div>
                </div>
            </Link>
        );
    };

    return (
        <div className="recent-articles">
            {articles.map((article, index) => {
                if (!isMobile && index === 0) return articleLayout(article, index);
            })}
            <div className="small-articles">
                <Link to={"/news"} className="news-link">see all news</Link>
                {articles.map((article, index) => {
                    if (isMobile) {
                        if (index < 1) return articleLayout(article, index);
                    }
                    else {
                        if (index !== 0 && index < 4) return articleLayout(article, index);
                    }
                })}
            </div>
        </div>
    );
}