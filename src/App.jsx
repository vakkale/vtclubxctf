import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { Component } from 'react';

import './App';
import Lines from './lines/lines.jsx';
import Header from './header/header.jsx';
import Home from './home/home.jsx';
import Favicon from 'react-favicon';
import favicon from './assets/favicon.png';

class App extends Component {
  render() {
    return (
      <>
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
      </>
    );
  }
}

export default App;
