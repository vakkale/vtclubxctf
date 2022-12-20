import "./Article.scss";
import loadImages from "../helpers/loadImages";
import { useEffect } from "react";
import { useState } from "react";

export default function Article({ article, image }) {

    const images = [image];
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadImages(images).then(() => {
            setLoading(false);
        });
    }, [image]);

    const LoadingScreen = () => {
        return (
            <div className="article-loading-screen" style={{ backgroundColor: "white", width: "100%", height: "100%", zIndex: 999, position: "absolute" }}>
                <div className="spinner"></div>
            </div>
        );
    }

    if (loading) {
        return (
            <div className="article-container">
                <LoadingScreen></LoadingScreen>
            </div>
        );
    }

    else {
        return (
            <div className="article-container">
                <div className="image-container">
                    <img src={image} style={{ width: '100%', objectFit: 'cover', objectPosition: 'center' }}></img>
                </div>
                <div className="html-container">
                    {article}
                </div>
            </div>
        );
    }
}