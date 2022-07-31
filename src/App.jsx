import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import React, { Component } from 'react';

import './App.css';
import Home from './home/home.jsx'
import Favicon from 'react-favicon';
import favicon from './assets/favicon.png';

class App extends Component {
  render() {
    return (
      <>
      <Favicon url={favicon}></Favicon>
      <BrowserRouter>
          {/* <Menu></Menu> */}
          {/* <Header></Header> */}
          <Routes>
          <Route exact path="/" element={<Home />}></Route>
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
