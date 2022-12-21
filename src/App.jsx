import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { Fragment } from 'react';
import { useState, useEffect } from 'react';

import './App.scss';
import Lines from './lines/lines.jsx';
import Header from './header/header.jsx';
import Home from './home/home.jsx';
import Training from './training/training';
import Favicon from 'react-favicon';
import favicon from './assets/favicon.png';
import trainingData from './data/training.json';
import trainingNav from './data/trainingNav.json';
import News from './news/News';
import loadImages from './helpers/loadImages';

import img1 from './home/components/slider/images/wildcat22_adam_sprint.JPG';
import img2 from './home/components/slider/images/wildcat22_emery_vault3.JPG';
import img3 from './home/components/slider/images/chris_jump.JPG';
import img4 from './home/components/slider/images/sienna_track.JPG';
import img5 from './home/components/slider/images/mitch_baton.JPG';
import img6 from './home/components/slider/images/wildcat_team.jpg';
import logo from './assets/logo.png';
import header1 from './header/images/distance_selector.jpg';
import header2 from './header/images/distance_selector1.jpg';
import header3 from './header/images/distance_selector2.jpg';
import header4 from './header/images/field_selector.jpg';
import header5 from './header/images/socials_selector.jpg';
import header6 from './header/images/sprints_selector.jpg';
import header7 from './header/images/tf_selector.jpg';
import header8 from './header/images/xc_selector.jpg';
import header9 from './header/images/tf_selector1.jpg';
import header10 from './header/images/tf_selector2.jpg';
import header11 from './header/images/traditions_selector.jpg';

export default function App() {

  const imgs = [img1, img2, img3, img4, img5, img6, logo, header1, header2, header3, header4, header5, header6, header7, header8, header9, header10, header11];

  const [loading, setLoading] = useState(true);

  //runs once on page load, calls loadImages function to load all images in the array and doest re-render the page until all images are loaded, displays a loading screen while images are loading, doesnt run on rerender
  useEffect(() => {
    if (loading === true) {
      loadImages(imgs).then(() => {
        setTimeout(() => {
          setLoading(false);
        }, 1500);
      });
    }
  }, []);

  const LoadingScreen = () => {
    return (
      <div className="page-loading-screen" style={{ backgroundColor: "white", width: "100%", height: "100%", position: "absolute" }}>
        <div className="spinner-container">
          <div className="spinner-logo"></div>
          <div className="spinner-line"></div>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="app">
        <LoadingScreen></LoadingScreen>
        <Lines></Lines>
      </div>
    );
  }
  else {
    return (
      <>
        <div className="app">
          <Fragment>
            <Favicon url={favicon}></Favicon>
            <BrowserRouter>
              <Header></Header>
              <Lines></Lines>
              <Routes>
                <Route exact path="/" element={<Home />}></Route>
                <Route exact path="/news/*" element={<News />}></Route>
                <Route exact path="/competition" element={<Home />}></Route>
                <Route exact path="/records" element={<Home />}></Route>
                <Route exact path="/training" element={<Training key={0} plan={trainingData[0].children[0].children[0]} />}></Route>
                {
                  trainingNav.map((item, index) => (
                    <Route exact path={`/training/${item.id}`} key={index} element={<Training key={index} plan={item}></Training>}></Route>
                  ))
                }
                <Route path="/training/sprints" element={<Training key={0} plan={trainingData[1]}></Training>}></Route>
                <Route exact path="/about" element={<Home />}></Route>
                {/* <Route component={() => <h1 style={{ textAlign: "center", height: "500px", marginTop: "250px" }}>404 Page not found. <p>
                <Link style={{ color: "lightgreen" }} to="/">click here</Link></p></h1>} /> */}
              </Routes>
              {/* <Footer></Footer> */}
            </BrowserRouter>
          </Fragment>
        </div>
      </>
    );
  }
}