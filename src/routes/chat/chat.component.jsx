import { Link, useParams } from 'react-router-dom';

import './chat.styles.scss';

import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import VideocamRoundedIcon from '@mui/icons-material/VideocamRounded';
import CallRoundedIcon from '@mui/icons-material/CallRounded';
import SendRoundedIcon from '@mui/icons-material/SendRounded';

import { online } from '../../utils/onlineFriends';
import { useState } from 'react';

const Chat = () => {
    const { id } = useParams();
    const jobDesc = online.filter((item) => item.id === Number(id));
    const profile = jobDesc[0];
    console.log(profile);

    const [messageText, setMessageText] = useState("");
    const [messageHistory, setMessageHistory] = useState([]);

    const handleInputChange = (event) => {
        setMessageText(event.target.value);
    };
    
    const handleMessageSubmit = (event) => {
        event.preventDefault();
        setMessageHistory([...messageHistory, messageText]);
        setMessageText("");
    }

    return (
        <div className='chat' key={id}>
            <div className='container'>
                <div className='body'>
                    <div className='left'>
                        <Link to='/'>
                            <NavigateBeforeIcon />
                        </Link>
                        <div className='left--body'>
                            <div className='top'>
                                <img src={profile.img} />
                                <p>{profile.name}</p>
                            </div>
                            <div className='middle'>
                                <div className='details'>
                                    <span>Nickname:</span>
                                    <span>{profile.nick}</span>
                                </div>
                                <div className='details'>
                                    <span>Date of Birth:</span>
                                    <span>{profile.dob}</span>
                                </div>
                                <div className='details'>
                                    <span>Phone Number:</span>
                                    <span>{profile.no}</span>
                                </div>
                                <div className='details'>
                                    <span>Gender:</span>
                                    <span>{profile.sex}</span>
                                </div>
                            </div>
                            <div className='bottom'>
                                <button>Block</button>
                                <button>Report Contact</button>
                            </div>
                        </div>
                    </div>
                    <div className='right'>
                        <div className='top'>
                            <div className='info'>
                                <Link to='/'>
                                    <NavigateBeforeIcon className='chat-back' />
                                </Link>
                                <div style={{display: "flex"}}>
                                    <img src={profile.img} alt=''/>
                                    <div className={profile.btn}></div>
                                    <span>{profile.nick}</span>
                                </div>
                            </div>
                            <div className='call'>
                                <VideocamRoundedIcon />
                                <CallRoundedIcon />
                            </div>
                        </div>
                        <div className='form'>
                            <form>
                                <input 
                                    type='text' 
                                    placeholder='Message' 
                                    value={messageText}
                                    onChange={handleInputChange} 
                                />
                                <div onClick={handleMessageSubmit}>
                                    <SendRoundedIcon />
                                </div>
                            </form>
                        </div>
                        <div className='chat-box'>
                            {messageHistory.map((message, index) => 
                                <div key={index} className='contain'>
                                    <p className='message'>{message}</p>
                                    <img src={profile.img} alt='' />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chat;