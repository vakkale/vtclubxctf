import { Link } from 'react-router-dom';
import './banner.scss'
import { useLocation } from 'react-router-dom';

export default function Banner() {

    //location
    const location = useLocation();

    //isMobile
    const isMobile = window.innerWidth <= 1000;

    const countDownEnd = new Date("Feb 16, 2023 12:00:00").getTime();
    const now = new Date().getTime();

    //countdown timer
    /* function BannerCountdown() {

        const x = setInterval(function () {

            const now = new Date().getTime();
            let distance;

            if (now > countDownStart) {
                distance = countDownEnd - now;
            }
            else {
                distance = countDownStart - now;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            document.getElementById("days").innerHTML = days;
            document.getElementById("hours").innerHTML = hours;
            document.getElementById("minutes").innerHTML = minutes;
            document.getElementById("seconds").innerHTML = seconds;

            if (now > countDownStart) {
                clearInterval(x);
                document.getElementById("days").innerHTML = "EXPIRED";
                document.getElementById("hours").innerHTML = "EXPIRED";
                document.getElementById("minutes").innerHTML = "EXPIRED";
                document.getElementById("seconds").innerHTML = "EXPIRED";
            }
        }, 1000);

        return (
            <div className="banner-countdown">
                <div className="banner-countdown-item banner-days">
                    <div className="banner-countdown-number" id="days">
                    </div>
                    <div className="banner-countdown-text">DAYS</div>
                </div>
                <div className="banner-countdown-item">
                    <div className="banner-countdown-number" id="hours"></div>
                    <div className="banner-countdown-text">HRS</div>
                </div>
                <div className="banner-countdown-item">
                    <div className="banner-countdown-number" id="minutes"></div>
                    <div className="banner-countdown-text">MIN</div>
                </div>
                <div className="banner-countdown-item">
                    <div className="banner-countdown-number" id="seconds"></div>
                    <div className="banner-countdown-text">SEC</div>
                </div>
            </div>
        )
    } */

    return (
        <div className="banner"
            style={{
                marginTop: ((location.pathname === '/') && isMobile) ? '60px' : !isMobile ? '60px' : '0px',
            }}
        >
            <h1 className='banner-text'>{

                !isMobile ? "Practice time has been moved to 6:00PM for everybody!" : "Practice now at 6PM!"

            }</h1>
            {/* {now > countDownStart ?
                <a
                    href='https://givingday.vt.edu/amb/clubxctf'
                    target='_blank'
                    rel='noreferrer'
                    className='banner-link'>
                    <button className='banner-button'>Donate Now</button>
                </a>
                : null}

            <Link to={'/giving-day'} className='banner-link'>
                <button className='banner-button'>
                    Learn More
                </button>
            </Link>
            <BannerCountdown /> */}
        </div>
    );
}