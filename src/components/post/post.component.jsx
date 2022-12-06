import './post.styles.scss';

import ThumbUpRoundedIcon from '@mui/icons-material/ThumbUpRounded';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import InsertCommentOutlinedIcon from '@mui/icons-material/InsertCommentOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import ClearIcon from '@mui/icons-material/Clear';

import { useState } from 'react';
import { Link } from "react-router-dom";

import { user } from '../../utils/user';
import Comments from '../comments/comments.component';

const Post = ({ post }) => {
    const [like, setLike] = useState(false);
    const [commentOpen, setCommentOpen] = useState(false);
    const [deletePost, setDeletePost] = useState(false);
    const [count, setCount] = useState(post.count);
    const [commentCount, setCommentCount] = useState(0);
    const [messageHistory, setMessageHistory] = useState([]);

    const profile = user[0];

    const handleLike = () => {
        setLike(!like);
        if (like) {
            setCount(count - 1);
        } else {
            setCount(count + 1);
        }
    }

    const handleMessageDelete = (id) => {
        let newMessageHistory = messageHistory.filter((_, index) => {
            return index !== id;
        });
        setCommentCount(messageHistory?.length - 1);
        setMessageHistory(newMessageHistory);
    }

    const handleDelete = () => {
        setDeletePost(true);
    }
    
    // if (commentCount > 1) {
    //     setCommentCount(commentCount + 's');
    // } else if (commentCount < 1) {
    //     setCommentCount(commentCount + '');
    // }

    return (
        <div className="post">
            {deletePost ? null : (
            <div className="container">
                <div className="user">
                    <div className="userInfo">
                        <img src={post.profilePic} alt="" />
                        <div className="details">
                            <Link
                                to={`/profile/${post.userId}`}
                                style={{ textDecoration: "none", color: "inherit" }}
                            >
                                <span className="name">{post.name}</span>
                            </Link>
                            <span className="date">{post.date}</span>
                        </div>
                    </div>
                    <div className='user--svg'>
                        <MoreHorizRoundedIcon onClick={handleDelete} />
                        <ClearOutlinedIcon onClick={handleDelete} />
                    </div>
                </div>
                
                <div className="content">
                    <p>{post.desc}</p>
                    <img src={post.img} alt=""/>
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
                            {like ? <FavoriteRoundedIcon style={{fill: 'red'}} /> : <FavoriteBorderRoundedIcon /> } 
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

// const Like = ({count}) => {
//     const [active, setActive] = useState(false);

//     const handleClick = () => {
//         setActive(!active);
//     }

//     return (
//         <div className='count--svg'>
//             <ThumbUpRoundedIcon />
//             <FavoriteRoundedIcon />
//             <span>{count}</span>
//         </div>
//     )
// }

export default Post;