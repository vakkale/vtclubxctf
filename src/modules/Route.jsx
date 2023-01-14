import "./Route.scss";
import loadImages from "../helpers/loadImages";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";

export default function Route({ route }) {

    console.log(route);

    const [loading, setLoading] = useState(true);

    const currentRoute = useRef(null);

    //loads images and sets loading to false when all images are loaded
    useEffect(() => {
        //gets the element with id topbar from the DOM
        const topbar = document.getElementById('topbar');
        const element = document.getElementById("sidebar");

        setTimeout(() => {
            element.scrollTop = 0;
        }, 100);
        setTimeout(() => {
            currentRoute.current = route;
            window.scrollTo({
                behavior: 'smooth',
                left: 0,
                top: (topbar.offsetTop - topbar.offsetHeight + 4)
            });
            setLoading(false);
        }, 800);
    }, [route]);

    return (

        <div className="route-container">
            <div className={`loading-overlay ${loading ? 'loading' : 'loaded'}`}>
                {loading && (
                    <div className="loading-spinner">
                        {/* Spinner goes here */}
                    </div>
                )}
            </div>
            {route.mapUrl}
        </div>
    );
}