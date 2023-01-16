import './GeneralInfo.scss';
import { Link } from 'react-router-dom';

export default function GeneralInfo() {
    const background = 'https://i.imgur.com/SCxemMC.jpg';
    /* const background = 'https://i.imgur.com/feLAegV.jpg'; */

    return (
        <div className="gi-container">
            <div className="gi-top-container">
                <div className="gi-bg" style={{ backgroundImage: `url(${background})` }}></div>
                <div className="gi-title-container">
                    <div className="overlay-left"></div>
                    <h1 className="gi-title">We Are VT Club XCTF</h1>
                    <div className="overlay-right"></div>
                    <div className="overlay-top"></div>
                </div>
            </div >
            <div className="gi-description">
                <p>We are Virginia Tech's Cross Country and Track & Field club. Dedicated to all things running, throwing and jumping! We welcome athletes of all skill levels, whether you're just trying to stay in shape or want to continue competing in track/cross country in college.</p>
                <p>Originally founded in 2007, the club has since grown to over 230 dues-paying members and is supported by Virginia Tech's Rec Sports department! <Link to={'/join'} >Join us</Link> and be a part of the biggest and most welcoming sport club community at VT!</p>
            </div>
        </div>
    );
}