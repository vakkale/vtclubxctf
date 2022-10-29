import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { Fragment, Component } from 'react';

import './App';
import Lines from './lines/lines.jsx';
import Header from './header/header.jsx';
import Home from './home/home.jsx';
import Training from './training/training';
import Favicon from 'react-favicon';
import favicon from './assets/favicon.png';
/* import Loader from './loader/loader.jsx'; */
import { usePreloadImages } from './hooks/usePreloadImages.tsx';

import slider1 from './home/components/slider/images/wildcat22_adam_sprint.jpg';
import slider2 from './home/components/slider/images/mitch_baton.jpg';
import slider3 from './home/components/slider/images/sienna_track.jpg';
import slider4 from './home/components/slider/images/wildcat_team.jpg';
import slider5 from './home/components/slider/images/wildcat22_emery_vault3.jpg';

import selector1 from './header/images/distance_selector1.jpg';
import selector2 from './header/images/field_selector.jpg';
import selector3 from './header/images/socials_selector.jpg';
import selector4 from './header/images/sprints_selector.jpg';
import selector5 from './header/images/tf_selector2.jpg';
import selector6 from './header/images/traditions_selector.jpg';
import selector7 from './header/images/distance_selector1.jpg';

const preload = [
  slider1, slider2, slider3, slider4, slider5,
  selector1, selector2, selector3, selector4, selector5, selector6, selector7
]

export default class App extends Component {
  render() {
    return (
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
              <Route exact path="/training" element={<Training currentPlan="about" />}>
              </Route>
              <Route exact path="/training/distance" element={<Training currentPlan="distance" />}></Route>
              <Route exact path="/training/sprints" element={<Training currentPlan="sprints" />}></Route>
              <Route exact path="/training/field" element={<Training currentPlan="field" />}></Route>
              <Route exact path="/about" element={<Home />}></Route>
              {/* <Route component={() => <h1 style={{ textAlign: "center", height: "500px", marginTop: "250px" }}>404 Page not found. <p>
                <Link style={{ color: "lightgreen" }} to="/">click here</Link></p></h1>} /> */}
            </Routes>
            {/* <Footer></Footer> */}
          </BrowserRouter>
        </Fragment>
      </div>
    );
  }
}