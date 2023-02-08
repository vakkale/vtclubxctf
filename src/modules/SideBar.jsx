import "./SideBar.scss";
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { useEffect, useState, useRef } from "react";

export default function SideBar({ data, size }) {
    const location = useLocation();
    const navigate = useNavigate();

    const pathname = location.pathname;
    const articleName = pathname.substring(pathname.lastIndexOf('/') + 1);

    //useref for the pathname
    const pathnameRef = useRef(pathname);

    function domain() {
        if (pathname.lastIndexOf('/') === 0) {
            return pathname;
        }
        return pathname.substring(0, pathname.lastIndexOf("/"));
    }

    const Features = () => {

        const [featuredItem, setFeaturedItem] = useState(data[0]);

        useEffect(() => {
            setFeaturedItem(data.find(featuredItem => featuredItem.url === articleName));
            if (featuredItem === undefined) {
                setFeaturedItem(errorFeaturedItem);
            }
        }, [articleName]);

        if (featuredItem === undefined) {
            return <></>;
        }

        return (
            <div className="featured-content ">
                <div className="list-header">
                    <span className="list-item-date">{(featuredItem.date) || (featuredItem.season)}</span>
                    <span className="list-item-category">{(featuredItem.category) || (featuredItem.year)}</span>
                </div>
                <div className="feature-title">{featuredItem.title || featuredItem.name || featuredItem.route}</div>
                {pathname.includes("training") &&
                    <div className="route-link">
                        <span>
                            <Link to={"/routes/warm-up-loop"}>Routes</Link>
                        </span>
                    </div>
                }
            </div>
        );
    }

    const errorFeaturedItem = { date: "Error", category: "404", title: "No Matching Results" };

    useEffect(() => {
        if (data.length === 0) {
            navigate(`${domain()}/no-results`);
        }
        else if ((domain() === pathname) || (pathnameRef.current !== pathname))
            navigate(`${domain()}/${data[0].url}`);
    }, [data]);

    

    return (
        <>
            <div className="sidebar-container" id="sidebar" style={{
                flex: size === "big" ? "calc(100% * (1 / 3))" : "calc(100% * (1 / 4))",
            }}>
                <Features></Features>
                <div className="content-list">
                    {data.map((item, index) => {
                        let date = "";

                        if (item.mapUrl) {
                            const string = JSON.stringify(item.mapUrl); //converts the mapUrl object to a string
                            const d_pos = string.indexOf("d=") + 2; //position of the start of the meters

                            //gets the meters from the string
                            date = string.substring(
                                //position of the beginning of the meters
                                d_pos,
                                //position of the end of the meters
                                string.indexOf("&", d_pos))

                                //converts the meters to a number
                                .split(",")
                                //converts the meters to miles
                                .map(meters => (meters * 0.000621371).toFixed(2))
                                //converts the miles to a string
                                .join(", ");
                                //adds the units
                                date += " mi";
                        }
                        else date = item.date;

                        return (
                            <div
                                key={index}
                                className="list-item"
                                onClick={() => navigate(`${domain()}/${item.url}`)}
                                //sets style to active if the url matches the current url
                                style={item.url === articleName ? { backgroundColor: "#f6f6f6" } : {}}>
                                <div className="list-header">
                                    <span className="list-item-date">{date || (item.season)}</span>
                                    <span className="list-item-category">{(item.category) || (item.year)}</span>
                                </div>
                                <div className="list-item-title">{item.title || item.name || item.route}</div>
                            </div>
                        );
                    })}
                </div>
            </div >
        </>
    );
}