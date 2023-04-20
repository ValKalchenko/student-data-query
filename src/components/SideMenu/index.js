import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
import { Auth } from "aws-amplify";

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
        },
        {
            key: 'query',
            label: 'Data Query'
        },
        {
            key: 'signout',
            label: 'Sign Out'
        }
    ];

    const onMenuItemClick = async (mainMenuItem) => {
        if (mainMenuItem.key === 'signout'){
            await Auth.signOut();
            window.location.reload();
        } else {
        navigate(mainMenuItem.key)
        }
    };

    return (
        <Menu items={mainMenuItems} onClick={onMenuItemClick} />
    );
};

export default SideMenu;