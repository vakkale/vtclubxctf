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

import img1 from './wildcat22_adam_sprint.JPG';
import img2 from './wildcat22_emery_vault3.JPG';
import img3 from './chris_jump.JPG';
import img4 from './sienna_track.JPG';
import img5 from './mitch_baton.JPG';
import img6 from './wildcat_team.jpg';

export default function App() {

  const imgs = [/* "./wildcat22_adam_sprint.JPG", "./wildcat22_emery_vault3.JPG", "./chris_jump.JPG", "./sienna_track.JPG", "./mitch_baton.JPG", "./wildcat_team.jpg" */img1, img2, img3, img4, img5, img6];

  const [loading, setLoading] = useState(true);

  /* AAAAAAAAAAAAAAAAAA */

  useEffect(() => {
    loadImages(imgs).then(() => {
      setLoading(false);
    });
  });

  const LoadingScreen = () => {
    return (
      <div className="article-loading-screen" style={{ backgroundColor: "white", width: "100%", height: "100%", zIndex: 999, position: "absolute" }}>
        <div className="spinner"></div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="app">
        <LoadingScreen></LoadingScreen>
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