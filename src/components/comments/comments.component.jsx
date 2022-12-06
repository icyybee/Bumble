import SendRoundedIcon from '@mui/icons-material/SendRounded';
import { user } from '../../utils/user';
import './comments.styles.scss';

import { useState } from 'react';

const Comments = ({setCommentCount, messageHistory, setMessageHistory}) => {
    const [messageText, setMessageText] = useState("");
    
    const profile = user[0];

    const handleInputChange = (event) => {
        setMessageText(event.target.value);
    };

    const handleMessageSubmit = (event) => {
        event.preventDefault();
        setMessageHistory([...messageHistory, messageText]);
        setMessageText("");
        setCommentCount(messageHistory?.length + 1);
    }
    
    return (
        <div className="write">
            <img src={profile.profilePic} alt='' />
            <input 
                type="text" 
                placeholder="Write a comment..." 
                value={messageText}
                onChange={handleInputChange}  
            />
            <SendRoundedIcon onClick={handleMessageSubmit} />
        </div>
    )
}

export default Comments;