import './Footer.scss';
import instagram_logo from './social-icons/instagram.svg';
import facebook_logo from './social-icons/facebook.svg';
import twitter_logo from './social-icons/twitter.svg';
import { useLocation } from 'react-router-dom';
/* import youtube_logo from './social-icons/youtube.svg'; */

const socialdata = [
    {
        id: "instagram",
        link: "https://www.instagram.com/vt_clubxctf/",
        logo: instagram_logo
    },
    {
        id: "facebook",
        link: "https://www.facebook.com/groups/122225544496031/",
        logo: facebook_logo
    },
    {
        id: "twitter",
        link: "https://twitter.com/vt_clubxctf",
        logo: twitter_logo
    }
]

const Footer = () => {

    const location = useLocation();
    if (location.pathname !== "/") {
        return (
            <div className="footer-container" id="footer">
                <div className="footer-top">

                </div>
                <div className="footer-bottom">
                    <div className="footer-bottom-left"></div>
                    <div className="footer-bottom-middle">
                        {socialdata.map((social) => {
                            return (
                                <div
                                    key={social.id}
                                    className="footer-social"
                                    style={{
                                        backgroundImage: social.logo,
                                        width: "30px",
                                        height: "30px"
                                    }}>
                                    <a
                                        href={social.link}
                                        target={"_blank"}
                                        rel="noreferrer">
                                    </a>
                                </div>
                            );
                        })}
                    </div>
                    <div className="footer-bottom-right"></div>
                </div>
            </div>
        );
    }
}
export default Footer;