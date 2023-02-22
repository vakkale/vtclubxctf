import PageHeader from "../modules/PageHeader";
import SideBarLite from "../modules/SideBarLite";
import Article from "../modules/Article";

export default function Socials() {
    const background = 'https://i.imgur.com/CELI4D9.jpg';

    const item = {
        date: "Spring 2023 Socials",
        title: "Upcoming:"
    };

    const schedule = [
        /* {
            title: "Feb. 18 - Soccer Social",
            location: "1PM at the Rec Fields"
        }, */
        {
            title: "Feb. 25 - Breakzone Social",
            location: "2PM - 4PM at the Breakzone (Squires)"
        },
        {
            title: "Mar. 16 - Team Dinner",
            location: "After Practice at D2"
        },
        {
            title: "Mar. 20 - Assassin Begins",
            location: "You're never safe..."
        },
        {
            title: "Mar. 29 - Chipotle Night",
            location: "5PM - 9PM at North Main Chipotle"
        },
        {
            title: "Apr. 8 - McAffee Knob Hike",
            location: "McAffee Knob"
        },
        {
            title: "Apr. 13 - Team Dinner",
            location: "After Practice at D2"
        },
        {
            title: "Apr 19 - Panda Express Night",
            location: "5PM - 9PM at Prices Fork Panda Express"
        },
        {
            title: "Apr. 29 - End of Year Banquet",
            location: "TBA"
        }
    ];

    const pageContent =
        <div className="article-content">
            <h3>All the Fun Stuff!</h3>
            <p>Our club is not just about competing on the track/field or the cross-country course, but also about building camaraderie and friendships off the field. We host a variety of social events throughout the year, including Percentage Nights, Movie Nights, Hikes, Cookouts, Assassin and Banquets.</p>
            <div className="img-container">
                <img src="https://i.imgur.com/RdrujOR.jpg" alt="Club members enjoying games at our annual Fall cookout."></img>
            </div>
            <p>Assassin, in particular, is one of our most popular events. Spanning multiple weeks, members compete to "assassinate" their target using plastic spoons. It's a fun and exciting way for members to bond and get to know each other.</p>
            <p>The banquets, held at the end of each season, are also a highlight of the year. They are an opportunity for members to come together, celebrate their accomplishments, and reflect on the season. These events are a great way for members to connect with each other, and for new members to feel welcomed into the team.</p>
            <p>Our socials are open to all members and we encourage everyone to come out and participate. So whether you're looking to bond with your teammates, or just looking for fun activity to do, check out our upcoming events and join us for a great time!</p>
            <p>Be sure to check this page regularly for updates to the socials schedule and any sign up forms.</p>
            <div className="img-container">
                <img src="https://i.imgur.com/Y7vNyLA.jpg" alt="The boys looking mighty dapper at the Fall banquet.." />
            </div>
        </div >

    return (
        <>
            <PageHeader image={background} title={"Socials"} subtitle={"Community"} yPos={"90%"} />
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