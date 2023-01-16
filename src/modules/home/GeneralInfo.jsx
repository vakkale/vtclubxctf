import './GeneralInfo.scss';
import { Link } from 'react-router-dom';

export default function GeneralInfo() {
    const background = 'https://i.imgur.com/SCxemMC.jpg';

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
                <p>Originally founded in 2007, the club has since grown to over 230 dues-paying members and is supported by Virginia Tech's Rec Sports department! Join us and be a part of the biggest and most welcoming sport club community at VT!</p>
                <p>Practice begins on January 23rd for the Spring Track & Field season and is held daily at . Check out the <Link to={'/join'}>Join</Link> page for more information.</p>
            </div>
        </div>
    );
}

{/* <div className='general-info-container'>
            <div className="description">
                <h3>We Are VT Club XCTF</h3>
                <p>We are Virginia Tech's Cross Country and Track & Field club. Dedicated to all things running, throwing and jumping! We welcome athletes of all skill levels, whether you're just trying to stay in shape or want to continue competing in track/cross country in college.</p>
                <p>Originally founded in 2007, the club has since grown to over 230 dues-paying members and is supported by Virginia Tech's Rec Sports department! Join us and be a part of the biggest and most welcoming sport club community at VT!</p>
                <p>Practice begins on January 23rd for the Spring Track & Field season and is held daily at . Check out the <Link to={'/join'}>Join</Link> page for more information.</p>
            </div>
            <div className="practice-location">
                <div className="map-container">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1848.7381786462252!2d-80.42135894976245!3d37.217397647519675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x884d95054ce5bcff%3A0x42940f7a5f42d074!2sJohnson-Miller%20Track%20Complex%2C%20Blacksburg%2C%20VA%2024060!5e0!3m2!1sen!2sus!4v1673769139811!5m2!1sen!2sus" width="100%" height="100%" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div> */}