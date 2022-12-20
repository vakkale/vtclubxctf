import "./SideBar.scss";
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

export default function SideBar({ data }) {
    const location = useLocation();
    const navigate = useNavigate();

    const pathname = location.pathname;
    const articleName = pathname.substring(pathname.lastIndexOf('/') + 1);
    const featuredItem = data.find(featuredItem => featuredItem.url === articleName);

    function domain() {
        if (pathname.lastIndexOf('/') === 0) {
            return pathname;
        }
        return pathname.substring(0, pathname.lastIndexOf("/"));
    }
    const Features = () => {
        return (
            featuredItem
                ? (
                    <div className="featured-content">
                        <div className="list-header">
                            <span className="list-item-date">{featuredItem.date}</span>
                            <span className="list-item-category">{featuredItem.category}</span>
                        </div>
                        <div className="feature-title">{featuredItem.title}</div>
                    </div>
                )
                : (<div className="featured-content">
                    <div className="list-header">
                        <span className="list-item-date">{data[0].date}</span>
                        <span className="list-item-category">{data[0].category}</span>
                    </div>
                    <div className="feature-title">{data[0].title}</div>
                </div>)
        );
    }

    return (
        <>
            <div className="sidebar-container">
                <Features></Features>
                <div className="content-list">
                    {data.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className="list-item"
                                onClick={() => navigate(`${domain()}/${item.url}`)}>
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