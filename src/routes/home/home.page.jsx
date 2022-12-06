import LeftBar from "../../components/leftbar/leftbar.component";
import RightBar from "../../components/rightbar/rightbar.component";
import MidBar from "../../components/midbar/midbar.component";

import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import MoodRoundedIcon from '@mui/icons-material/MoodRounded';

import { useContext, useState } from "react";
import { DarkModeContext } from "../../contexts/darkModeContext";

import { Outlet } from "react-router-dom";

import "./home.styles.scss";

import Suggest from "../../components/suggest/suggest.component";
import Online from "../../components/online/online.component";

import { Fragment } from "react";

const Home = () => {
    const { darkMode } = useContext(DarkModeContext);
    const [suggestOpen, setSuggestOpen] = useState(false);
    const [onlineOpen, setOnlineOpen] = useState(false);
    
    return (
        <div className={`theme-${darkMode ? "dark" : "light"}`}>
            <Fragment>
                <div className="home__content">
                    <LeftBar />
                    <MidBar />
                    <RightBar />
                    <PeopleAltRoundedIcon className="mobile suggested-friends" onClick={() => setSuggestOpen(!suggestOpen)} />
                    <MoodRoundedIcon className="mobile online-friends" onClick={() => setOnlineOpen(!onlineOpen)}/>
                </div>
            </Fragment>
            {suggestOpen && <Suggest />}
            {onlineOpen && <Online />}
            <Outlet />
        </div>
    )
}

export default Home;