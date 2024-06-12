import React from 'react';
import './Profile.css';
import ContentHeader from '../ContentHeader/ContentHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import profile from '../../assets/fav_icon.png';
import { BiEdit, BiEditAlt, BiSolidEditAlt } from 'react-icons/bi';

const Profile = () => {
    return (
        <div className="fixed-scroll">
            <ContentHeader title='Profile'/>
            <div className="profile-body">
                <div className="profile-image">
                    <img src={profile} alt="Profile" />
                </div>
                <div className="profile-details">
                    <div className="detail">
                        <span className='name-title'>Venkatesh Ganisetti</span>
                    </div>
                    <div className="detail">
                        <FontAwesomeIcon icon={faEnvelope} className="pro-icon" />
                        <span>student@gmail.com</span>
                    </div>
                    <div className="detail">
                        <FontAwesomeIcon icon={faPhone} className="pro-icon" />
                        <span>+91 6281______9</span>
                    </div>
                    <div className="detail">
                        <FontAwesomeIcon icon={faUser} className="pro-icon" />
                        <span>3 - Computer Science</span>
                    </div>
                </div>
            <BiSolidEditAlt className='edit'/>
            </div>
            <div className="profile-content">
                <h3>Additional Information</h3>
                <div className="profile-pro-cards">
                    <div className="pro-card">
                        <h4>pro-Card 1</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec diam eu lorem elementum ullamcorper.</p>
                    </div>
                    <div className="pro-card">
                        <h4>pro-Card 2</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec diam eu lorem elementum ullamcorper.</p>
                    </div>
                    <div className="pro-card">
                        <h4>pro-Card 3</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec diam eu lorem elementum ullamcorper.</p>
                    </div>
                    <div className="pro-card">
                        <h4>pro-Card 4</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec diam eu lorem elementum ullamcorper.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;