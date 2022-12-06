import Post from "../post/post.component";

import "./posts.styles.scss";

import Post2 from "../../assets/img3.jpg";
import Post3 from "../../assets/img21.jpg";
import Post4 from "../../assets/img13.jpg";
import Post5 from "../../assets/img12.jpg";
import Post6 from "../../assets/img18.jpg";
import Post7 from "../../assets/img15.jpg";
import Post8 from "../../assets/img14.jpg";


const Posts = () => {
    //TEMPORARY
    const posts = [
        {
            id: 1,
            date: "50 secs ago",
            name: "Jane Doveman",
            userId: 1,
            profilePic: Post2,
            desc: "Lorem",
            img: Post8,
            count: 30,
            comments:"19 comments",
        },
        {
            id: 2,
            date: "1 min ago",
            name: "Cham Timothy",
            userId: 2,
            profilePic: Post3,
            desc: "Lorem",
            img: Post6,
            count: 7,
            comments:"2 comments",
        },
        {
            id: 3,
            date: "1 min ago",
            name: "Mane Doe",
            userId: 3,
            profilePic: Post4,
            desc: "Lorem",
            img: null,
            count: 2,
            comments:"1 comment",
        },
        {
            id: 4,
            date: "2 min ago",
            name: "Suzan Ginia",
            userId: 4,
            profilePic: Post5,
            desc: "C'est la vie",
            img: Post7,
            count: 6,
            comments:5,
        },
    ];

    return <div className="posts">
        {posts.map(post=>(
            <Post post={post} key={post.id}/>
        ))}
    </div>;
};

export default Posts;