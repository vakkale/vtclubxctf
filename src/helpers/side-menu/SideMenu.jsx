import './SideMenu.scss';
import MenuItems from './MenuItems';

const SideMenu = ({ menuItems }) => {
    const depthLevel = 0;
    return (
        <ul className="menus">
            {menuItems.map((menu, index) => {
                const depthLevel = 0;
                return <MenuItems items={menu} key={index} />;
            })}
        </ul>
    );
}
export default SideMenu;
