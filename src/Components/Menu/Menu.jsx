import React from 'react';
import './Menu.css';
import { Route, Routes } from 'react-router-dom';
import Progress from '../Aboutp/Aboutp';
import Contact from '../Contact/Contact';
import Security from '../Security/Security';
import Administration from "../Administration/Administration";

const Menu = () => {
    return (
        <div className='dashboard'>
            <div className="dashboard-content">
                <Routes>
                    <Route path="/dashboard" element={<Progress />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/certifications" element={<Security />} />
                    <Route path="/projects" element={<Administration />} />
                </Routes>
            </div>
        </div>
    );
}

export default Menu;
