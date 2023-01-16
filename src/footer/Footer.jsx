import './Footer.scss';
import instagram_logo from './social-icons/instagram.svg';
import facebook_logo from './social-icons/facebook.svg';
import twitter_logo from './social-icons/twitter.svg';
import youtube_logo from './social-icons/youtube.svg';
import { Link, useLocation } from 'react-router-dom';

const socialdata = [
    {
        id: "twitter",
        link: "https://twitter.com/vt_clubxctf",
        logo: twitter_logo
    },
    {
        id: "facebook",
        link: "https://www.facebook.com/groups/122225544496031/",
        logo: facebook_logo
    },
    {
        id: "youtube",
        link: "https://www.youtube.com/user/vtrunningclub",
        logo: youtube_logo
    },
    {
        id: "instagram",
        link: "https://www.instagram.com/vt_clubxctf/",
        logo: instagram_logo
    }
]

const Footer = () => {

    const location = useLocation();
    return (
        <div className="footer-container" id="footer">
            <div className="footer-top">
                <Link to="/contact" className="footer-link">Contact Us</Link>
                <Link to="/" className="footer-logo"></Link>
                <Link to="/donate" className="footer-link">Support Us</Link>
            </div>
            <div className="footer-bottom">
                <div className="footer-bottom-left"></div>
                <div className="footer-bottom-middle">
                    {socialdata.map((social) => {
                        return (
                            <a
                                key={social.id}
                                className="footer-social"
                                href={social.link}
                                target={"_blank"}
                                rel="noreferrer"
                                style={{
                                    backgroundImage: `url(${social.logo})`,
                                    backgroundSize: "cover",
                                    width: "20px",
                                    height: "20px"
                                }}>
                            </a>
                        );
                    })}
                </div>
                <div className="footer-bottom-right"></div>
            </div>
        </div>
    );
}
export default Footer;