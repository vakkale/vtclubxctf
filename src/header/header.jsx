/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react';

import './header.scss';
import '../helpers/curtains.scss';
import Curtains from '../helpers/Curtains.jsx';
import './selector.scss';
import { Link } from 'react-router-dom';
import navData from '../data/navData.jsx';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AccordionMenu from '../modules/AccordionMenu.jsx';

const logo = 'https://i.imgur.com/TogHaZv.png';
/* const logo2 = 'https://i.imgur.com/1EBVBAi.png'; */
const logo2 = 'https://i.imgur.com/u1KaQeC.png';


export default function Header() {

    const pathname = useLocation().pathname;

    //if link changes to a new page, close the selector
    useEffect(() => {
        setSelectorOpen(false);
        setSelector(null);
        setMobileMenuOpen(false);
    }, [pathname]);

    //mobile or not
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1000 ? true : false);

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth <= 1000) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
                setMobileMenuOpen(false);
            }
        }

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const [selectorOpen, setSelectorOpen] = useState(false);
    const [selector, setSelector] = useState(null);
    const [curtainsOn, setCurtainsOn] = useState(false);

    function handleSelector(newSelector) {
        setCurtainsOn(false);
        if (aboutOpen) handleAbout();

        //if newSelector is the same as the current selector, close the selector
        if (newSelector === selector) {
            setSelectorOpen(false);
            setSelector(null);
        }
        //if newSelector is different from the current selector, change the selector
        else {
            setTimeout(() => {
                setCurtainsOn(true);
            }, 5);
            setTimeout(() => {
                setSelector(newSelector);
                setSelectorOpen(true);
            }, 980);
        }
    }

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [mobileMenuClosing, setMobileMenuClosing] = useState(false);

    const handleMobileMenu = () => {
        if (mobileMenuOpen) {
            setMobileMenuClosing(true);
            setTimeout(() => {
                setMobileMenuOpen(false);
                setMobileMenuClosing(false);
            }, 500);
        } else {
            setMobileMenuOpen(true);
        }
    }

    const MobileMenu = () => {
        return (
            <>
                <header className='header mobile-header' id='header'>
                    <div className='header-logo'>
                        <Link
                            to='/'><img
                                src={logo2}
                                alt='logo'
                                css={{
                                    width: '80px',
                                    height: '80px',
                                    objectFit: 'contain',
                                }}
                            /></Link>
                    </div>
                    <div className="mobile-menu" onClick={() => { handleMobileMenu(); }}>
                        <span class="material-symbols-outlined">
                            {mobileMenuOpen ? 'close' : 'menu'}
                        </span>
                    </div>

                </header>
            </>
        );
    }

    const [aboutOpen, setAboutOpen] = useState(false);
    const [aboutClosing, setAboutClosing] = useState(false);
    const aboutData = navData.find(item => item.name === 'about').submenus;

    const handleAbout = () => {
        if (aboutOpen) {
            setAboutClosing(true);
            setTimeout(() => {
                setAboutOpen(false);
                setAboutClosing(false);
            }, 500);
        } else {
            setAboutOpen(true);
            setSelectorOpen(false);
            setSelector(null);
        }
    }

    const About = () => {
        return (
            <>
                <nav className={`about-menu ${aboutClosing ? 'closing' : ''}`}>
                    {aboutData.map((item, index) => {
                        return (
                            <Link
                                to={item.url}
                                key={index}
                                className={`about-link ${aboutClosing ? 'closing' : ''}`}
                                onClick={() => {
                                    handleAbout();
                                }}
                            >
                                {item.name}
                            </Link>
                        );
                    })}
                </nav>
                <div className={`darken-page ${aboutClosing ? 'closing' : ''}`}></div>
            </>
        );
    }


    const DesktopMenu = () => {
        return (
            <header className='header desktop-header' id='header'>
                <div className='header-logo'>
                    <Link
                        to='/'
                        css={{
                            width: '53px',
                            height: '53px',
                            position: 'absolute',
                            paddingLeft: 'calc(var(--smallbar) - (0.5 * 53px))',
                            marginTop: '-25px',
                        }}
                        onClick={() => {
                            setSelectorOpen(false);
                            setSelector(null);
                        }}><img
                            src={logo}
                            alt='logo'
                            css={{
                                width: '50px',
                                height: '50px',
                                objectFit: 'contain',
                            }}
                        /></Link>
                </div>
                <div className="link-container">
                    {navData.map((item, index) => {
                        return (
                            //if the item has no subitems, just create a link
                            item.submenus === undefined ?
                                <div key={index} className='header-link'>
                                    <Link
                                        to={
                                            //if the url is different from the first part of the current path (which is the current page),
                                            //use the url, otherwise, dont change the url
                                            item.url !== pathname.substring(0, pathname.indexOf('/', 1)) ? item.url : pathname
                                        }
                                        className='header-link-text'
                                        onClick={() => {
                                            setSelectorOpen(false);
                                            setSelector(null);
                                        }}
                                    >{item.name}</Link>
                                </div>
                                :
                                //if the item has subitems, create a link that opens a selector when clicked
                                <div className='header-link' key={index}>
                                    <div className='header-link-text' onClick={() => {
                                        item.name !== 'about'
                                            ? handleSelector(item.submenus)
                                            : handleAbout();
                                    }
                                    }>{item.name}</div>
                                </div>
                        );
                    })}
                </div>
            </header>
        );
    }

    const Selector = () => {
        return (
            <div className="selector-container">
                {selector.map((item, index) => {
                    //if the item has no subitems, just create a link
                    if (item.submenus === undefined) {
                        return (
                            <Link
                                css={{
                                    backgroundImage: `url(${item.image})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                }}
                                to={
                                    //if the url is different from the first part of the current path (which is the current page),
                                    //use the url, otherwise, dont change the url
                                    item.url !== pathname.substring(0, pathname.indexOf('/', 1)) ? item.url : pathname
                                }
                                key={index}
                                className='selector'
                                onClick={() => {
                                    setSelectorOpen(false);
                                    setSelector(null);
                                }}
                            >{item.name}
                            </Link>
                        );
                    }
                    //if the item has subitems, create a selector that opens more subitems when hovered
                    else {
                        return (
                            <div
                                className='selector selector-reveal'
                                key={index}
                                css={{
                                    backgroundImage: `url(${item.image})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                }}
                            >{item.name}
                                {
                                    //map through the subitems and create a link for each one
                                    item.submenus.map((item, index) => {
                                        return (
                                            <Link
                                                key={index}
                                                onClick={() => {
                                                    setSelectorOpen(false);
                                                    setSelector(null);
                                                }}
                                                to={
                                                    //if the url is different from the first part of the current path (which is the current page),
                                                    //use the url, otherwise, dont change the url
                                                    item.url !== pathname.substring(0, pathname.indexOf('/', 1)) ? item.url : pathname
                                                }
                                                className={`menu-reveal-container ${index === 0 ? 'top-container' : 'bottom-container'
                                                    }`}>
                                                <div key={index} className='menu-reveal'>
                                                    <span className='menu-reveal-letter'>
                                                        {index === 0 ? 'W' : 'M'}
                                                    </span>
                                                    <span className='menu-reveal-text'>
                                                        {index === 0 ? 'omen' : 'en'}
                                                    </span>
                                                </div>
                                            </Link>
                                        );
                                    })}
                            </div>
                        );
                    }
                })}
            </div >
        );
    }

    return (
        <>
            {isMobile ? <MobileMenu></MobileMenu> : <DesktopMenu></DesktopMenu>}
            {(isMobile && mobileMenuOpen) ?
                <div className={`mobile-menu-container ${mobileMenuClosing ? 'closing' : ''}`}>
                    <AccordionMenu data={navData} />
                </div>
                : null}
            {(!isMobile && selectorOpen) ? <Selector></Selector> : null}
            {curtainsOn ? <Curtains></Curtains> : null}
            {aboutOpen ? <About></About> : null}
        </>
    );
}