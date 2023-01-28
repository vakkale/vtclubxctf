import PageHeader from "../modules/PageHeader";
import SideBarLite from "../modules/SideBarLite";
import Article from "../modules/Article";
import { Link } from "react-router-dom";

export default function TrackAndField() {
    const background = 'https://i.imgur.com/7h1tvnX.jpg';

    const item = {
        date: "Spring 2023",
        title: "Meet Schedule"
    };

    const schedule = [
        {
            title: "Mar. 18 - Hokie Track Invitational",
            location: "Blacksburg High School, Blacksburg, VA"
        },
        {
            title: "Mar. 25 - Dr. Jack M. Toms Alumni Invitational",
            location: "University of Lynchburg, Lynchburg, VA"
        },
        {
            title: "Apr. 1/2 -NIRCA Track & Field Nationals",
            location: "Location TBD"
        },
        {
            title: "Apr. 15 -MEET TBA",
            location: "Location TBD"
        },
        {
            title: "Apr. 22 - Wildcat Twilight",
            location: "Randolph College, Lynchburg, VA"
        }
    ];

    const pageContent =
        <div className="article-content">
            <h3>Speed is on the Track!</h3>
            <p>Welcome to VT Club XCTF's Track and Field page! Spring is the season for Track and Field, and our team competes in a variety of events including sprints, distance running, hurdles, jumps, and throws.</p>
            <p>Each semester, we attend 4-5 meets, including the National Intercollegiate Running Club Association (NIRCA) National Championship.</p>
            <p>Building on our success from 2022, where our men's team brought home the national title and the women's team achieved their highest finish in club history with a 3rd place finish, we continue to strive for excellence in the upcoming season. We are determined to cement our place among the top teams in the nation and invite you to join us on this journey!</p>
            <p>We are a competitive club in many aspects, but we also welcome all skill levels and encourage members to try new events and push themselves to improve. Whether you're a seasoned veteran or new to the sport, we would love for you to join us on the track!</p>
            <p>Be sure to check this page regularly for updates on meet results and the schedule for upcoming meets.</p>
            <div className="img-container">
                <img src="https://i.imgur.com/K9RnIPZ.jpg" alt="Men's track and field team celebrating their nationals victory."></img>
            </div>
            <div className="img-container">
                <img src="https://i.imgur.com/JibUAjg.jpg" alt="Women's track and field team celebrating their nationals podium finish." />
            </div>
        </div >

    return (
        <>
            <PageHeader image={background} title={"Track & Field"} subtitle={"Competition"} yPos={"35%"} />
            <div className="topbar-container" id='topbar'></div>
            <div className="bar-plus-content">
                <div className="page-content">
                    <SideBarLite className="sidebar" item={item} schedule={schedule}></SideBarLite>
                    <Article className="article" article={pageContent}></Article>
                </div>
            </div>
        </>
    )
}