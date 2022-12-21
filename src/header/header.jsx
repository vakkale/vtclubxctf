import { React, Component } from 'react';
import './header.scss';
import '../helpers/curtains.scss';
import Curtains from '../helpers/Curtains.jsx';
import './selector.scss';
import { Link } from 'react-router-dom';
import logo from '../assets/logo2.png';
import navData from '../data/navigation.js';

export default class Header extends Component {

    constructor() {
        super();
        this.state = {
            name: "Header",
            selectorActive: false,
            data: navData,
            selectorData: null,
            currMenu: " "
        }
        this.navigation = this.navigation.bind(this);
    }

    /* shouldComponentUpdate(nextProps) {
        if (nextProps.value !== this.props.value) {
            return true;
          } else {
            return false;
          }
    } */

    navigation = (menuItem) => {
        const data = this.state.data;
        this.setState({ curtainActive: false });
        if (menuItem === this.state.currMenu) {
            this.setState({ selectorActive: false });
        }
        else {
            switch (menuItem) {
                default:
                    break
                case 'competition':
                    setTimeout(() => { this.setState({ curtainActive: true }); }, 5);
                    setTimeout(() => {
                        this.setState({ selectorActive: true });
                        this.setState({ selectorData: data.competition[1].sections });
                        this.setState({ currMenu: menuItem });
                    }, 980);
                    break
                case 'training':
                    setTimeout(() => { this.setState({ curtainActive: true }); }, 5);
                    setTimeout(() => {
                        this.setState({ selectorActive: true });
                        this.setState({ selectorData: data.training[1].sections });
                        this.setState({ currMenu: menuItem });
                    }, 980);
                    break
                case 'community':
                    setTimeout(() => { this.setState({ curtainActive: true }); }, 5);
                    setTimeout(() => {
                        this.setState({ selectorActive: true });
                        this.setState({ selectorData: data.community[1].sections });
                        this.setState({ currMenu: menuItem });
                    }, 980);
                    break
            }
        }
    }

    render() {
        const Selector = () => {
            return (
                <div className="selectorContainer background">
                    {
                        this.state.selectorData.map((item) => (
                            <Link
                                to={item.link}
                                key={item.id}
                                className="selector background"
                                /* SOLUTIION TO DARKNESS PROBLEM?????? Find out how to pass the item.image as a css variable
                                so i can also have hover
                                
                                style={{background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${item.image})`}} */
                                style={{ backgroundImage: `url(${item.image})` }}
                                onClick={() => setTimeout(() => {
                                    this.setState({ selectorActive: false });
                                    this.setState({ currMenu: " " });
                                }, 980)}>
                                <span>{item.name}</span>
                            </Link>
                        ))
                    }
                </div>
            );
        }

        return (
            <>
                <header id='header' style={{ display: 'flex', width: '100%' }}>
                    <Link style={{ alignSelf: 'center', textAlign: 'center' }} className='menuPic' to="/">
                        <div>
                            <img width={50} src={logo} alt="png" onClick={() => this.navigation("home")} />
                        </div>
                    </Link>

                    <div className='linkContainer' style={{ flexWrap: 'nowrap', alignContent: 'center' }}>
                        <Link className='menuLink' to="/news">  NEWS  </Link>
                        <div className='menuLink' onClick={() => this.navigation("competition")}>  COMPETITION </div>
                        <div className='menuLink' onClick={() => this.navigation("training")}>  TRAINING  </div>
                        <div className='menuLink' onClick={() => this.navigation("community")}>  COMMUNITY  </div>
                        <Link className='menuLink' to="/about">  ABOUT  </Link>
                    </div>
                    <Link style={{ textAlign: 'left', left: '0', cursor: 'default' }} className='menuPic' to="/"></Link>
                </header>
                {this.state.curtainActive && <Curtains />}
                {this.state.selectorActive && <Selector />}
            </>
        )
    };
}