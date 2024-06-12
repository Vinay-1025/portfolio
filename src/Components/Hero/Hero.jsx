import React from 'react';
import './Hero.css';
import dark_arrow from '../../assets/dark-arrow.png';
import { Link } from 'react-scroll';

const Hero = () => {
    return (
    <div className='hero'>
        <div className="hero-text">
            <h1>OOLS</h1>
            <p>
                ifbiu4tcngiurhiughfgiruhncmhogihrih
            </p>
            <Link to='programs' smooth={true} offset={-230} duration={500}><button className='butn'>View<img src={dark_arrow}  alt="arrow"/></button></Link>
        </div>
    </div>
    )
}

export default Hero
