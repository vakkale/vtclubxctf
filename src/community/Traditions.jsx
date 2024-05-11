import PageHeader from "../modules/PageHeader";
import SideBarLite from "../modules/SideBarLite";
import Article from "../modules/Article";
import SecretPage from "../about_pages/SecretPage";
import { Link } from "react-router-dom";

export default function Traditions() {
    const background = 'https://i.imgur.com/8gvaz8A.jpg';

    const item = {
        date: "Traditions",
        title: "We Come Back to These Every Year"
    };

    const pageContent =
        <div className="article-content">
            <h3>You can count on these sticking around...</h3>
            <p>Our club has a rich history of annual events that bring members together and create lasting memories. Some of our most cherished traditions include Assassin, the Fall Cookout, Semester Banquet, Friendsgiving, and the Fun Meet at the end of the Spring semester. </p>
            <p>It's not just about the socials, however. Some of the best memories and friendhsips people make as a part of the club are at fun runs during practice, and traveling with teammates to and from meets. Here are some highlights from the past year:</p>
            <div className="img-container">
                <img src="https://i.imgur.com/BvTJOIh.jpg" alt="Club members enjoying cornhole at our annual Spring Banquet."></img>
            </div>
            <p>The Spring Banquet, where we had a cookout, paper plate awards, and games combined into one big celebration of the season.</p>
            <div className="img-container">
                <img src="https://i.imgur.com/TgseDi2.jpg" alt="2022 Fun Meet contestants line up to compete in the 200m speed-walking race." />
            </div>
            <p>The 2022 Fun Meet contestants lining up to compete in the 200m speed-walking race.</p>
            <div className="img-container">
                <img src="https://i.imgur.com/drSMxaK.jpg" alt="Resident sleep champion Patrick Ream engaging in the ritual of sleeping through the 9 hour van ride to Olivet, MI." />
            </div>
            <p>Resident sleep champion Patrick Ream engaging in the ritual of sleeping through the 9 hour van ride to&nbsp;
                <Link
                    to="/shhhhhhh"
                    style={{
                        textDecoration: 'underline'
                    }}
            >Olivet, MI</Link>.</p>
        </div >

    return (
        <>
            <PageHeader image={background} title={"Traditions"} subtitle={"Community"} yPos={"center"} />
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