import "./notification.styles.scss";
import "../settings/settings.styles.scss";

import ClearRoundedIcon from '@mui/icons-material/ClearRounded';

import { useState } from "react";

const Notification = () => {
    const [notify, setNotify] = useState([
        {
            id: 1,
            desc: "Sarah Johnson sent you a message",
        },
        {
            id: 2,
            desc: "Phillip Smith liked your post",
        },
        {
            id: 3,
            desc: "Sarah Johnson sent you a friend request",
        },
        {
            id: 4,
            desc: "Cody Brian shared a post on his story",
        },
        {
            id: 5,
            desc: "Cynthia Winny sent you a message",
        },
    ]);

    const [currentIndex, setCurrentIndex] = useState(100);

    const clearItemHandler = (id) => {
        const updatedItems = notify.filter(notify => notify.id !== id);
        setNotify(updatedItems);
    }

    return (
        <div className="notify setting" style={{ transform: `translateY(-${currentIndex - 100}vh) translateZ(-${currentIndex * 0}px)`}}>
            <div className="container">
                <h2>Notifications</h2>
                <div className="body">
                    {notify.length ? (
                        notify.map((item) =>
                            <div key={item.id} className="body--item">
                                {item.desc}
                                <ClearRoundedIcon onClick={() => clearItemHandler(item.id)} />
                            </div>
                        )
                    ) : (
                        <div className="body--item">No notifications</div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Notification;