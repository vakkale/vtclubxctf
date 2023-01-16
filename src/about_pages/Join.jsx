import PageHeader from "../modules/PageHeader";
import SideBarLite from "../modules/SideBarLite";
import Article from "../modules/Article";
import { Link } from "react-router-dom";

export default function Join() {
    const background = 'https://i.imgur.com/ewHcZPG.jpg';

    const item = {
        title: "Become a Member",
        date: "Join Us"
    };

    const pageContent =
        <div className="article-content">
            <h3>Want to join the best?</h3>
            <p>Want to run distance, sprint, jump, or throw? Well you came to the right place. There's just a few things you need to do before you can officially be a part of the club.</p>
            <h3>As easy as 1-2-3!</h3>
            <p>There are 3 steps to becoming a member of the club. All items are due by <span style={{ fontWeight: "bold" }}>Friday, January 27th.</span></p>
            <ol>
                <li><ul>Complete your IMLeague forms. <span style={{ fontWeight: "bold" }}>If you have completed IMleague forms in the Fall, you do not have to do them again! </span>
                    <li>Go to <a href="https://connect.recsports.vt.edu/IMLeague" target="_blank" rel="noreferrer">IMLeagues</a>.</li>
                    <li><ul>Sign in with your VT PID (first half of your @vt.edu email) and Password.
                        <li>(NOTE: If you're sent to another website after signing in, come back to this page and follow the link above again (make sure you don't close your browser or sign out). That should bring you to the IMleagues site described below.)</li>
                    </ul></li>
                    <li>Click on the orange button with the IMLeagues logo to go to the site.</li>
                    <li>This will take you to your profile. At the top, next to your profile picture, select "Sport Clubs."</li>
                    <li>Scroll down the list to find "Cross Country/Track & Field" and click "Join". This will send a request to join the sport club.</li>
                    <li>Fill out the required forms listed on the next page, and you're done with forms!</li>
                </ul></li>
                <li><ul>Pay Dues. Dues are $100 for racers and $30 for non-racers. <br></br>Dues can be paid using cash or check (made out to “Treasurer of Virginia Tech”) and should be turned in at Mccomas, room 142 (big wooden doors) right inside the main entrance. The Mccomas office is open from 8:00am-5:00pm, so you must go during that time. Here is what each gets you:
                    <li><span style={{ fontWeight: "bold" }}>Non-Racing: </span>You get access to all team equipment (blocks, throwing implements, etc) and practices as well as being able to attend all of our social events! As a member of an official sports club, you also will be able to see an official <Link to={"/athletic-trainer"}>VT athletic trainer </Link>who can help with injury prevention and rehabilitation. You also get a semester shirt and are able to purchase official VT Club XCTF apparel and gear. If you are simply interested in staying in shape, meeting new people in a friendly community, or finding a great group to run/train with, this is for you!</li>
                    <li><span style={{ fontWeight: "bold" }}>Racing: </span>All of the above plus more! This includes all race entry fees, travel costs, hotel costs and more for 4-5 meets per season. Our official race schedule will be released soon, but a sneak preview includes a home meet on March 18th here in Blacksburg as well as NIRCA Nationals April 1-2nd! Our men's team is on a title defense run as they won Nationals last year, and our ladies are eager to claim their first National title! Anyone is welcome to compete and there are no time requirements to compete. This is the best way to get the most out of the club, and we promise that if you choose to race with us you will not regret it!</li>
                </ul></li>
                <li>Complete the <a href="https://forms.gle/Np5kHqx8YQR6HUmw9" target="_blank" rel="noreferrer">membership survey.</a></li>
            </ol>
            <p>
                And you're done! If any item is not completed by the deadline, you will not be able to participate in any practices or meets until it is completed. If you have any questions, please contact an <Link to={"/contact"}>officer</Link> or come speak with us at practice. We cant wait to see you there!
            </p>
        </div >

    return (
        <>
            <PageHeader image={background} title={"Join Us"} subtitle={"About"} yPos={"15%"} />
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