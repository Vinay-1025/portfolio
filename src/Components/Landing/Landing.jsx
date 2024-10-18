import React, { useEffect } from 'react';
import './Landing.css';
import { useNavigate } from 'react-router-dom';
import INTRO from '../../assets/intro.mp4';

const Loader = () => {
    const navigate = useNavigate();

    // Automatically navigate after 5 seconds
    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/menu/dashboard');
        }, 3000); // Changed to 5 seconds

        return () => clearTimeout(timer); // Cleanup the timer
    }, [navigate]);

    return (
        <div className="loader-container">
            <video autoPlay muted loop className="background-video">
                <source src={INTRO} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="overlay"></div>
            <div className="multi-ring-loader">
                <div className="ring"></div>
                <div className="ring"></div>
                <div className="ring"></div>
                <div className="ring"></div>
            </div>
            <div className="welcome-text">MA MA MIA</div>
        </div>
    );
};

export default Loader;
