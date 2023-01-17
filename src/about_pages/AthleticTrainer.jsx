import PageHeader from "../modules/PageHeader";
import SideBarLite from "../modules/SideBarLite";
import Article from "../modules/Article";

export default function AthleticTrainer() {
    const background = 'https://i.imgur.com/lrTUl5M.jpg';

    const item = {
        title: "See the Athletic Trainer",
        date: "Injured?"
    };

    const pageContent =
        <div className="article-content">
            <h3>Need to see the trainer?</h3>
            <p>As a member of a VT Sport Club, you are eligible to receive free athletic training services from the VT Sport Clubs Athletic Trainer.</p>
            <p>To set up an appointment, you must first create a SportsWare account. This is for the trainer to keep track of your treatment.</p>
            <h3>To make a SportsWare account:</h3>
            <ol>
                <li>Go to <a href="https://www.swol123.net" target="_blank" rel="noreferrer">their website</a> and click the "Join SportsWare" button.</li>
                <li>Enter your School ID (This is Case Sensitive): VTRECSPORTS</li>
                <li>Enter your First Name, Last Name, Email address and click the Send button.</li>
                <li>Your request to join SportsWare will then be sent to the Athletic Trainer for review. Please allow 48- 72 hours for your request to be accepted by the Athletic trainer</li>
                <li>Once your request is accepted you will receive an e-mail with the Subject “SportsWare request accepted”.</li>
                <li>Open the e-mail and click the link to continue to SportsWare.</li>
                <li>After this, fill out your information. You're ready to schedule an appointment.</li>
            </ol>
            <p>Once you have an account, you can schedule an appointment with the trainer by calling the Sport Clubs office at <a href="tel:+15402319983">(540)-231-9983</a>.</p>
        </div >

    return (
        <>
            <PageHeader image={background} title={"Athletic Trainer"} subtitle={"About"} yPos={"top"} />
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