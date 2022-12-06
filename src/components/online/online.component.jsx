import { online } from '../../utils/onlineFriends';

import "../rightbar/rightbar.styles.scss";

import SendRoundedIcon from '@mui/icons-material/SendRounded';

import { Link } from 'react-router-dom';

const Online = () => {
    return (
        <div className="rightbar__item online__sect">
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
    )
}

export default Online;