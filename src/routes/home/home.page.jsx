import LeftBar from "../../components/leftbar/leftbar.component";
import RightBar from "../../components/rightbar/rightbar.component";
import MidBar from "../../components/midbar/midbar.component";

import { useContext } from "react";
import { DarkModeContext } from "../../contexts/darkModeContext";

import { Outlet } from "react-router-dom";

import "./home.styles.scss";

import { Fragment } from "react";

const Home = () => {
    const { darkMode } = useContext(DarkModeContext);
    
    return (
        <div className={`theme-${darkMode ? "dark" : "light"}`}>
            <Fragment>
                <div className="home__content">
                    <LeftBar />
                    <MidBar />
                    <RightBar />
                </div>
            </Fragment>
            <Outlet />
        </div>
    )
}

export default Home;