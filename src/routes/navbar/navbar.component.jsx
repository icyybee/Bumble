import './navbar.styles.scss';

import { user } from '../../utils/user';

import LightModeIcon from '@mui/icons-material/LightMode';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import MailRoundedIcon from '@mui/icons-material/MailRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';

import { Outlet, Link } from 'react-router-dom';
import { useContext, useState } from 'react';

import { DarkModeContext } from '../../contexts/darkModeContext';

import Settings from '../../components/settings/settings.component';
import Notification from '../../components/notifications/notification.component';

const Navbar = () => {
    const {toggle, darkMode} = useContext(DarkModeContext);
    const [settingsOpen, setSettingsOpen] = useState(false);
    const [notificationOpen, setNotificationOpen] = useState(false);

    return (
        <div className={`theme-${darkMode ? "dark" : "light"}`}>
            <div className='nav'>
                <div className='nav__left'>
                    <Link to='/'>
                        <span>Bumble</span>
                    </Link>
                    <Link to='/'>
                        <HomeRoundedIcon style={{marginTop: "4px"}} />
                    </Link>
                    {darkMode ? (
                        <LightModeIcon onClick={toggle} />
                    ) : (
                        <DarkModeRoundedIcon onClick={toggle} />  
                    )}
                </div>
                
                <div className='nav__mid search'>
                    <SearchRoundedIcon />
                    <input type='text' placeholder='Search...' />
                </div>
                
                <div className='nav__right'>
                    <MailRoundedIcon />
                    <div onClick={() => setNotificationOpen(!notificationOpen)}>
                        <NotificationsRoundedIcon />    
                    </div>
                    <div onClick={() => setSettingsOpen(!settingsOpen)}>
                        <SettingsRoundedIcon />
                    </div>
                    <Link to='profile'>
                        <div className='user' key={user.id}>
                            <img
                                src={user[0].profilePic}
                                alt=""
                            />
                            <span>{user[0].name}</span>
                        </div>
                    </Link>
                </div>
            </div>
            {notificationOpen && <Notification />}
            {settingsOpen && <Settings />}
            <Outlet />
        </div>
    )
}

export default Navbar;