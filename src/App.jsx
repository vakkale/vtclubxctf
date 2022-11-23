import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { Fragment, Component } from 'react';

import './App';
import Lines from './lines/lines.jsx';
import Header from './header/header.jsx';
import Home from './home/home.jsx';
import Training from './training/training';
import Favicon from 'react-favicon';
import favicon from './assets/favicon.png';
import trainingData from './data/training.json';
import trainingNav from './data/trainingNav.json';
/* import Loader from './loader/loader.jsx';
import { usePreloadImages } from './hooks/usePreloadImages.tsx'; */

export default class App extends Component {
  render() {
    return (
      <>
        {/* <Loader></Loader> */}
        <div className="app">

          <Fragment>
            <Favicon url={favicon}></Favicon>
            <BrowserRouter>
              <Header></Header>
              <Lines></Lines>
              <Routes>
                <Route exact path="/" element={<Home />}></Route>
                <Route exact path="/news" element={<Home />}></Route>
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