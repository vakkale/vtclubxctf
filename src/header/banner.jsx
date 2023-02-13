import { Link } from 'react-router-dom';
import './banner.scss'
import { useLocation } from 'react-router-dom';

export default function Banner() {

    //location
    const location = useLocation();

    //isMobile
    const isMobile = window.innerWidth <= 1000;

    const countDownStart = new Date("Feb 15, 2023 12:00:00").getTime();
    /* const countDownEnd = new Date("Feb 16, 2023 12:00:00").getTime(); */
    const now = new Date().getTime();

    //countdown timer
    function BannerCountdown() {

        const x = setInterval(function () {

            const now = new Date().getTime();

            /* if (now > countDownStart) {
                distance = countDownStart - now;
            }
            else {
                distance = countDownEnd - now;
            } */
            const distance = countDownStart - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            document.getElementById("days").innerHTML = days;
            document.getElementById("hours").innerHTML = hours;
            document.getElementById("minutes").innerHTML = minutes;
            document.getElementById("seconds").innerHTML = seconds;

            /* if (now > countDownStart) {
                clearInterval(x);
                document.getElementById("days").innerHTML = "EXPIRED";
                document.getElementById("hours").innerHTML = "EXPIRED";
                document.getElementById("minutes").innerHTML = "EXPIRED";
                document.getElementById("seconds").innerHTML = "EXPIRED";
            } */
        }, 1000);

        return (
            <div className="banner-countdown">
                <div className="banner-countdown-item">
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
    }

    return (
        <div className="banner"
            style={{
                marginTop: ((location.pathname === '/') && isMobile) ? '60px' : !isMobile ? '60px' : '0px',
            }}
        >
            <h1 className='banner-text'>{!isMobile ? "Giving Day 2023! Feb 15/16 Noon to Noon!" : "Giving Day 2023!"}</h1>
            {now > countDownStart ? <button className='banner-button'>Donate Now</button> : null}

            <Link to={'/giving-day'} className='banner-link'>
                <button className='banner-button'>
                    Learn More
                </button>
            </Link>
            <BannerCountdown />
        </div>
    );
}