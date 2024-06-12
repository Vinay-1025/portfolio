import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Sidebar.css';
import { BiCoinStack, BiLogOut, BiNetworkChart, BiShieldQuarter, BiSolidDashboard, BiSolidGroup, BiSolidQuoteSingleRight, BiSolidReport } from 'react-icons/bi';
import clogo from '../../assets/fav_icon.png';
import 'bootstrap/dist/css/bootstrap.min.css';

const Sidebar = () => {
    const [showIconsOnly, setShowIconsOnly] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setShowIconsOnly(prevState => prevState);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 800) {
                setShowIconsOnly(true);
            } else {
                setShowIconsOnly(false);
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className={`menu ${showIconsOnly ? 'icons-only' : ''}`}>
            <div className='sidebar-content'>
                <div className='clogo' onClick={toggleMenu}>
                    <img src={clogo} className='clogo-icon' alt="clogo" />
                    {!showIconsOnly && <h4>OOLS</h4>}
                </div>

                <div className="menu-list">
                    <NavLink to='/menu/dashboard' end className={({ isActive }) => isActive || location.pathname === '/' ? 'item active' : 'item'}>
                        <BiSolidDashboard className='icon'/>
                        <span className={showIconsOnly ? 'hidden-text' : ''}>Dashboard</span>
                    </NavLink>
                    <NavLink to='/menu/workplace' className={({ isActive }) => isActive ? 'item active' : 'item'}>
                        <BiNetworkChart className='icon'/>
                        <span className={showIconsOnly ? 'hidden-text' : ''}>Work Place</span>
                    </NavLink>
                    <NavLink to='/menu/stack' className={({ isActive }) => isActive ? 'item active' : 'item'}>
                        <BiCoinStack className='icon'/>
                        <span className={showIconsOnly ? 'hidden-text' : ''}>Stack</span>
                    </NavLink>
                    <NavLink to='/menu/applications' className={({ isActive }) => isActive ? 'item active' : 'item'}>
                        <BiSolidReport className='icon'/>
                        <span className={showIconsOnly ? 'hidden-text' : ''}>Applications</span>
                    </NavLink>
                    <NavLink to='/menu/reports' className={({ isActive }) => isActive ? 'item active' : 'item'}>
                        <BiSolidGroup className='icon'/>
                        <span className={showIconsOnly ? 'hidden-text' : ''}>CareTakers</span>
                    </NavLink>
                    <NavLink to='/menu/queries' className={({ isActive }) => isActive ? 'item active' : 'item'}>
                        <BiSolidQuoteSingleRight className='icon'/>
                        <span className={showIconsOnly ? 'hidden-text' : ''}>Queries</span>
                    </NavLink>
                    <NavLink to='/menu/security' className={({ isActive }) => isActive ? 'item active' : 'item'}>
                        <BiShieldQuarter className='icon'/>
                        <span className={showIconsOnly ? 'hidden-text' : ''}>Security</span>
                    </NavLink>
                </div>
            </div>
            <div className="log-out">
                <div className='item'>
                    <BiLogOut className='icon'/>
                    <span className={showIconsOnly ? 'hidden-text' : ''}>LogOut</span>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
