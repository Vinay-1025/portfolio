import React from 'react'
import './Gallery.css'
import g1 from '../../assets/program1.jpg'
import g2 from '../../assets/program1.jpg'
import g3 from '../../assets/program1.jpg'
import g4 from '../../assets/program1.jpg'
import arrow from '../../assets/dark-arrow.png'


const Gallery = () => {
    return (
    <div className='campus'>
        <div className="gallery">
            <img src={g1} alt='' />
            <img src={g2} alt='' />
            <img src={g3} alt='' />
            <img src={g4} alt='' />
        </div>
        <button className='butn dark-butn'>See More Here <img src={arrow} alt="" /></button>
    </div>
    )
}

export default Gallery