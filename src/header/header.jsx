import { React, Component } from 'react';
import './header.scss';
import './curtains.scss';
import './selector.scss';
import { Link } from 'react-router-dom';
import logo from '../assets/logo2.png';
import navData from '../data/navigation.js';

export default class Header extends Component {
    constructor() {
        super();
        this.state = {
            name: "Header",
            curtainActive: false,
            selectorActive: false,
            data: navData,
            selectorData: null
        }
        this.navigation = this.navigation.bind(this);
    }

    navigation = (menuItem) => {
        const data = this.state.data;
        switch (menuItem) {
            case 'competition':
                this.setState({ curtainActive: true });
                setTimeout(() => {
                    this.setState({ selectorActive: true });
                    this.setState({ selectorData: data.competition[1].sections });
                }, 980);
                break
            case 'training':
                this.setState({ curtainActive: true });
                setTimeout(() => {
                    this.setState({ selectorActive: true });
                    this.setState({ selectorData: data.training[1].sections });
                }, 980);
                break
            case 'community':
                this.setState({ curtainActive: true });
                setTimeout(() => {
                    this.setState({ selectorActive: true });
                    this.setState({ selectorData: data.community[1].sections });
                }, 980);
                break
        }
        setTimeout(() => { this.setState({ curtainActive: false }); }, 2100);
    }

    render() {
        return (
            <>
                <header id='header' style={{ display: 'flex', width: '100%' }}>
                    <Link style={{ alignSelf: 'center', textAlign: 'center' }} className='menuPic' to="/">
                        <div>
                            <img width={50} src={logo} alt="png" />
                        </div>
                    </Link>

                    <div className='linkContainer' style={{ flexWrap: 'nowrap', alignContent: 'center' }}>
                        <Link className='menuLink' to="/News">  NEWS  </Link>
                        <div className='menuLink' onClick={() => this.navigation("competition")}>  COMPETITION </div>
                        <div className='menuLink' onClick={() => this.navigation("training")}>  TRAINING  </div>
                        <div className='menuLink' onClick={() => this.navigation("community")}>  COMMUNITY  </div>
                        <Link className='menuLink' to="/About">  ABOUT  </Link>
                    </div>
                    <Link style={{ textAlign: 'left', left: '0', cursor: 'default' }} className='menuPic' to="/"></Link>
                </header>
                {this.state.curtainActive && <Curtain></Curtain>}
                {this.state.selectorActive && <Selector data={this.state.selectorData}></Selector>}
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
        <div className="selectorContainer background">
            {
                data.data.map((item) => (
                    <div key={item.id} className="selector background" style={{ backgroundImage: `url(${item.image})` }}>{item.name}</div>
                ))
            }
        </div>
        /* 
        <div className="selectorContainer background">
        {
            data.data.map((item) => (
                <div key={item.id} className="selector">
                    <div className='selectorImage' style={{backgroundImage: `url(${item.image})`}}></div>
                    <span className="selectorText">{item.name}</span>
                </div>
            ))
        }
    </div >
     */
    );
}