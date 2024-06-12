import React from 'react';
import './Menu.css';
import { Route, Routes } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import Profile from '../Profile/Profile';
import Progress from '../Progress/Progress';
import Workplace from '../Workplace/Workplace';
import Contact from '../Contact/Contact';
import Stack from '../Stack/Stack';
import Security from '../Security/Security';
import Applications from '../Applications/Applications';
import Team from '../Team/Team';

const Menu = () => {
    return (
        <div className='dashboard'>
            <Sidebar />
            <div className="dashboard-content">
                <Routes>
                    <Route path="/dashboard" element={<Progress />} />
                    <Route path="/workplace" element={<Workplace />} />
                    <Route path="/stack" element={<Stack />} />
                    <Route path="/applications" element={<Applications />} />
                    <Route path="/reports" element={<Team />} />
                    <Route path="/queries" element={<Contact />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/security" element={<Security />} />
                </Routes>
            </div>
        </div>
    );
}

export default Menu;
