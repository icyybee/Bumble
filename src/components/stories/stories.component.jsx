import './stories.styles.scss';
import './stories.css';

import Me from '../../assets/img10.jpg';
import Friend8 from '../../assets/img8.jpg';
import Friend11 from '../../assets/img11.jpg';
import Friend12 from '../../assets/img12.jpg';
import Friend13 from '../../assets/img13.jpg';
import Friend15 from '../../assets/img15.jpg';
import Friend17 from '../../assets/img17.jpg';
import Friend18 from '../../assets/img18.jpg';
import Friend19 from '../../assets/img19.jpg';
import Friend21 from '../../assets/img21.jpg';
import Friend22 from '../../assets/img22.jpg';

import Draggable from 'react-draggable';

const Stories = () => {
    const stories = [
        {
            id: 1,
            name: "Sam Smith",
            img: Friend8,
            prof: Friend17
        },
        {
            id: 2,
            name: "Valerie Tom",
            img: Friend11,
            prof: Friend18
        },
        {
            id: 3,
            name: "Fred Baschk",
            img: Friend12,
            prof: Friend19
        },
        {
            id: 4,
            name: "Susan Ginia",
            img: Friend13,
            prof: Friend21
        },
        {
            id: 5,
            name: "Chloe Fin",
            img: Friend15,
            prof: Friend22
        },
    ];

    return (
        <Draggable axis="x" bounds={{left: -130, top: 0, right: 0, bottom: 0}} handle=".handle">
            <div className='stories handle'>
                <div className="story user-story">
                    <img src={Me} alt="" />
                    <span>Create story</span>
                    <button>+</button>
                </div>
                {stories.map((story)=>(
                    <div 
                        className="story"
                        key={story.id}
                    >
                        <img className='prof' src={story.img} alt="" />
                        <img src={story.prof} alt="" />
                        <span>{story.name}</span>
                    </div>
                ))}
            </div>
        </Draggable>
    )
}

export default Stories;