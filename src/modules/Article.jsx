import "./Article.scss";
import loadImages from "../helpers/loadImages";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";

export default function Article({ article, image, size }) {

    const [loading, setLoading] = useState(true);

    const currentArticle = useRef(null);
    const currentImage = useRef(null);

    //loads images and sets loading to false when all images are loaded
    useEffect(() => {
        //gets the element with id topbar from the DOM
        const topbar = document.getElementById('topbar');
        const element = document.getElementById("sidebar");

        if (image) {

            const images = [image];

            setLoading(true);
            loadImages(images).then(() => {
                setTimeout(() => {
                    element.scrollTop = 0;
                }, 100);
                setTimeout(() => {
                    currentArticle.current = article;
                    currentImage.current = image;
                    window.scrollTo({
                        behavior: 'smooth',
                        left: 0,
                        top: (topbar.offsetTop - topbar.offsetHeight + 4)
                    });
                    setLoading(false);
                }, 800);
            });
        }
        else if (image == null) {
            setLoading(true);
            setTimeout(() => {
                element.scrollTop = 0;
            }, 100);
            setTimeout(() => {
                currentArticle.current = article;
                currentImage.current = image;
                window.scrollTo({
                    behavior: 'smooth',
                    left: 0,
                    top: (topbar.offsetTop - topbar.offsetHeight + 4)
                });
                setLoading(false);
            }, 800);
        }

    }, [article, image]);

    return (
        <div className="article-container">
            <div className={`loading-overlay ${loading ? 'loading' : 'loaded'}`}>
                {loading && (
                    <div className="loading-spinner">
                        {/* Spinner goes here */}
                    </div>
                )}
            </div>
            {image &&
                <div className="image-container">
                    <img src={currentImage.current} style={{ width: '100%', objectFit: 'cover', objectPosition: 'center' }}></img>
                </div>
            }
            <div

                className="html-container"
                style={{ padding: size == 'full' ? '0' : '2vw var(--bigbar) 5vw 2vw'}}
            >
                {currentArticle.current}
            </div>
        </div>
    );
}