import React from 'react';
import './Contact.css';
import mail from '../../assets/mail_icon.png';
import msg from '../../assets/msg_icon.png';
import phone_icon from '../../assets/phone_icon.png';
import address_icon from '../../assets/address_icon.png';
import send from '../../assets/send_icon.png';
import ContentHeader from '../ContentHeader/ContentHeader';

const Contact = () => {
    return (
    <div className='fixed-scroll'>
    <ContentHeader title="Contact Us" />
    <div className='contact'>
        <div className="contact-col">
            <h3>Send Us Message<img src={mail} alt="" /> </h3>
            <p>hjfdgfhjfcxgf hgd</p>
            <ul>
                <li><img src={msg} alt="" />contact@gmail.com</li>
                <li><img src={phone_icon} alt="" />+91 6281______9</li>
                <li><img src={address_icon} alt="" />rgukt sklm <br/>dsw office<br/>srikakulam</li>
            </ul>
        </div>
        <div className="contact-col">
            <form>
                <label>Your Name</label>
                <input type='text' name='name' placeholder='Enter your name' required/>

                <label>Phone Number</label>
                <input type='tel' name='phone' placeholder='Enter your mobile number' required/>
                
                <label>Write your Query</label>
                <textarea  name='message' rows='6' placeholder='Enter your message' required/>

                <button type='submit' className='butn dark-butn'>Send <img src={send} alt="" /> </button>
            </form>

            <span></span>
        </div>
    </div>
    </div>
    )
}

export default Contact
