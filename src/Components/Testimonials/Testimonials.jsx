import React, { useRef, useEffect, useState } from 'react';
import './Testimonials.css';
import next_icon from '../../assets/right-arrow.png';
import back_icon from '../../assets/left-arrow.png';
import user1 from '../../assets/appadam.png';

const Testimonials = () => {
    const slider = useRef();
    const [tx, setTx] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            slideForward();
        }, 5000);

        return () => clearInterval(interval);
    }, [tx]);

    const slideForward = () => {
        if (tx > -65) {
            setTx(prevTx => prevTx - 15);
        } else {
            setTx(0);
        }
    };

    const slideBackward = () => {
        if (tx < 0) {
            setTx(prevTx => prevTx + 15);
        } else {
            setTx(0);
        }
    };

    return (
        <div className='testimonials'>
            <img src={next_icon} alt="" className='next-btn' onClick={slideForward} />
            <img src={back_icon} alt="" className='back-btn' onClick={slideBackward} />
            <div className="slider">
                <ul ref={slider} style={{ transform: `translateX(${tx}%)` }}>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user1} alt="" />
                                <div>
                                    <h3>Mohan Patro</h3>
                                    <span>Backend-Dev</span>
                                </div>
                            </div>
                            <p>
                                kdiugyfxbgfnhmpswhr fx g fxuvwbkqdhifxvsquygfx qwbgiuxf vj
                            </p>
                        </div>
                    </li>
                    <li>
                    <div className="slide">
                            <div className="user-info">
                                <img src={user1} alt="" />
                                <div>
                                    <h3>Prasanthi Kimidi</h3>
                                    <span>Backend-Dev</span>
                                </div>
                            </div>
                            <p>
                                kdiugyfxbgfnhmpswhr fx g fxuvwbkqdhifxvsquygfx qwbgiuxf vj
                            </p>
                        </div>
                    </li>
                    <li>
                    <div className="slide">
                            <div className="user-info">
                                <img src={user1} alt="" />
                                <div>
                                    <h3>Venkatesh Ganisetti</h3>
                                    <span>Frontend-Dev</span>
                                </div>
                            </div>
                            <p>
                                kdiugyfxbgfnhmpswhr fx g fxuvwbkqdhifxvsquygfx qwbgiuxf vj
                            </p>
                        </div>
                    </li>
                    <li>
                    <div className="slide">
                            <div className="user-info">
                                <img src={user1} alt="" />
                                <div>
                                    <h3>Vinay Sriram Gavara</h3>
                                    <span>Frontend-Dev</span>
                                </div>
                            </div>
                            <p>
                                kdiugyfxbgfnhmpswhr fx g fxuvwbkqdhifxvsquygfx qwbgiuxf vj
                            </p>
                        </div>
                    </li>
                    <li>
                    <div className="slide">
                            <div className="user-info">
                                <img src={user1} alt="" />
                                <div>
                                    <h3>Shafia Uzma</h3>
                                    <span>Full Stack DEv</span>
                                </div>
                            </div>
                            <p>
                                kdiugyfxbgfnhmpswhr fx g fxuvwbkqdhifxvsquygfx qwbgiuxf vj
                            </p>
                        </div>
                    </li>
                    <li>
                    <div className="slide">
                            <div className="user-info">
                                <img src={user1} alt="" />
                                <div>
                                    <h3>G Chakri</h3>
                                    <span>Full Stack DEv</span>
                                </div>
                            </div>
                            <p>
                                kdiugyfxbgfnhmpswhr fx g fxuvwbkqdhifxvsquygfx qwbgiuxf vj
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Testimonials;
