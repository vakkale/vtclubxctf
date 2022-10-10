import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { Component, Fragment } from 'react';

import './App';
import Lines from './lines/lines.jsx';
import Header from './header/header.jsx';
import Home from './home/home.jsx';
import Favicon from 'react-favicon';
import favicon from './assets/favicon.png';
import Loader from './loader/loader.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount = async () => {
    const srcArray = [
      './home/components/slider/images/wildcat22_adam_sprint.JPG',
      './home/components/slider/images/mitch_baton.JPG',
      './home/components/slider/images/sienna_track.JPG',
      './home/components/slider/images/wildcat_team.jpg',
      './home/components/slider/images/wildcat22_adam_sprint.JPG',
      './home/components/slider/images/wildcat22_emery_vault3.JPG'
    ];

    const cacheImages = async (srcArray) => {
      const promises = await srcArray.map((src) => {
        return new Promise(function (resolve, reject) {
          const img = new Image();

          img.src = src;
          img.onload = resolve();
          img.onerror = reject();
        });
      })

      await Promise.all(promises);

      this.setState({ isLoading: false });
    }

    cacheImages(srcArray);
  }
  render() {
    return (
      <div className="app">
        {this.state.isLoading
          ?
          <Loader></Loader>
          :
          <Fragment>
            <Favicon url={favicon}></Favicon>
            <BrowserRouter>
              <Header></Header>
              <Lines></Lines>
              <Routes>
                <Route exact path="/" element={<Home />}></Route>
                <Route exact path="/News" element={<Home />}></Route>
                <Route exact path="/Competition" element={<Home />}></Route>
                <Route exact path="/Records" element={<Home />}></Route>
                <Route exact path="/Training" element={<Home />}></Route>
                <Route exact path="/About" element={<Home />}></Route>
                {/* <Route component={() => <h1 style={{ textAlign: "center", height: "500px", marginTop: "250px" }}>404 Page not found. <p>
              <Link style={{ color: "lightgreen" }} to="/">click here</Link></p></h1>} /> */}
              </Routes>
              {/* <Footer></Footer> */}
            </BrowserRouter>
          </Fragment>}
      </div>
    );
  }
}

export default App;
