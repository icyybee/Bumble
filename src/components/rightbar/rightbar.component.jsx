import './rightbar.styles.scss';

import Friend6 from '../../assets/img6.jpg';

import Suggest from '../suggest/suggest.component';
import Online from '../online/online.component';

import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';

const RightBar = () => {
    return (
        <div className='rightbar'>
            <div className='rightbar__container'>
                <Suggest />
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
                <Online />
            </div>
        </div>
    )
}

export default RightBar;