// react component that displays given menu items

import { Link } from 'react-router-dom';

export default function TopbarSelect(props) {
    
    return (
        <div className="topbar-select">
            {props.items.items.map((item, index) => {
                return (
                    <Link to={item.link} key={index}>
                        <div className="topbar-select-item">
                            {item.title}
                        </div>
                    </Link>
                )
            })}
        </div>
    );
}