import { React, Component, useState } from 'react';
import './header.scss';
import './curtains.scss';
import { Link } from 'react-router-dom';
import logo from '../assets/logo2.png';
import { wait } from '@testing-library/user-event/dist/utils';
import { render } from '@testing-library/react';

function reveal() {

}

function hide() {

}



export default class Header extends Component {
    constructor() {
        super();
        this.state = {
            name: "Header",
            isActive: false
        }
        this.curtains = this.curtains.bind(this);
    }

    curtains = (menuItem) => {
        switch (menuItem) {
            case 'competition':
                console.log('competition');
                this.setState({ isActive: true });
                break
            case 'training':
                console.log('training');
                this.setState({ isActive: true });
                break
            case 'records':
                console.log('records');
                this.setState({ isActive: true });
                break
        }
        setTimeout(() => { this.setState({ isActive: false }); }, 2100);
    }

    render() {
        const { isActive } = this.state;
        return (
            <>
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
                {isActive && <Curtain></Curtain>}
            </>
        )
    };
}

const Curtain = () => {
    return (
        <>
            <div className="curtainsContainer">
                <div className="curtain small"></div>
                <div className="curtain big"></div>
                <div className="curtain big hide"></div>
                <div className="curtain big hide"></div>
                <div className="curtain big hide"></div>
                <div className="curtain big hide"></div>
                <div className="curtain big"></div>
                <div className="curtain small"></div>
            </div>
        </>
    );
}