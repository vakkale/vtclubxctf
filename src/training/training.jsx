import { React, Component } from 'react';
import './training.scss';
import '../helpers/side-menu/SideMenu.scss'
import trainingData from '../data/training.json';
import Loader from '../loader/loader';
import SideMenu from '../helpers/side-menu/SideMenu.jsx';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default class Training extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "TrainingPlans",
            data: trainingData,
            currentPlan: this.props.plan/* ,
            mount: true */
        }
        this.changeState = this.changeState.bind(this);
    }

    changeState(plan) {
        this.setState({ currentPlan: plan });
    }

    render() {

        /* const SideMenu = ({ menuItems }) => {
            const depthLevel = 0;
            return (
                <ul className="menus">
                    {menuItems.map((menu, index) => {
                        const depthLevel = 0;
                        return <MenuItems items={menu} key={index} />;
                    })}
                </ul>
            );
        }

        const MenuItems = ({ items, depthLevel }) => {
            const [dropdown, setDropdown] = useState(false);
            return (
                <li className="menu-items">
                    {items.children ? (
                        <>
                            <button
                                aria-expanded={dropdown ? "true" : "false"}
                                onClick={() => setDropdown((prev) => !prev)}
                                type="button" aria-haspopup="menu"
                            >
                                {depthLevel > 0 ? <span>&raquo;</span> : <span className="arrow" />}
                                {items.name}{' '}
                            </button>
                            <Dropdown
                                submenus={items.children}
                                dropdown={dropdown}
                            />
                        </>
                    ) : (
                        <Link to={`${items.id}`} onClick={() => this.changeState(items)}>{items.name}</Link>
                    )
                    }
                </li >
            );
        }

        const Dropdown = ({ submenus, dropdown, depthLevel }) => {
            depthLevel = depthLevel + 1;
            const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";
            return (
                <ul className={`dropdown ${dropdownClass} ${dropdown ? "show" : ""}`}>
                    {submenus.map((submenu, index) => (
                        <MenuItems
                            items={submenu}
                            key={index}
                            depthLevel={depthLevel} />
                    ))}
                </ul>
            );
        } */

        const Header = () => {
            return (
                <div className="headerWrapper">
                    <div className="headerText">{this.state.currentPlan.fullName}</div>
                </div>
            );
        }

        const Menu = () => {
            return (
                <div className="menuWrapper">
                    <div className="menuTitle">Training Plans</div>
                    <SideMenu menuItems={trainingData} className="menu"></SideMenu>
                </div>
            );
        }

        const Plan = () => {
            return (
                <div className="planWrapper">
                    <iframe 
                    src={this.state.currentPlan.url} 
                    title="plan"
                    width="100%" 
                    height="100%" 
                    frameBorder="0"
                    />
                </div>
            );
        }

        return (
            <>
                {this.state.mount && <Loader></Loader>}
                < div className="wrapper" key={this.props.key} >
                    <Header className="header" />
                    <Menu className="menu" />
                    <Plan className="plan" />
                </div >
            </>
        )
    };
}