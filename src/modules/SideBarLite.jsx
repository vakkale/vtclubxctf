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
                    <ul className="schedule">
                        {schedule.map((item, index) => {
                            return (
                                <li className='meet' key={index}>
                                    <a href={item.url} rel="noreferrer" target="_blank">{item.title}</a>
                                </li>
                            )
                        })}
                    </ul>
                }
            </div>
        </div>
    );
}
