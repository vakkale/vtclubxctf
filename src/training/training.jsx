import { React, Component } from 'react';
import './training.scss';
import trainingData from '../data/training.json';
import Loader from '../loader/loader';

export default class Training extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "TrainingPlans",
            data: trainingData,
            currentPlan: this.props.currentPlan,
            mount: true
        }
        /* this.planSelector = this.planSelector.bind(this); */
        /* const { currentPlan = "about" } = this.props.currentPlan; */
    }

    /*  componentDidMount() {
         this.state.mount = true;
     } */

    componentDidUpdate() {
        this.setState.currentPlan = this.props.currentPlan;
    }

    /* planSelector = (currentPlan) => {
        const data = this.state.data;
        switch (menuItem) {
            case 'home':
                this.setState({ curtainActive: true });
                setTimeout(() => {
                    this.setState({ selectorActive: false });
                }, 980);
                break
        }
        setTimeout(() => { this.setState({ curtainActive: false }); }, 2100);
    } */

    render() {
        const Header = () => {
            return (
                <div className="headerWrapper">
                    <div className="headerText">{/* TODO: pull the name of the plan from the data */}</div>
                </div>
            );
        }

        const Menu = () => {
            return (
                <div className="menuWrapper">
                    <div className="menuTitle">Training Plans:</div>
                    {/* TODO: menu logic. Pull the names/links from the data and have them display nested. Reveal the children on hover */}
                </div>
            );
        }

        const Plan = () => {
            return (
                <div className="planWrapper">
                    <iframe src=""
                    width={"100%"} height={"100%"}></iframe>
                </div>
            );
        }

        return (
            <>
                {this.state.mount && <Loader></Loader>}
                <div className="wrapper">
                    <Header className="header" />
                    <Menu className="menu" />
                    <Plan className="plan" />
                </div>
            </>
        )
    };
}




/* const Selector = (data) => {
    return (
        <div className="selectorContainer background">
            {
                data.data.map((item) => (
                    <div key={item.id} className="selector background" style={{ backgroundImage: `url(${item.image})` }}>
                        <span>{item.name}</span>
                    </div>
                ))
            }
        </div>
    );
} */