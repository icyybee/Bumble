import './rightbar.styles.scss';

import Friend1 from '../../assets/img1.jpg';
import Friend2 from '../../assets/img2.jpg';
import Friend3 from '../../assets/img3.jpg';
import Friend4 from '../../assets/img4.jpg';
import Friend5 from '../../assets/img5.jpg';
import Friend6 from '../../assets/img6.jpg';

import AddRoundedIcon from '@mui/icons-material/AddRounded';
import HowToRegRoundedIcon from '@mui/icons-material/HowToRegRounded';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';

import { online } from '../../utils/onlineFriends';

import { Link } from 'react-router-dom';
import { useState } from 'react';

const RightBar = () => {
    
    return (
        <div className='rightbar'>
            <div className='rightbar__container'>
                <div className="rightbar__item">
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

                <div className="rightbar__item">
                    <span>Latest Activities</span>
                    <div className="user">
                        <img
                            src={Friend6}
                            alt=""
                        />
                        <p className='userInfo'>
                            <span>Mane Doe changed their cover picture </span>
                            <span>15m</span>
                        </p>
    
                        <MoreHorizRoundedIcon />
                    </div>
                    
                    <div className="user">
                        <img
                            src={Friend6}
                            alt=""
                        />
                        <p className='userInfo'>
                            <span>Mane Doe changed their profile picture </span>
                            <span>26m</span>
                        </p>
    
                        <MoreHorizRoundedIcon />
                    </div>
                    
                    <div className="user">
                        <img
                            src={Friend6}
                            alt=""
                        />
                        <p className='userInfo'>
                            <span>Mane Doe liked your profile picture </span>
                            <span>30m</span>
                        </p>
    
                        <MoreHorizRoundedIcon />
                    </div>
                </div>
                <div className="rightbar__item">
                    <span>Online Friends</span>
                    {online.map((friend) => {
                        const {id, img, name, btn, job} = friend;
                        return (
                            <div className="user" key={id}>
                                <div>
                                    <img
                                        src={img}
                                        alt=""
                                    />
                                    <div className={btn}></div>
                                </div>
                                <div className="user__info">
                                    <span>{name}</span>
                                    <span style= {{display: 'none'}}>{job}</span>
                                </div>
                                <div className="rightbar__buttons online">
                                    <Link to={`chatroom/${id}`}>
                                        <SendRoundedIcon />
                                    </Link>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
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

export default RightBar;