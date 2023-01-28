import './SideBarLite.scss';

export default function SideBarLite({ item, schedule }) {
    const featuredItem = item;

    return (
        <div className="sidebar-container" id="sidebar" style={{
            flex: 'calc(100% * (1 / 3))'
        }}>
            <div className="featured-content ">
                <div className="list-header">
                    <span className="list-item-date">{(featuredItem.date) || (featuredItem.season)}</span>
                    <span className="list-item-category">{(featuredItem.category) || (featuredItem.year)}</span>
                </div>
                <div className="feature-title">{featuredItem.title || featuredItem.name}</div>
                {schedule &&
                    <>
                        <ul className="schedule">
                            {schedule.map((item, index) => {
                                return (
                                    <ul>
                                        <li className='meet' key={index}>
                                            <a href={item.url} rel="noreferrer" target="_blank"
                                                style={{
                                                    //no text decoration if no url
                                                    textDecoration: item.url ? 'underline' : 'none'
                                                }}
                                            >{item.title}</a>
                                        </li>
                                        <li className='location'>
                                            {item.location}
                                        </li>
                                    </ul>
                                )
                            })}
                        </ul>
                        <div className='schedule'>
                            <span className='meet'>All-time records can be found <a 
                                href="https://docs.google.com/spreadsheets/d/1zZUx2uUMNxXSfT_NWlqtQy-4GPsGB0dLrmT53pfjcoo/edit?usp=sharing"
                                rel="noreferrer"
                                target="_blank"
                            >here.</a></span>
                        </div>
                    </>
                }
            </div>
        </div>
    );
}
