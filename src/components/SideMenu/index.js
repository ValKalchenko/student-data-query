import { Menu } from "antd";
import { useNavigate } from "react-router-dom";

const SideMenu = () => {
    const navigate = useNavigate();

    const mainMenuItems = [
        {
            key: '/',
            label: 'Data View'
        },
        {
            key: 'entry',
            label: 'Data Entry'
        }
    ];

    const onMenuItemClick = (mainMenuItem) => {
        navigate(mainMenuItem.key)
    };

    return (
        <Menu items={mainMenuItems} onClick={onMenuItemClick} />
    );
};

export default SideMenu;