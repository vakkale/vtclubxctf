import "./Route.scss";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";

export default function Route({ route }) {

    const [loading, setLoading] = useState(true);

    const currentRoute = useRef(null);

    //loads images and sets loading to false when all images are loaded
    useEffect(() => {
        setTimeout(() => {
            currentRoute.current = route;
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