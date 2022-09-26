import { React, Component } from 'react';
import './header.scss';
import { Link } from 'react-router-dom';
import logo from '../assets/logo2.png';
import { useScrollDirection } from 'react-use-scroll-direction'
import Curtains from './selectors/curtains';

function reveal() {

}

function hide() {

}



export default class Header extends Component {
    curtains = (menuItem) => {
        
        switch (menuItem) {
            case 'competition':
                console.log('competition');

                break
            case 'training':
                console.log('training');

                break
            case 'records':
                console.log('records');

                break
        }
    }
    render() {
        return (
            <>
                <Curtains></Curtains>
                <header id='header' style={{ display: 'flex', width: '100%' }}>
                    {/* DO NOT TOUCH. ALIGNMENT IS PERFECT */}
                    <Link style={{ alignSelf: 'center', textAlign: 'center' }} className='menuPic' to="/">
                        <div>
                            <img width={50} src={logo} alt="png" />
                        </div>
                    </Link>

                    <div className='linkContainer' style={{ flexWrap: 'nowrap', alignContent: 'center' }}>
                        <Link className='menuLink' to="/News">  NEWS  </Link>
                        <div className='menuLink' onClick={() => this.curtains("competition")}>  COMPETITION </div>
                        <div className='menuLink' onClick={() => this.curtains("training")}>  TRAINING  </div>
                        <div className='menuLink' onClick={() => this.curtains("records")}>  RECORDS  </div>
                        <Link className='menuLink' to="/About">  ABOUT  </Link>
                    </div>

                    <Link style={{ textAlign: 'left', left: '0', cursor: 'default' }} className='menuPic' to="/">
                    </Link>
                </header>
            </>
        )
    };
}