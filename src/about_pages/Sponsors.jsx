import PageHeader from "../modules/PageHeader";
import SideBarLite from "../modules/SideBarLite";
import Article from "../modules/Article";
import { Link } from "react-router-dom";
import boxing from "../assets/sponsors/boxing.svg";
import cellar from "../assets/sponsors/cellar.svg";
import runabout from "../assets/sponsors/runabout.svg";
import crimpers from "../assets/sponsors/crimpers.svg";
import gillies from "../assets/sponsors/gillies.svg";
import bollos from "../assets/sponsors/bollos.svg";

export default function Sponsors() {
  const background = "https://i.imgur.com/HyUw2BJ.jpg";

  const item = {
    date: "Sponsors",
    title: "Help Support Us",
  };

  const pageContent = (
    <div className="article-content">
      <h3>We appreciate our sponsors!</h3>
      <p>
        VT Club Cross Country/Track & Field greatly appreaciates all of our
        sponsors that help make this club run!
      </p>
      <p>
        If you are interested in sponsoring our club, please contact the club
        President through the <Link to={"/contact"}>officers</Link> page!
      </p>
      <h3>Our current sponsors:</h3>
      <ul className="sponsors-list">
        <a href="https://runaboutsports.com/" rel="noreferrer" target="_blank">
          <img
            className="sponsor-image"
            src={runabout}
            alt="Runabout Sports logo."
          ></img>
        </a>
        <a href="https://the-cellar.com/" rel="noreferrer" target="_blank">
          <img
            className="sponsor-image"
            src={cellar}
            alt="The Cellar logo."
          ></img>
        </a>
        <a
          href="https://www.blacksburgboxingandfitness.com/"
          rel="noreferrer"
          target="_blank"
        >
          <img
            className="sponsor-image"
            src={boxing}
            alt="Blacksburg Boxing & Fitness logo."
          ></img>
        </a>
        <a
          href="https://www.crimpersclimbing.com/"
          rel="noreferrer"
          target="_blank"
        >
          <img
            className="sponsor-image"
            src={crimpers}
            alt="Crimper's Climbing Gym logo."
          ></img>
        </a>
        <a
          href="https://gilliesrestaurant.com/"
          rel="noreferrer"
          target="_blank"
        >
          <img
            className="sponsor-image"
            src={gillies}
            alt="Gillie's Restaurant logo."
          ></img>
        </a>
        <a
          href="https://www.instagram.com/bolloscafe/"
          rel="noreferrer"
          target="_blank"
        >
          <img
            className="sponsor-image"
            src={bollos}
            alt="Bollo's Cafe & Bakery logo."
          ></img>
        </a>
      </ul>
    </div>
  );

  return (
    <>
      <PageHeader
        image={background}
        title={"Sponsors"}
        subtitle={"About"}
        yPos={"20%"}
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
