import "./SideBar.scss";
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function SideBar({ data }) {
    const location = useLocation();
    const navigate = useNavigate();

    const pathname = location.pathname;
    const articleName = pathname.substring(pathname.lastIndexOf('/') + 1);

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
                    <span className="list-item-date">{featuredItem.date}</span>
                    <span className="list-item-category">{featuredItem.category}</span>
                </div>
                <div className="feature-title">{featuredItem.title}</div>
            </div>
        );
    }

    const errorFeaturedItem = { date: "Error", category: "404", title: "No Matching Results" };

    useEffect(() => {
        if (data.length === 0) {
            navigate(`${domain()}/no-results`);
        }
        else
            navigate(`${domain()}/${data[0].url}`);
    }, [data]);

    return (
        <>
            <div className="sidebar-container" id="sidebar">
                <Features></Features>
                <div className="content-list">
                    {data.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className="list-item"
                                onClick={() => navigate(`${domain()}/${item.url}`)}
                                //sets style to active if the url matches the current url
                                style={item.url === articleName ? { backgroundColor: "#f6f6f6" } : {}}>
                                <div className="list-header">
                                    <span className="list-item-date">{item.date}</span>
                                    <span className="list-item-category">{item.category}</span>
                                </div>
                                <div className="list-item-title">{item.title}</div>
                            </div>
                        );
                    })}
                </div>
            </div >
        </>
    );
}