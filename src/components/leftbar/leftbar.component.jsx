import './leftbar.styles.scss';

import { user } from '../../utils/user';

import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import Diversity1RoundedIcon from '@mui/icons-material/Diversity1Rounded';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import SmartDisplayRoundedIcon from '@mui/icons-material/SmartDisplayRounded';
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';
import SportsEsportsRoundedIcon from '@mui/icons-material/SportsEsportsRounded';
import TurnedInRoundedIcon from '@mui/icons-material/TurnedInRounded';
import StoreRoundedIcon from '@mui/icons-material/StoreRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';

import { Link } from 'react-router-dom';

const LeftBar = () => {
    return (
        <div className='leftbar'>
            <div className='leftbar__container'>
                <div className='leftbar--menu'>
                    <Link to='profile'>
                        <div className='user' key={user.id}>
                            <img src={user[0].profilePic} alt='userphoto'/>
                            <span>{user[0].name}</span>
                        </div>
                    </Link>
                    <div className='item'>
                        <PeopleRoundedIcon />
                        <span>Friends</span>
                    </div>
                    <div className='item'>
                        <Diversity1RoundedIcon />
                        <span>Groups</span>
                    </div>
                    <div className='item'>
                        <StoreRoundedIcon />
                        <span>Marketplace</span>
                    </div>
                    <div className='item'>
                        <AccessTimeRoundedIcon />
                        <span>Watch</span>
                    </div>
                    <div className='item'>
                        <TurnedInRoundedIcon />
                        <span>Memories</span>
                    </div>  
                </div>              
                <hr />
                <div className='leftbar--menu'>
                    <span>Your shortcuts</span>
                    <div className='item'>
                        <CalendarMonthRoundedIcon />
                        <span>Events</span>
                    </div>
                    <div className='item'>
                        <SportsEsportsRoundedIcon />
                        <span>Gaming</span>
                    </div>
                    <div className='item'>
                        <SmartDisplayRoundedIcon />
                        <span>Videos</span>
                    </div>
                </div>              
                <hr />
                <div className='leftbar--menu'>
                    <span>Others</span>
                    <div className='item'>
                        <LanguageRoundedIcon />
                        <span>Latest News</span>
                    </div>
                    <div className='item'>
                        <SettingsRoundedIcon />
                        <span>Settings</span>
                    </div>
                </div>              
            </div> 
        </div>
    )
}

export default LeftBar;