import './connect.styles.scss';

import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';

import Carousel from '../carousel/carousel.component';
import connect from '../../utils/connect';

import { Link } from 'react-router-dom';
import { useState } from 'react';

const Connect = () => {
    const [deleteBar, setDeleteBar] = useState(false);

    const handleDelete = () => {
        setDeleteBar(true);
    }

    return (
        <div className='connect'>
            {deleteBar ? null : (
            <div className='container'>
                <div className='connect__header'>
                    <h3>People you may know</h3>
                    <div className='connect--svg'>
                        <MoreHorizRoundedIcon onClick={handleDelete}/>
                        <ClearOutlinedIcon onClick={handleDelete} />
                    </div>
                </div>
                <div className='connect__slide'>
                    <Carousel>
                        {connect.map((con) => {
                            const {id, name, mutual, img} = con;
                            return (
                                <li key={id}>
                                    <div className='overlay'></div>
                                    <img src= {img} alt=''/>
                                    <p className='connect--name'>{name}</p>
                                    <p className='connect--mutual'>{mutual}</p>
                                    <Link to={`singleprofile/${id}`}>
                                        <button className='connect--btn'>View Profile</button>
                                    </Link>
                                </li>        
                            )
                        })}
                    </Carousel>
                </div>
                <div className='connect__footer'>
                    <span>See All</span>
                    <ChevronRightRoundedIcon />
                </div>
            </div>
            )}
        </div>
    )
}

export default Connect;