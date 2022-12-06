import '../post/post.styles.scss';

import Post2 from '../../assets/img9.jpg';
import Post1 from "../../assets/img16.jpg";

import ThumbUpRoundedIcon from '@mui/icons-material/ThumbUpRounded';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import InsertCommentOutlinedIcon from '@mui/icons-material/InsertCommentOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import ClearIcon from '@mui/icons-material/Clear';

import { useState } from 'react';

import Comments from '../comments/comments.component';
import { user } from '../../utils/user';

const DefaultPost = () => {
    const [like, setLike] = useState(false);
    const [commentOpen, setCommentOpen] = useState(false);
    const [deletePost, setDeletePost] = useState(false);
    const [count, setCount] = useState(27);
    const [commentCount, setCommentCount] = useState(0);
    const [messageHistory, setMessageHistory] = useState([]);
    
    const handleLike = () => {
        setLike(!like);
        count > 27 ? setCount(count - 1) : setCount(count + 1);
    }

    const profile = user[0];

    const handleDelete = () => {
        setDeletePost(true);
    }

    const handleMessageDelete = (id) => {
        let newMessageHistory = messageHistory.filter((_, index) => {
            return index !== id;
        });
        setCommentCount(messageHistory?.length - 1);
        // console.log(newMessageHistory);
        setMessageHistory(newMessageHistory);
    }

    return (
        <div className="post">
            {deletePost ? null : (
            <div className="container">
                <div className="user">
                    <div className="userInfo">
                        <img src={Post2} />
                        <div className="details">
                            <span className="name">Kate Bull</span>
                            <span className="date">1 sec ago</span>
                        </div>
                    </div>
                    <div className='user--svg'>
                        <MoreHorizRoundedIcon onClick={handleDelete} />
                        <ClearOutlinedIcon onClick={handleDelete} />
                    </div>
                </div>
                
                <div className="content">
                    <p>I love life</p>
                    <img src={Post1} />
                </div>
                
                <div className="info">
                    <div className='count'>
                        <div className='count--svg'>
                            <ThumbUpRoundedIcon />
                            <FavoriteRoundedIcon />
                            <span>{count}</span>
                        </div>
                        <div>{commentCount} comment</div>
                    </div>
                    <hr />
                    <div className='react'>
                        <div className="item" onClick={handleLike}>
                            {like ? <FavoriteRoundedIcon style={{fill: 'red'}} /> : <FavoriteBorderRoundedIcon />} 
                            Like
                        </div>
                        <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
                            <InsertCommentOutlinedIcon />
                            Comment
                        </div>
                        <div className="item">
                            <ShareOutlinedIcon />
                            Share
                        </div>
                    </div>
                    <div className='comments'>
                        {commentOpen && <Comments setCommentCount={setCommentCount} messageHistory={messageHistory} setMessageHistory={setMessageHistory} />}
                        {messageHistory?.map((message, index) => ( //if it doesn't exist do not display
                            <div className="comment" key={index} id={index}>
                                <img src={profile.profilePic} alt="" />
                                <div className="info">
                                    <span>{profile.name}</span>
                                    <p>{message}</p>
                                </div>
                                <span className="date"><ClearIcon onClick={() => handleMessageDelete(index)}/></span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            )}
        </div>
    )
}

export default DefaultPost;