import './PracticeInfo.scss';

export default function GeneralInfo() {
    const background = 'https://i.imgur.com/R1PDJJ2.jpg';

    const info = [
        {
            icon: "pin_drop",
            description: "Johnson-Miller Track Complex"
        },
        {
            icon: "calendar_month",
            description: "Every weekday"
        },
        {
            icon: "schedule",
            description: "Distance: 6:00PM"
        },
        {
            icon: "schedule",
            description: "Sprints/Field: 6:00PM"
        },
        {
            icon: "schedule",
            description: "Lifting Timeslot: Tuesdays 7:00-8:00AM @ Rec Field House"
        }
    ];

    return (
        <div className="pi-container">
            <div className="pi-bg" style={{ backgroundImage: `url(${background})` }}></div>
            <div className="pi-items-container">
                <div className="overlay-left"></div>
                <div className="info-bar">
                    <h3 className="info-bar-title">Practice Info:</h3>
                    {info.map((item, index) => {
                        return (
                            <div className="info-item" key={index}>
                                <span className="info-icon">
                                    <i className="material-symbols-outlined">{item.icon}</i>
                                </span>
                                <span className="info-description">{item.description}</span>
                            </div>
                        );
                    })}
                </div>
                {/* <div className="map-container">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1848.7381786462252!2d-80.42135894976245!3d37.217397647519675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x884d95054ce5bcff%3A0x42940f7a5f42d074!2sJohnson-Miller%20Track%20Complex%2C%20Blacksburg%2C%20VA%2024060!5e0!3m2!1sen!2sus!4v1673769139811!5m2!1sen!2sus" width="100%" height="100%" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div> */}
                <div className="overlay-right"></div>
                {/* <div className="overlay-top"></div> */}
            </div>
        </div>
    );
}