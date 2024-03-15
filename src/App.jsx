import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import {
  PermissionsProvider,
  usePermissions,
} from "./helpers/PermissionsProvider";
import PageController from "./page/PageContoller.tsx";

import "./App.scss";
import Lines from "./lines/lines.jsx";
import Header from "./header/header.jsx";
import Training from "./training/Training.jsx";
import News from "./news/News";
import loadImages from "./helpers/loadImages";
import Footer from "./footer/Footer.jsx";
import Home from "./home/home.jsx";
import Contact from "./contact/Contact";
import MapRoutes from "./routes/Routes";
import Donate from "./about_pages/Donate";
import Join from "./about_pages/Join";
import AthleticTrainer from "./about_pages/AthleticTrainer";
import TrackAndField from "./competition/trackandfield";
import CrossCountry from "./competition/crosscountry";
import Socials from "./community/Socials";
import Traditions from "./community/Traditions";
import Sponsors from "./about_pages/Sponsors";
import ScrollToTop from "./helpers/ScrollToTop";
import Records from "./records/Records";
import Redirects from "./helpers/Redirects";
import Banner from "./header/banner";
import GivingDay from "./about_pages/GivingDay";
import RaceForms from "./about_pages/RaceForms";
import Assassin from "./about_pages/Assassin";

export default function App() {
  const slider1 = "https://i.imgur.com/IbOEzu7.jpg";
  const slider2 = "https://i.imgur.com/SDSA9wy.jpg";
  const slider3 = "https://i.imgur.com/dmlDE7L.jpg";
  const slider4 = "https://i.imgur.com/vAPljlf.jpg";
  const slider5 = "https://i.imgur.com/UtEwbtG.jpg";
  const slider6 = "https://i.imgur.com/htohQqv.jpg";
  const news1 = "https://i.imgur.com/RItaeRr.jpg";
  const logo = "https://i.imgur.com/uF93d94.png";
  const header1 = "https://i.imgur.com/tEac9kB.jpg";
  const header2 = "https://i.imgur.com/H5zwEvg.jpg";
  const header3 = "https://i.imgur.com/iZ9hzza.jpg";
  const header4 = "https://i.imgur.com/JHNPyP2.jpg";
  const header5 = "https://i.imgur.com/orU4bPW.jpg";
  const header6 = "https://i.imgur.com/2oNXRUg.jpg";
  const header7 = "https://i.imgur.com/zsLMckC.jpg";

  const imgs = [
    logo,
    slider1,
    slider2,
    slider3,
    slider4,
    slider5,
    slider6,
    header1,
    header2,
    header3,
    header4,
    header5,
    header6,
    header7,
    news1,
  ];

  const { hasPermissions, setHasPermissions } = usePermissions();

  const [loading, setLoading] = useState(true);

  //runs once on page load, calls loadImages function to load all images in the array and doest re-render the page until all images are loaded, displays a loading screen while images are loading, doesnt run on rerender
  useEffect(() => {
    if (loading === true) {
      loadImages(imgs).then(() => {
        /* setTimeout(() => {
          setLoading(false);
        }, 1500); */
        setLoading(false);
      });
    }
    setHasPermissions(true);
  });

  const LoadingScreen = () => {
    return (
      <div
        className="page-loading-screen"
        style={{
          backgroundColor: "white",
          width: "100%",
          height: "100%",
          position: "absolute",
        }}
      >
        <div className="spinner-container">
          <div className="spinner-logo"></div>
          <div className="spinner-line"></div>
        </div>
      </div>
    );
  };

  return (
    <div className="app">
      <PermissionsProvider>
        <Lines></Lines>
        {loading ? (
          <LoadingScreen></LoadingScreen>
        ) : (
          <BrowserRouter>
            <Redirects></Redirects>
            <ScrollToTop></ScrollToTop>
            <Header></Header>
            <Banner></Banner>
            {/* <Parser></Parser> */}
            <Routes>
              <Route exact path="/" element={<Home />}></Route>
              <Route exact path="/news/*" element={<News />}></Route>
              <Route exact path="/training/*" element={<Training />}></Route>
              <Route exact path="/contact" element={<Contact />}></Route>
              <Route exact path="/routes/*" element={<MapRoutes />}></Route>
              <Route exact path="/donate" element={<Donate />}></Route>
              <Route exact path="/join" element={<Join />}></Route>
              <Route
                exact
                path="/athletic-trainer"
                element={<AthleticTrainer />}
              ></Route>
              <Route
                exact
                path="/competition/track-and-field"
                element={<TrackAndField />}
              ></Route>
              <Route
                exact
                path="/competition/cross-country"
                element={<CrossCountry />}
              ></Route>
              <Route
                exact
                path="/community/socials"
                element={<Socials />}
              ></Route>
              <Route
                exact
                path="/community/traditions"
                element={<Traditions />}
              ></Route>
              <Route exact path="/sponsors" element={<Sponsors />}></Route>
              <Route exact path="/giving-day" element={<GivingDay />}></Route>
              <Route exact path="/racing-forms" element={<RaceForms />} />
              <Route exact path="/assassin" element={<Assassin />} />
              {/* <Route exact path="/records/*" element={<Records />}></Route> */}
              {/* <Route exact path="/test/*" element={<PageTest />}></Route> */}
              <Route exact path="/test/*" element={<PageController />}></Route>
              <Route exact path="*" element={<Home />}></Route>
            </Routes>
            <Footer></Footer>
          </BrowserRouter>
        )}
      </PermissionsProvider>
    </div>
  );
}
