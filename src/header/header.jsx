import React, { Component } from 'react';
import './header.scss';
import './curtains.scss';
import './selector.scss';
import { Link } from 'react-router-dom';
import logo from '../assets/logo2.png';
import navData from '../data/navigation.json';

export default class Header extends Component() {
    constructor() {
        super();
        this.state = {
            name: "Header",
            curtainActive: false,
            selectorActive: false,
            data: navData
        }
        this.navigation = this.navigation.bind(this);
    }

    navigation = (menuItem) => {
        const data = this.state.data;
        switch (menuItem) {
            case 'competition':
                this.setState({ curtainActive: true });
                setTimeout(() => { this.setState({ selectorActive: true }); }, 1380);
                Selector(data.competition);
                break
            case 'training':
                this.setState({ curtainActive: true });
                setTimeout(() => { this.setState({ selectorActive: true }); }, 1380);
                Selector(data.training);
                break
            case 'community':
                this.setState({ curtainActive: true });
                setTimeout(() => { this.setState({ selectorActive: true }); }, 1380);
                Selector(data.community);
                break
        }
        setTimeout(() => { this.setState({ curtainActive: false }); }, 1380);
    }

    render() {
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
                        <div className='menuLink' onClick={() => this.navigation("competition")}>  COMPETITION </div>
                        <div className='menuLink' onClick={() => this.navigation("training")}>  TRAINING  </div>
                        <div className='menuLink' onClick={() => this.navigation("records")}>  COMMUNITY  </div>
                        <Link className='menuLink' to="/About">  ABOUT  </Link>

                    </div>

                    <Link style={{ textAlign: 'left', left: '0', cursor: 'default' }} className='menuPic' to="/"></Link>
                </header>
                {this.state.curtainActive && <Curtain></Curtain>}
                {this.state.selectorActive && <Selector></Selector>}
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

const Selector = (data) => {
    return (
        <>
            <div className='selectorContainer'>
                {
                    data.map((item) => (
                        <div className="selector">{item[1].name}</div>
                    ))
                }
            </div>
        </>
    );
}