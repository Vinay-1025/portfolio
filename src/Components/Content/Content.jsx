import React, { useState } from 'react';
import './Content.css';
import { BiLogIn } from 'react-icons/bi';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginForm from '../LoginForm/LoginForm';
import ContentHeader from '../ContentHeader/ContentHeader'; // Corrected import
import Hero from '../Hero/Hero';
import About from '../About/About';
import Programs from '../Programs/Programs';
import Gallery from '../Gallery/Gallery';
import Contact from '../Contact/Contact';
import Testimonials from '../Testimonials/Testimonials';
import Videoplayer from '../Videoplayer/Videoplayer';
import Outmodel from '../Outmodel/Outmodel';
import Leavemodel from '../Leavemodel/Leavemodel';
import Title from '../Title/Title';
import Progress from '../Progress/Progress';
import Card from '../Card/Card';
import { BiSearch,BiNotification } from 'react-icons/bi';
import 'bootstrap/dist/css/bootstrap.min.css';

const Content = () => {
    const [showLoginForm, setShowLoginForm] = useState(false);
    const [playState, setPlayState] = useState(false);
    const [openModel, setOpenModel] = useState(false);
    const [openModell, setOpenModell] = useState(false);

    const handleLoginClick = () => {
        setShowLoginForm(true);
    };

    const handleCloseLoginForm = () => {
        setShowLoginForm(false);
    };

    return (
        <div className='container'>
            <div className="content-header">
                <h1 className="header-title">Online Outing & Leaving System</h1>
                <div className="header-activity">
                    <div className="notify" onClick={handleLoginClick}>
                        <BiLogIn className="icon" />
                    </div>
                </div>
            </div>
            <Title subTitle='About University' title='RGUKT - SKLM' />
            <About setPlayState={setPlayState} />
            <Title subTitle='gallery' title='Campus Memories' />
            <Gallery />
            <Testimonials />
            <Videoplayer playState={playState} setPlayState={setPlayState} />
            <Outmodel openModel={openModel} setOpenModel={setOpenModel} />
            <Leavemodel openModell={openModell} setOpenModell={setOpenModell} />
            <LoginForm show={showLoginForm} handleClose={handleCloseLoginForm} />
        </div>
    );
}

export default Content;
