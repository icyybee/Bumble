import { useState } from 'react';

import AddRoundedIcon from '@mui/icons-material/AddRounded';
import HowToRegRoundedIcon from '@mui/icons-material/HowToRegRounded';

import Friend1 from '../../assets/img1.jpg';
import Friend2 from '../../assets/img2.jpg';
import Friend3 from '../../assets/img3.jpg';
import Friend4 from '../../assets/img4.jpg';
import Friend5 from '../../assets/img5.jpg';

import "../rightbar/rightbar.styles.scss";
import "./suggest.styles.scss";

const Suggest = () => {
    const [currentIndex, setCurrentIndex] = useState(100);
    
    return (
        <div className="rightbar__item suggest" style={{ transform: `translateY(-${currentIndex - 100}vh) translateZ(-${currentIndex * 0}px)`}}>
            <span>Suggestions For You</span>
            <div className="user">
                <img
                    src={Friend1}
                    alt=""
                />
                <div className="user__info">
                    <span>Jack Dovemon</span>
                    <span>Web developer</span>
                </div>
                <div className="rightbar__buttons">
                    <MySvg />
                </div>
            </div>

            <div className="user">
                <img
                    src={Friend2}
                    alt=""
                />
                <div className="user__info">
                    <span>Cham Timothy</span>
                    <span>Model</span>
                </div>
                <div className="rightbar__buttons">
                    <MySvgA />
                </div>
            </div>
            
            <div className="user">
                <img
                    src={Friend3}
                    alt=""
                />
                <div className="user__info">
                    <span>Saraah Rusell</span>
                    <span>Artist</span>
                </div>
                <div className="rightbar__buttons">
                    <MySvg />
                </div>
            </div>
            
            <div className="user">
                <img
                    src={Friend4}
                    alt=""
                />
                <div className="user__info">
                    <span>Jane Dovemon</span>
                    <span>Teacher</span>
                </div>
                <div className="rightbar__buttons">
                    <MySvgA />
                </div>
            </div>
            
            <div className="user">
                <img
                    src={Friend5}
                    alt=""
                />
                <div className="user__info">
                    <span>Stella Wright</span>
                    <span>Quality control</span>
                </div>
                <div className="rightbar__buttons">
                    <MySvg />
                </div>
            </div>
            <button className='view'>View more</button>
        </div>
    )
}

const MySvg = () => {
    const [active, setActive] = useState(false);

    return (
        <>
            {active ? <HowToRegRoundedIcon onClick={()=> setActive(!active)} /> : <AddRoundedIcon onClick={()=> setActive(!active)} />}
        </>
    )
}

const MySvgA = () => {
    const [active, setActive] = useState(true);

    return (
        <>
            {active ? <HowToRegRoundedIcon onClick={()=> setActive(!active)} /> : <AddRoundedIcon onClick={()=> setActive(!active)} />}
        </>
    )
}

export default Suggest;