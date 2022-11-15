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
                        {items.name}{' '}
                        {depthLevel > 0 ? <span>&raquo;</span> : <span className="material-symbols-outlined">hand_bones</span>}
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