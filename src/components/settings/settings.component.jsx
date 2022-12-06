import "./settings.styles.scss";

import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import VisibilityOffRoundedIcon from '@mui/icons-material/VisibilityOffRounded';
import ShieldRoundedIcon from '@mui/icons-material/ShieldRounded';
import NotListedLocationRoundedIcon from '@mui/icons-material/NotListedLocationRounded';
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import LogoutIcon from '@mui/icons-material/Logout';

import { useState } from "react";
import { Link } from "react-router-dom";

import { useContext } from "react";
import { DarkModeContext } from "../../contexts/darkModeContext";

const Settings = () => {
    const [currentIndex, setCurrentIndex] = useState(100);
    const {toggle, darkMode} = useContext(DarkModeContext);

    return (
        <div className="setting" style={{ transform: `translateY(-${currentIndex - 100}vh) translateZ(-${currentIndex * 0}px)`}}>
            <div className="container">
                <h2>Settings</h2>
                <div className="body">
                    <Link to="profile" style={{textDecoration: "none", color: "inherit"}}>
                        <div className="body--item">
                            <AccountCircleRoundedIcon />
                            Account
                        </div>
                    </Link>
                    <div className="body--item">
                        {darkMode ? (
                            <VisibilityRoundedIcon onClick={toggle} />
                        ) : (
                            <VisibilityOffRoundedIcon onClick={toggle}  />  
                        )}
                        Appearance
                    </div>
                    <div className="body--item">
                        <ShieldRoundedIcon />
                        Privacy & Security
                    </div>
                    <div className="body--item">
                        <SupportAgentRoundedIcon />
                        Help
                    </div>
                    <div className="body--item">
                        <NotListedLocationRoundedIcon />
                        About
                    </div>
                </div>
                <Link to="login" style={{textDecoration: "none", color: "inherit"}}>
                    <div className="logout"> 
                        <LogoutIcon />
                        Log out
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Settings;