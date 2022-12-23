import "./SideBar.scss";
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

export default function SideBar({ data }) {
    const location = useLocation();
    const navigate = useNavigate();

    const pathname = location.pathname;
    const articleName = pathname.substring(pathname.lastIndexOf('/') + 1);
    var featuredItem = data.find(featuredItem => featuredItem.url === articleName);

    function domain() {
        if (pathname.lastIndexOf('/') === 0) {
            return pathname;
        }
        return pathname.substring(0, pathname.lastIndexOf("/"));
    }

    const Features = () => {

        //if featuredItem is not null, do nothing, otherwise set featuredItem to the first item in the list
        if (!featuredItem) {
            featuredItem = data[0];
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