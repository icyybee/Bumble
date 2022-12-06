import './share.styles.scss';

import Me from '../../assets/img10.jpg';

import PhotoLibraryRoundedIcon from '@mui/icons-material/PhotoLibraryRounded';
import MoodRoundedIcon from '@mui/icons-material/MoodRounded';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Share = () => {
    return (
        <div className='share'>
            <div className='container'>
                <div className='top'>
                    <img
                        src={Me}
                        alt=''
                    />
                    <input type='text' placeholder="What's on your mind?" />
                </div>
                <hr />
                <div className='bottom'>
                    <div className='left'>
                        <input type='file' id='file' style={{display:'none'}} />
                        <label htmlFor='file'>
                            <div className='item'>
                                <PhotoLibraryRoundedIcon />
                                <span>Photo/video</span>
                            </div>
                        </label>
                        <div className='item'>
                            <PersonAddAlt1Icon />
                            <span>Tag People</span>
                        </div>
                        <div className='item'>
                            <MoodRoundedIcon />
                            <span>Feeling/activity</span>
                        </div>
                        <div className='item'>
                            <LocationOnIcon />
                            <span>Check in</span>
                        </div>
                    </div>
                    <div className='right'>
                        <button>Post</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Share;