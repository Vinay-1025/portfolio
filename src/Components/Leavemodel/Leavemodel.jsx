import React, { useRef } from 'react';
import './Leavemodel.css';
import send from '../../assets/send_icon.png';

const Leavemodel = ({ openModell, setOpenModell }) => {
    const model = useRef(null);

    const closeModell = (m) => {
        if (m.target === model.current || m.target.className === 'cancel-btn') {
            setOpenModell(false);
        }
    }

    return (
        <div className={`model-background ${openModell ? '' : 'hide'}`} ref={model} onClick={closeModell}>
            <div className="model-c">
                <div className="x-btn">
                    <button onClick={closeModell} className='cancel-btn'> X </button>
                </div>
                <div className="title">
                    <h1>LEAVE FORM</h1>
                </div>
                <div className="body">
                    <p>This is the outing form for the students.</p>
                    <form>
                        <div className="emer">
                            <input type='checkbox' name='emergency'/>
                        </div>

                        <label>Your Name</label>
                        <input type='text' name='name' placeholder='Enter Your name' required />

                        <label>Out Date</label>
                        <input type='date' name='outdate' required />

                        <label>In Date</label>
                        <input type='date' name='indate' required />

                        <label>Reason for Leave</label>
                        <textarea name='reason' rows='2' placeholder='Enter your reason' required />
                    </form>
                </div>
                <div className="footer">
                    <button type='submit' className='btn'>Send <img src={send} alt="" /> </button>
                </div>
            </div>
        </div>
    );
}

export default Leavemodel;
