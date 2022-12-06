import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import MessageIcon from '@mui/icons-material/Message';

import { Link } from 'react-router-dom';

const Single = ({profile}) => {
    const {id, img, name, job, posts, followers, following, bio} = profile;
    return (
        <div className="container" key={id}>
            <div className="body">
                <div className="background">
                    <div className="overlay"></div>
                    <Link to="/">
                        <NavigateBeforeIcon />
                    </Link>
                    <img src={img} />
                </div>
                <div className="card">
                    <img src={img} />
                    <div className='card--info'>
                        <span className='card-name'>{name}</span>
                        <span className='card-job'>{job}</span>
                    </div>                    
                    <div className='card--desc'>
                        <div className='card-info'>
                            <span>Posts</span>
                            <span className='info'>{posts}</span>
                        </div>
                        <div className='card-info'>
                            <span>Followers</span>
                            <span className='info'>{followers}</span>
                        </div>
                        <div className='card-info'>
                            <span>Following</span>
                            <span className='info'>{following}</span>
                        </div>
                    </div>                    
                    <div className='card--bio'>{bio}</div>                    
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
    )
}

export default Single;