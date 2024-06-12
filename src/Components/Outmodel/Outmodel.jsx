import React, { useRef } from 'react';
import './Outmodel.css';
import send from '../../assets/send_icon.png'

const Outmodel = ({ openModel, setOpenModel }) => {
    const model = useRef(null);

    const closeModel = (m) => {
        if (m.target === model.current || m.target.className === 'cancel-btn') {
            setOpenModel(false);
        }
    }

    return (
        <div className={`model-background ${openModel ? '' : 'hide'}`} ref={model} onClick={closeModel}>
            <div className="model-c">
                <div className="x-btn">
                    <button onClick={closeModel} className='cancel-btn'> X </button>
                </div>
                <div className="title">
                    <h1>OUTING FORM</h1>
                </div>
                <div className="body">
                    <p>This is the outing form for the students.</p>
                    <div className="contact-col">
                        <form>
                            <label>Your Name</label>
                            <input type='text' name='name' placeholder='Enter Your name' required/>

                            <label>Date</label>
                            <input type='date' name='date' placeholder='Enter the date' required/>

                            <label>Reason for Outing</label>
                            <textarea name='reason' rows='2' placeholder='Enter your reason' required/>

                        </form>
                    </div>
                </div>
                <div className="footer">
                    <button type='submit' className='btn'>Send <img src={send} alt="" /> </button>
                </div>
            </div>
        </div>
    );
}

export default Outmodel;
