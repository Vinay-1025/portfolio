import React from 'react';
import './ContentHeader.css';
import { BiSearch, BiNotification, BiSolidUserDetail, BiSun, BiMoon, BiDetail, BiCommentDetail, BiBulb, BiNetworkChart, BiCertification, BiMailSend, BiAward, BiSolidAward, BiSolidNetworkChart, BiSolidBulb, BiSolidWidget, BiSolidMoon, BiSolidSun } from 'react-icons/bi'; // Corrected import
import { NavLink } from 'react-router-dom';

const ContentHeader = ({title}) => {
    return (
        <div className="content-header">
            <h1 className="header-title">{title}</h1>
            <div className="header-activity">
                
                <NavLink to='/menu/dashboard' end className={({ isActive }) => isActive ? 'notify active' : 'notify'}>
                    <BiNetworkChart className="icon" />
                </NavLink>
                <NavLink to='/menu/adminstration' end className={({ isActive }) => isActive ? 'notify active' : 'notify'}>
                    <BiSolidWidget className="icon" />
                </NavLink>
                <NavLink to='/menu/security' end className={({ isActive }) => isActive ? 'notify active' : 'notify'}>
                    <BiSolidAward className="icon" />
                </NavLink>
                <NavLink to='/menu/queries' end className={({ isActive }) => isActive ? 'notify active' : 'notify'}>
                    <BiMailSend className="icon" />
                </NavLink>
                    
            </div>
        </div>
    );
}

export default ContentHeader; // Corrected export
