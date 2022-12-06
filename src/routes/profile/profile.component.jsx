import {user} from '../../utils/user';

import '../singleProfile/singlep.styles.scss';

import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import MessageIcon from '@mui/icons-material/Message';

import { Link } from 'react-router-dom';

const Profile = () => {
    return (
        <div className="sprofile me" style={{opacity:"1", transform: "translateX(0vw) translateZ(0px)"}}>
            <div className="container" key={user[0].id}>
                <div className="body">
                    <div className="background">
                        <div className="overlay"></div>
                        <Link to="/">
                            <NavigateBeforeIcon />
                        </Link>
                        <img src={user[0].profilePic} />
                    </div>
                    <div className="card">
                        <img src={user[0].profilePic} />
                        <div className='card--info'>
                            <span className='card-name'>{user[0].name}</span>
                            <span className='card-job'>{user[0].job}</span>
                        </div>                    
                        <div className='card--desc'>
                            <div className='card-info'>
                                <span>Posts</span>
                                <span className='info'>{user[0].posts}</span>
                            </div>
                            <div className='card-info'>
                                <span>Followers</span>
                                <span className='info'>{user[0].followers}</span>
                            </div>
                            <div className='card-info'>
                                <span>Following</span>
                                <span className='info'>{user[0].following}</span>
                            </div>
                        </div>                    
                        <div className='card--bio'>{user[0].bio}</div>                    
                        <div className='card--btn'>
                            <button>
                                Follow
                                <PersonAddAlt1Icon />
                            </button>
                            <button>
                                Message
                                <MessageIcon />
                            </button>
                        </div>                    
                    </div>
                </div>           
            </div>
        </div>
    )
}

export default Profile;