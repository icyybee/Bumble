import Stories from "../stories/stories.component";
import Share from "../share/share.component";
import Connect from "../connect/connect.component";
import Posts from "../posts/posts.component";
import DefaultPost from "../default/default.component";

import "./midbar.styles.scss";

const MidBar = () => {
    return (
        <div className="mid">
            <Stories />
            <Share />
            <DefaultPost />
            <Connect />
            <Posts />
        </div>
    )
}

export default MidBar;