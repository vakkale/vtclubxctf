import { React, Component } from 'react';
import './training.scss';
import '../helpers/side-menu/SideMenu.scss'
import trainingData from '../data/training.json';
import SideMenu from '../helpers/side-menu/SideMenu.jsx';

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
                < div className="wrapper" key={this.props.key} >
                    <Header className="header" />
                    <Menu className="menu" />
                    <Plan className="plan" />
                </div >
            </>
        )
    };
}