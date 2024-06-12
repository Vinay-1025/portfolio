import React from 'react'
import './About.css'
import about_img from '../../assets/rgukt.jpg'
import play_icon from '../../assets/play_icon.png'

const About = ({setPlayState}) => {
    return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt='' className='about-img'/>
            <img src={play_icon} alt='' className='play-icon' onClick={() => {setPlayState(true)}}/>
        </div>
        <div className="about-right">
            <h2>RAJIV GANDHI UNIVERSITY OF KNOWLEDGE TECHNOLOGIES - SRIKAKULAM</h2>
            <p>hkkjwehhtvhcgmbkhtouch xwkj cgeksclxskbgkjcs
                rjg crhcrgjkc
                l cgkgghjk
                el fkpocie gh
                w fjhgceuirg cghclkng kcbkfn ucgowhfkxwavui f
                ,jkvfhnlj  gigoi iogfufih ih
            </p>
        </div>
    </div>
    )
}

export default About
