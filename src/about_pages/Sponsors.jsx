import PageHeader from "../modules/PageHeader";
import SideBarLite from "../modules/SideBarLite";
import Article from "../modules/Article";
import { Link } from "react-router-dom";

export default function Sponsors() {
    const background = 'https://i.imgur.com/HyUw2BJ.jpg';

    const item = {
        date: "Sponsors",
        title: "Help Support Us"
    };

    const pageContent =
        <div className="article-content">
            <h3>We appreciate our sponsors!</h3>
            <p>VT Club Cross Country/Track & Field greatly appreaciates all of our sponsors that help make this club run!</p>
            <p>If you are interested in sponsoring our club, please contact the club President through the <Link to={"/contact"}>officers</Link> page!</p>
            <h3>Our current sponsors:</h3>
            <a href="https://runaboutsports.com/" rel="noreferrer"
                target="_blank">
                <img src="https://i.imgur.com/XNwGjqn.png" alt="Runabout Sports logo." ></img>
            </a>
            <a href="https://the-cellar.com/" rel="noreferrer"
                target="_blank">
                <img src="https://i.imgur.com/WmLaOZq.png" alt="The Cellar logo." ></img>
            </a>
        </div >

    return (
        <>
            <PageHeader image={background} title={"Sponsors"} subtitle={"About"} yPos={"20%"} />
            <div className="topbar-container" id='topbar'></div>
            <div className="bar-plus-content">
                <div className="page-content">
                    <SideBarLite className="sidebar" item={item}></SideBarLite>
                    <Article className="article" article={pageContent}></Article>
                </div>
            </div>
        </>
    )
}