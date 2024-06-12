import React, { useRef } from 'react';
import './Videoplayer.css';

const Videoplayer = ({ playState, setPlayState }) => {
    const player = useRef(null);

    const closePlayer = (e) => {
        if (e.target === player.current) {
            setPlayState(false);
            const iframe = player.current.querySelector('iframe');
            if (iframe) {
                iframe.src = iframe.src;
            }
        }
    };

    return (
        <div className={`video-player ${playState ? '' : 'hide'}`} ref={player} onClick={closePlayer}>
            <iframe
                title="YouTube Video"
                width="900"
                height="500"
                src="https://www.youtube.com/embed/Xvo5d3wM_Is?autoplay=0&mute=0"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default Videoplayer;
