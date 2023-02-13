import PageHeader from "../modules/PageHeader";
import SideBarLite from "../modules/SideBarLite";
import Article from "../modules/Article";

export default function GivingDay() {
    const background = 'https://i.imgur.com/jWIZ7DO.jpg';

    const item = {
        title: "Support Our Club!",
        date: "Giving Day 2023"
    };

    const pageContent =
        <div className="article-content">
            <h3>Giving Day 2023!</h3>
            <p>Giving Day is <b>Wednesday-Thursday February 15-16 from noon to noon,</b> and it is a 24 hour time where all donations that are made to the club during that time through our <a href="https://givingday.vt.edu/amb/clubxctf" target="_blank" rel="noreferrer">Giving Day link</a> go directly to our club. This is extremely important to our club as we received over $6,000 from 150+ donors last year, and we are hoping to up that even more this year!</p>
            <p>There is also a competition among Sport Clubs where the club with the <b>most donors ($5 minimum donation)</b> receives an additional $1,500 for their club, and we are planning on winning that prize! Please share this link with your friends and family, as this is the biggest way that they can support you with our club. Please also be sure to donate so that we can beat all the other sport clubs and prove that we are indeed the best!</p>
            <p>Also, there is a raffle that any member who donates will be able to enter themselves in for! For every $5 that you donate, you will get 1 raffle ticket which can then be used to enter yourself for any prize you want. Prizes included some nice apparel, semester shirts, an Instagram shoutout from the club account, Phil buys you dinner, and much more!</p>
            <p>Additionally, if we reach certain donor goals, then there will be rewards for the whole club! If we reach <b>100 donors,</b> we will let you all choose some of the events that we will have at our fun meet at the end of the year! If we reach <b>150 donors,</b> there will be ice cream sandwiches at practice for one day. If we receive over <b>200 donors,</b> all 13 officers will have a pie thrown at them at practice by randomly selected donors! </p>
        </div >

    return (
        <>
            <PageHeader image={background} title={"Giving Day"} subtitle={"About"} yPos={"top"} />
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