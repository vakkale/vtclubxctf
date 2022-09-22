import React from 'react';
import './header.scss';
import { Link } from 'react-router-dom';
import logo from '../assets/logo2.png';
import { useScrollDirection } from 'react-use-scroll-direction'

function reveal() {

}

function hide() {

}

const Header = () =>
    <>
        <header id='header' style={{ display: 'flex', width: '100%' }}>
            {/* DO NOT TOUCH. ALIGNMENT IS PERFECT */}
            <Link style={{ alignSelf: 'center', textAlign: 'center' }} className='menuPic' to="/">
                <div style={{ width: '8vw' }}>
                    <img width={50} src={logo} alt="png" />
                </div>
            </Link>

            <div className='linkContainer' style={{ flexWrap: 'nowrap', alignContent: 'center' }}>
                <Link className='menuLink' to="/News">  NEWS  </Link>
                <Link className='menuLink' to="/Competition">  COMPETITION </Link>
                <Link className='menuLink' to="/Training">  TRAINING  </Link>
                <Link className='menuLink' to="/Records">  RECORDS  </Link>
                <Link className='menuLink' to="/About">  ABOUT  </Link>
            </div>

            <Link style={{ textAlign: 'left', left: '0' }} className='menuPic' to="/">
            </Link>
        </header>
    </>
export default Header;