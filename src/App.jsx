import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';

import './App.scss';
import Lines from './lines/lines.jsx';
import Header from './header/header.jsx';
import Home from './home/home.jsx';
import Training from './training/Training.jsx';
import News from './news/News';
import loadImages from './helpers/loadImages';
import Footer from './footer/Footer.jsx';
import Contact from './contact/Contact';

export default function App() {

  const slider1 = 'https://i.imgur.com/IbOEzu7.jpg';
  const slider2 = 'https://i.imgur.com/SDSA9wy.jpg';
  const slider3 = 'https://i.imgur.com/dmlDE7L.jpg';
  const slider4 = 'https://i.imgur.com/vAPljlf.jpg';
  const slider5 = 'https://i.imgur.com/UtEwbtG.jpg';
  const slider6 = 'https://i.imgur.com/htohQqv.jpg';
  const news1 = 'https://i.imgur.com/RItaeRr.jpg';
  const logo = 'https://i.imgur.com/uF93d94.png';
  const header1 = 'https://i.imgur.com/tEac9kB.jpg';
  const header2 = 'https://i.imgur.com/H5zwEvg.jpg';
  const header3 = 'https://i.imgur.com/iZ9hzza.jpg';
  const header4 = 'https://i.imgur.com/JHNPyP2.jpg';
  const header5 = 'https://i.imgur.com/orU4bPW.jpg';
  const header6 = 'https://i.imgur.com/2oNXRUg.jpg';
  const header7 = 'https://i.imgur.com/zsLMckC.jpg';

  const imgs = [logo, slider1, slider2, slider3, slider4, slider5, slider6, header1, header2, header3, header4, header5, header6, header7, news1];

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
  });

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

  return (
    <div className="app">
      <Lines></Lines>
      {loading ? <LoadingScreen></LoadingScreen> :
        <BrowserRouter>
          <Header></Header>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/news/*" element={<News />}></Route>
            <Route exact path="/competition" element={<Home />}></Route>
            <Route exact path="/records" element={<Home />}></Route>
            <Route exact path="/training/*" element={<Training />}></Route>
            <Route exact path="/contact" element={<Contact />}></Route>
            <Route exact path="*" element={<Home />}></Route>
          </Routes>
          <Footer></Footer>
        </BrowserRouter>
      }
    </div>
  );
}