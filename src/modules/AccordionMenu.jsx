import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import './AccordionMenu.scss';

function AccordionMenu({ data }) {
    /* const [showMenu, setShowMenu] = useState(true); */

    const MenuItems = ({ items, depthLevel }) => {
        const [children, setChildren] = useState(false);

        let ref = useRef(null);

        const closeChildren = () => {
            /* setShowMenu(false); */
        };

        return (
            <li
                className="menu-items"
                ref={ref}
            >
                {items.submenus ? (
                    <>
                        <button
                            type="button"
                            aria-haspopup="menu"
                            aria-expanded={children ? 'true' : 'false'}
                            onClick={() => setChildren((prev) => !prev)}
                            className="menu-item"
                        >
                            {items.name}{' '}
                            <span className="arrow" />
                        </button>
                        <Dropdown
                            depthLevel={depthLevel}
                            submenus={items.submenus}
                            dropdown={children}
                        />
                    </>
                ) : (
                    <Link className="menu-item" to={items.url} onClick={closeChildren}> {items.name} </Link>
                )}
            </li>
        );
    };

    const Dropdown = ({ submenus, dropdown, depthLevel }) => {
        depthLevel = depthLevel + 1;
        return (
            <ul
                className={`dropdown ${dropdown ? 'show' : ''
                    }`}
            >
                {submenus.map((submenu, index) => (
                    <MenuItems
                        items={submenu}
                        key={index}
                        depthLevel={depthLevel}
                    />
                ))}
            </ul>
        );
    };
    /* if (showMenu) */
        return (

            <nav>
                <ul className="accordion-menu">
                    {data.map((menu, index) => {
                        return (
                            <MenuItems
                                items={menu}
                                key={index}
                                depthLevel={0}
                            />
                        );
                    })}
                </ul>
            </nav>
        );
};
export default AccordionMenu;