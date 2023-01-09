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

const logo = 'https://i.imgur.com/TogHaZv.png';
const logo2 = 'https://i.imgur.com/u1KaQeC.png';


export default function Header() {

    const pathname = useLocation().pathname;

    //if link changes to a new page, close the selector
    useEffect(() => {
        setSelectorOpen(false);
        setSelector(null);
    }, [pathname]);

    //mobile or not
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1000 ? true : false);

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth <= 1000) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
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

    const MobileMenu = () => {
        return (
            <header className='header mobile-header' id='header'>
                <div className="mobile-hamburger-menu">

                </div>
                <div className='header-logo'>
                    <Link
                        to='/'
                        css={{
                            width: '80px',
                            height: '80px',
                            position: 'absolute',
                            marginLeft: '-40px',
                            marginTop: '-40px',
                        }}><img
                            src={logo2}
                            alt='logo'
                            css={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'contain',
                            }}
                        /></Link>
                </div>
            </header>
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
                        }}><img
                            src={logo}
                            alt='logo'
                            css={{
                                width: '100%',
                                height: '100%',
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
                                        handleSelector(item.submenus);
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
            {selectorOpen ? <Selector></Selector> : null}
            {curtainsOn ? <Curtains></Curtains> : null}
        </>
    );
}