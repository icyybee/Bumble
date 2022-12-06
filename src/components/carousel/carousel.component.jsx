import './carousel.styles.scss';

import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';
import NavigateBeforeRoundedIcon from '@mui/icons-material/NavigateBeforeRounded';

import { useEffect, useState } from 'react';

const Carousel = ({children}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [length, setLength] = useState(children.length);

    useEffect(() => {
        setLength(children.length)
    },[children])
    
    const next = () => {
        if (currentIndex < (length - 1)) {
            setCurrentIndex(prevState => prevState + 1)
        }
    }

    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prevState => prevState - 1)
        }
    }
    
    return (
        <div className="carousel-container">
            <div className="carousel-wrapper">
                <div className="carousel-content--wrapper">
                    {currentIndex > 0 && <NavigateBeforeRoundedIcon style={{left: '24px'}} onClick={prev} /> }
                    <ul className="carousel-content" style={{ transform: `translateX(-${currentIndex * 18}%)` }}>
                        {children}
                    </ul> 
                    {currentIndex < (length - 1) && <NavigateNextRoundedIcon style={{right: '24px'}} onClick={next} /> }
                </div>
            </div>
        </div>
    )
}

export default Carousel;