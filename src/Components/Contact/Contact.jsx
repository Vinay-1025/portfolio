import React, { useState } from 'react';
import './Contact.css';
import { BiMailSend, BiPhone, BiLogoLinkedin, BiLogoWhatsapp, BiLogoGmail } from 'react-icons/bi';
import ContentHeader from '../ContentHeader/ContentHeader';
import { TextField, Button, Snackbar } from '@mui/material';
import emailjs from 'emailjs-com';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        message: '',
    });

    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Create templateParams to match the placeholders in your EmailJS template
        const templateParams = {
            user_name: formData.name,      // Map name to user_name
            user_email: 'vinaysriramgavara9@gmail.com', // Fixed value, change as necessary
            user_phone: formData.phone,     // If your template has a phone field
            user_message: formData.message,  // Map message to user_message
        };

        emailjs.send('service_o6ue9vp', 'template_k8vb76q', templateParams, 'D0J3LiAzLH--X2UWG')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setSnackbarMessage('Message sent successfully!');
                setSnackbarOpen(true);
                setFormData({ name: '', phone: '', message: '' }); // Reset form fields
            }, (err) => {
                console.error('FAILED...', err);
                setSnackbarMessage('Failed to send message. Please try again later.');
                setSnackbarOpen(true);
            });
    };

    const handleSnackbarClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setSnackbarOpen(false);
    };

    return (
        <div className='fixed-scroll'>
            <ContentHeader title="Contact Us" />
            <div className="line">
                <div className='contact'>
                    <div className="contact-col">
                        <h3>Send Us a Message <BiMailSend className='cont-icon'/></h3>
                        <p>Wanna Connect with me</p>
                        <ul>
                            <li>
                                <h4><BiLogoLinkedin className='cont-icon'/></h4>
                                <a href="https://www.linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer">
                                    Connect With Me
                                </a>
                            </li>
                            <li>
                                <h4><BiLogoWhatsapp className='cont-icon'/></h4>
                                <a href="https://wa.me/916281477729" target="_blank" rel="noopener noreferrer">
                                    Connect With Me
                                </a>
                            </li>
                            <li>
                                <h4><BiPhone className='cont-icon'/></h4>
                                <a href="tel:+916281477729">
                                    +91 6281477729
                                </a>
                            </li>
                            <li>
                                <h4><BiLogoGmail className='cont-icon'/></h4>
                                <a href="mailto:vinaysriramgavara9@gmail.com">
                                    vinaysriramgavara9@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="contact-col">
                        <form onSubmit={handleSubmit}>
                            <TextField
                                label="Your EmailId"
                                name='name'
                                value={formData.name}
                                onChange={handleChange}
                                placeholder='Enter your Mailid'
                                fullWidth
                                required
                                margin="normal"
                            />
                            <TextField
                                label="Phone Number"
                                name='phone'
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder='Enter your mobile number'
                                type='tel'
                                fullWidth
                                required
                                margin="normal"
                            />
                            <TextField
                                label="Write your Query"
                                name='message'
                                value={formData.message}
                                onChange={handleChange}
                                placeholder='Enter your message'
                                multiline
                                rows={6}
                                fullWidth
                                required
                                margin="normal"
                            />
                            <Button
                                type='submit'
                                variant='contained'
                                color='primary'
                                className='butn dark-butn'
                            >
                                Send
                            </Button>
                        </form>
                    </div>
                </div>
            </div>

            <Snackbar
                open={snackbarOpen}
                autoHideDuration={6000}
                onClose={handleSnackbarClose}
                message={snackbarMessage}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }} // Centered on the top
            />
        </div>
    );
}

export default Contact;
