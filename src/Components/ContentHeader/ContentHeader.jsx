import React from 'react';
import './ContentHeader.css';
import { BiSearch, BiNotification, BiSolidUserDetail } from 'react-icons/bi'; // Corrected import
import { NavLink } from 'react-router-dom';

const ContentHeader = ({title}) => {
    return (
        <div className="content-header">
            <h1 className="header-title">{title}</h1>
            <div className="header-activity">
                <div className="search-box">
                    <input type="text" placeholder="Search here...." />
                    <BiSearch className="icon" />
                </div>
                <div className="notify">
                    <BiNotification className="icon" />
                </div>
                <NavLink to='/menu/profile' end className={({ isActive }) => isActive ? 'notify active' : 'notify'}>
                    <BiSolidUserDetail className="icon" />
                </NavLink>
            </div>
        </div>
    );
}

export default ContentHeader; // Corrected export
