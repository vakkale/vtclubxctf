import Dropdown from './Dropdown';
import { useState } from "react";
import { Link } from 'react-router-dom';

const MenuItems = ({ items, depthLevel }) => {
    const [dropdown, setDropdown] = useState(false);
    return (
        <li className="menu-items">
            {items.children ? (
                <>
                    <button
                        aria-expanded={dropdown ? "true" : "false"}
                        onClick={() => setDropdown((prev) => !prev)}
                        type="button" aria-haspopup="menu"
                    >
                        {/* add a check for if setdropdown is true and change the symbol from expand_more to expand_less */}
                        <span className='button-title'>{items.name}</span>
                        {' '}
                        {depthLevel > 0 ? {/* leave empty */} : <span className="material-symbols-outlined button-arrow">{dropdown ? "expand_less" : "expand_more"}</span>}
                    </button>
                    <Dropdown
                        submenus={items.children}
                        dropdown={dropdown}
                    />
                </>
            ) : (
                <Link to={{ pathname: `/training/${items.id}`, state: { plan: items } }} >{items.name}</Link>
            )
            }
        </li >
    );
}

export default MenuItems;