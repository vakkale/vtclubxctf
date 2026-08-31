import PageHeader from "../modules/PageHeader";
import SideBarLite from "../modules/SideBarLite";
import Article from "../modules/Article";
import { Link } from "react-router-dom";

export default function Join() {
  const background = "https://i.imgur.com/ewHcZPG.jpg";

  const item = {
    title: "Become a Member",
    date: "Join Us",
  };

  const pageContent = (
    <div className="article-content">
      <p>Updated 8/25/2026</p>
      <h2>Want to Join the Best Rec Sports Club at Virginia Tech?</h2>
      <p>
        Whether you're into distance running, sprints, jumps, or throws — you're
        in the right place. We get it: college life is busy. That’s why nothing
        in our club is mandatory. You can come to practice, meets, and socials
        as your schedule allows. With that said, there are just
        <strong> three things you need to do to officially join:</strong>
      </p>

      <h2>1. Fill out the Membership Survey</h2>
      <a
        target="_blank"
        rel="noopener noreferrer nofollow"
        href="https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=hGiVYK0Q-kCGPU8yweOjesWALSeB089Pmst0CjSf87dUQzFRN0YzWktRQVJBVlpTSVJUNzRLSUJDViQlQCN0PWcu"
      >
        Membership Survey Link
      </a>
      <p>The membership survey gives us your information and allows us to put you on the roster.</p>

      <h2>2. Complete IMLeagues Registration</h2>
      <a
        target="_blank"
        rel="noopener noreferrer nofollow"
        href="https://connect.recsports.vt.edu/IMLeague"
      >
        IMLeagues Registration
      </a>
      <p>
        Sign in with your VT PID and password. If you're redirected after
        logging in, return to the link without logging out.
      </p>
      <ul>
        <li>
          <p>Click the orange IMLeagues button</p>
        </li>
        <li>
          <p>At the top, click “Sport Clubs”</p>
        </li>
        <li>
          <p>Scroll down to “Cross Country/Track &amp; Field” and click Join</p>
        </li>
        <li>
          <p>Complete all required forms</p>
        </li>
      </ul>
      <p>Note: You do not need to pay the $25 intramural fee.</p>

      <h2>3. Pay Your Dues</h2>
      <p>
        Dues are paid in person at the Sport Clubs Office in War Memorial Hall
        (on your left after you scan in). The first day you can pay is September 8th.
      </p>
      <p>
        You can pay via cash or check (made out to "Treasurer of Virginia
        Tech").
      </p>
      <p>Here are our options:</p>
      <ul>
        <li>
          <p>Non-Competition, Membership: $30</p>
        </li>
        <li>
          <p>Cross Country Racing Dues (Fall): $120</p>
        </li>
        <li>
          <p>
            Indoor/Outdoor Track Racing Dues (Spring): Prices will be announced
          </p>
        </li>
      </ul>

      <p>Sports Club Office Hours:</p>
      <ul>
        <li>
          <p>Monday &amp; Thursday: 2:30–5:30 PM</p>
        </li>
        <li>
          <p>Tuesday &amp; Wednesday: 8:30–11:30 AM</p>
        </li>
        <li>
          <p>Friday: 9:30–11:30 AM</p>
        </li>
      </ul>
      <h2>Questions?</h2>
      <p>
        Feel free to reach out to an officer or chat with us at practice. We’re
        excited to have you join VT Club XC/TF.
      </p>
      <p>
        Ashley, President – <a href="mailto:ashleymort05@vt.edu">ashleymort05@vt.edu</a>
      </p>
      <p>
        Luke, Vice President –{" "}
        <a href="mailto:lukebarlow@vt.edu">lukebarlow@vt.edu</a>
      </p>
    </div>
  );

  return (
    <>
      <PageHeader
        image={background}
        title={"Join Us"}
        subtitle={"About"}
        yPos={"15%"}
      />
      <div className="topbar-container" id="topbar"></div>
      <div className="bar-plus-content">
        <div className="page-content">
          <SideBarLite className="sidebar" item={item}></SideBarLite>
          <Article className="article" article={pageContent}></Article>
        </div>
      </div>
    </>
  );
}
