import * as React from 'react';
import './Administration.css';
import { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { BiBlock, BiCaretLeft, BiCaretLeftCircle, BiCaretRight, BiCaretRightCircle, BiDownload, BiExitFullscreen, BiLink, BiLinkAlt, BiLinkExternal, BiMenu, BiSolidCircle, BiSolidDownload, BiX, BiXCircle } from 'react-icons/bi';
import ContentHeader from '../ContentHeader/ContentHeader';
import { MdOutlineDownloadForOffline } from "react-icons/md";
import { saveAs } from 'file-saver';
import SHI from '../../assets/SHI.pdf';


import P1I1 from '../../assets/project/P1I1.png';
import P1I2 from '../../assets/project/P1I2.png';
import P1I3 from '../../assets/project/P1I3.png';
import P1I4 from '../../assets/project/P1I4.png';
import P1I5 from '../../assets/project/P1I5.png';
import P1I6 from '../../assets/project/P1I6.png';
import P1I7 from '../../assets/project/P1I7.png';
import P1I8 from '../../assets/project/P1I8.png';
import P1I9 from '../../assets/project/P1I9.png';
import P1I10 from '../../assets/project/P1I10.png';
import P1I11 from '../../assets/project/P1I11.png';
import P1I12 from '../../assets/project/P1I12.png';
import P1I13 from '../../assets/project/P1I13.png';
import P1I14 from '../../assets/project/P1I14.png';
import P1I15 from '../../assets/project/P1I15.png';
import P1I16 from '../../assets/project/P1I16.png';
import P1I17 from '../../assets/project/P1I17.png';
import P1I18 from '../../assets/project/P1I18.png';
import P1I19 from '../../assets/project/P1I19.png';
import P1I20 from '../../assets/project/P1I20.png';

import P2I1 from '../../assets/project/P2I1.png';
import P2I2 from '../../assets/project/P2I2.png';
import P2I3 from '../../assets/project/P2I3.png';
import P2I4 from '../../assets/project/P2I4.png';
import P2I5 from '../../assets/project/P2I5.png';
import P2I6 from '../../assets/project/P2I6.png';
import P2I7 from '../../assets/project/P2I7.png';
import P2I8 from '../../assets/project/P2I8.png';
import P2I9 from '../../assets/project/P2I9.png';
import P2I10 from '../../assets/project/P2I10.png';
import P2I11 from '../../assets/project/P2I11.png';
import P2I12 from '../../assets/project/P2I12.png';

import P3I1 from '../../assets/project/P3I1.png';
import P3I2 from '../../assets/project/P3I2.png';
import P3I3 from '../../assets/project/P3I3.png';
import P3I4 from '../../assets/project/P3I4.png';
import P3I5 from '../../assets/project/P3I5.png';
import P3I6 from '../../assets/project/P3I6.png';
import P3I7 from '../../assets/project/P3I7.png';
import P3I8 from '../../assets/project/P3I8.png';
import P3I9 from '../../assets/project/P3I9.png';

import P4I1 from '../../assets/project/P4I1.png';
import P4I2 from '../../assets/project/P4I2.png';
import P4I3 from '../../assets/project/P4I3.png';
import P4I4 from '../../assets/project/P4I4.png';
import P4I5 from '../../assets/project/P4I5.png';

import P5I1 from '../../assets/project/P5I1.png';

import P6I1 from '../../assets/project/P6I1.png';
import P6I2 from '../../assets/project/P6I2.png';
import P6I3 from '../../assets/project/P6I3.png';
import P6I4 from '../../assets/project/P6I4.png';

import P7I1 from '../../assets/project/P7I1.png';
import P7I2 from '../../assets/project/P7I2.png';
import P7I3 from '../../assets/project/P7I3.png';
import P7I4 from '../../assets/project/P7I4.png';
import P7I5 from '../../assets/project/P7I5.png';
import P7I6 from '../../assets/project/P7I6.png';
import P7I7 from '../../assets/project/P7I7.png';
import P7I8 from '../../assets/project/P7I8.png';

import { useNavigate } from 'react-router-dom';


function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const projectDescriptions = [
    {
        name: 'Dental Lab Management Software',
        description: 'A comprehensive Dental Lab Management Application developed for Bioline Dental Implants. This innovative solution effectively streamlines the entire workflow, encompassing case management, payments, reports, billings, and invoices. Key features include dynamic forms for efficient data entry, real-time updates for payments and reports, and automated email notifications to keep users informed of important actions. Additionally, the application incorporates secure user access through JWT token authentication and role management for customizable permissions. This project has significantly enhanced operational efficiency for Bioline, providing them with a powerful tool that improves accuracy and effectiveness in their daily activities.'
    },

    {
        name: 'Shoot Mate',
        description: 'ShootMate is a dedicated platform that transforms the way students and photographers connect within the college. Designed to simplify the photoshoot booking process, ShootMate offers a seamless solution for finding and reserving photographers for all the college events and personal shoots. ShootMate bridges the gap between photographers and users, making it easier than ever to capture your most cherished moments. Whether you\'re organizing a major event or planning a casual shoot, ShootMate ensures every experience is professional, convenient, and memorable.'
    },
    
    {
        name: 'Online Outing & Leaving System',
        description: 'The Online Outing & Leaving System is a platform designed to simplify the process of applying for and managing student outings and leave requests within a college. It provides a convenient interface for students to submit leave applications online, specifying their reasons and dates, while tracking the status of approvals. The system also streamlines the process for college administrators, allowing them to review, approve, or reject requests efficiently, with all records maintained digitally. Additionally, a separate section for the security team ensures that students leaving the campus are verified against approved leave applications, enhancing security. By centralizing the process, the system reduces paperwork and enhances communication, making it easier for students, administrators, and security personnel to handle operations effectively.'
    },

    {
        name: 'EduAssist',
        description: "EduAssist is a cutting-edge online learning and doubt EduAssistication platform designed to help students and professionals unlock their full potential. Whether you're tackling complex subjects or seeking personalized learning paths, EduAssist connects you with experts, peers, and resources that empower you to learn with confidence. Our mission is to provide instant support, enabling you to grow and excel in your academic and professional journey."
    },

    {
        name: 'Weak Vision',
        description: "Weak Vision, an intelligent chatbot using React.js, integrated with the Gemini API and OpenAI API. The chatbot delivers adaptive, context-aware responses powered by OpenAI's NLP capabilities, ensuring an engaging user experience. It features a sleek, responsive UI and seamless backend integration via the Gemini API. This project showcases expertise in React.js, API integration, and AI-driven solutions."
    },

    {
        name: 'TruckOlimit',
        description: 'Truckolimit is an application designed to make it easier for heavy motor vehicle drivers to find return transport opportunities after delivering products, ensuring they don’t return to their home towns empty-handed. The platform connects drivers with exporters who need goods transported, providing a flexible system where exporters can share detailed information about their products and transportation needs. Both drivers and exporters can access nearby transport requirements and services, streamlining the process of finding available jobs. This approach boosts the productivity of the goods transportation sector, reduces downtime for drivers, and increases revenue for both parties involved.'
    },

    {
        name: 'ExpanTrack',
        description: "An automated expense tracking application designed to simplify financial management by securely retrieving Gmail transactional data through Google OAuth. The application processes data using advanced Regular Expressions, accurately categorizing and summarizing expenses. With a focus on intuitive UI/UX and seamless frontend development, the project ensures a smooth and engaging user experience, highlighting the integration of automation with user-centric design for efficient financial solutions.",
    },

    {
        name: 'Service Track',
        description: 'Service Track is a comprehensive web application designed to streamline vehicle service management and ensure timely maintenance through an intuitive reminder system. With Service Track, users can effortlessly track service histories,schedule upcoming maintenance tasks, and receive automated reminders for service due dates, helping them maintain their vehicles in optimal condition. The platform offers a user-friendly interface accessible via web browsers, enabling convenient access from desktops, laptops, and mobile devices. Service Track aims to revolutionize vehicle maintenance practices, enhancing efficiency, reducing downtime, and prolonging the lifespan of vehicles.'
    },

    {
        name: 'Scrabble',
        description: 'The Scrabble Game is part of a broader initiative in the ELC (English Literary Club) aimed at encouraging students to enhance their English proficiency through interactive and fun activities. This webpage, which I designed, features three different games, each tailored to improve specific language skills. Scrabble, being one of the games, focuses on vocabulary building and word recognition, allowing students to challenge themselves in creating words from a set of letters. Each game on the platform has its own unique impact, helping students develop their language abilities in areas like spelling, grammar, and word usage. This project promotes engagement with English in an enjoyable way, contributing to students overall linguistic competence.'
    },

    {
        name: 'Agriconnect',
        description: 'A multilingual Android and web application enabling farmers to upload produce details using AI-based voice-to-text and Read a Loud features, with automated location-based navigation, and an ML-driven price prediction model. The integrated ML model compares seasonal and local market prices to provide accurate pricing suggestions and notifies farmers about high-demand crops in the market by allowing direct sales to consumers with an integrated payment gateway, bypassing intermediaries.'
    },
    // {
    //     name: 'Electrove',
    //     description: 'Electrove is a technical feast organized by the ECE department, for which I developed a dedicated webpage. This site showcases all the technical and non-technical events featured in the fest, providing detailed information about each event. It also includes a user-friendly registration system, allowing participants to easily sign up for events they are interested in. The webpage aims to enhance engagement and streamline the registration process, making it easier for attendees to explore and participate in the various activities offered during the fest.'

    // },

    // {
    //     name: 'u can-grow ',
    //     description: 'U Can-Grow is a mobile application designed to help students find and connect with peers who share similar interests in specific domains or tech stacks. The app simplifies the process of discovering relevant fields, offering roadmaps to guide users in building expertise in their chosen areas. It also encourages networking by allowing students to connect with others, form teams, and collaborate on projects. A real-time chat feature is integrated for seamless communication, making it easier to coordinate tasks and discussions. Additionally, users can post content and share information related to their domains, fostering a collaborative learning environment where students can grow both their skills and professional network.'
    // },

];



const P1 = [
    { image: P1I1, desc: 'Login Page' },
    { image: P1I2, desc: 'Successfull Login' },
    { image: P1I3, desc: 'Dashboard Curosel' },
    { image: P1I4, desc: 'All Case Details' },
    { image: P1I5, desc: 'Clients Portal' },
    { image: P1I6, desc: 'Add Clients Form' },
    { image: P1I7, desc: 'Accounting Module' },
    { image: P1I8, desc: 'Payment Form' },
    { image: P1I9, desc: 'Outstanding Report' },
    { image: P1I10, desc: 'Sales Report' },
    { image: P1I11, desc: 'Case Type Report' },
    { image: P1I12, desc: 'Products Module' },
    { image: P1I13, desc: 'Price List Overview' },
    { image: P1I14, desc: 'Team Module' },
    { image: P1I15, desc: 'Add Team Form' },
    { image: P1I16, desc: 'Tax Section' },
    { image: P1I17, desc: 'Case Entry Form' },
    { image: P1I18, desc: 'Case Details Overview' },
    { image: P1I19, desc: 'Case Details Form' },
    { image: P1I20, desc: 'Client Profile' }
];

const P2 = [
    { image: P2I1, desc: 'Introduction Page' },
    { image: P2I2, desc: 'Specifications' },
    { image: P2I3, desc: 'Benifits of Shootmate' },
    { image: P2I4, desc: 'Why to choose' },
    { image: P2I5, desc: 'Plans Section' },
    { image: P2I6, desc: 'Footer section' },
    { image: P2I7, desc: 'Bookings Page' },
    { image: P2I8, desc: 'Booked List' },
    { image: P2I9, desc: 'Login Page' },
    { image: P2I10, desc: 'Photographers Page' },
    { image: P2I11, desc: 'Booking list and graph' },
    { image: P2I12, desc: 'Bio Data Entering Section' },
];

const P3 = [
    { image: P3I1, desc: 'Landing Page' },
    { image: P3I2, desc: 'Dashboard section' },
    { image: P3I3, desc: 'Application section' },
    { image: P3I4, desc: 'Work Place section' },
    { image: P3I5, desc: 'Stack section' },
    { image: P3I6, desc: 'Administration section' },
    { image: P3I7, desc: 'Caretakers section' },
    { image: P3I8, desc: 'Queries section' },
    { image: P3I9, desc: 'Security section' },
];

const P4 = [
    { image: P4I1, desc: 'Hero Section' },
    { image: P4I2, desc: 'What can we do' },
    { image: P4I3, desc: 'How do we support' },
    { image: P4I4, desc: 'Data overview' },
    { image: P4I5, desc: 'Testimonials' },
];

const P5 = [
    { image: P5I1, desc: 'Interactive Page' },
]

const P6 = [
    { image: P6I4, desc: 'Authentication' },
    { image: P6I1, desc: 'Landing Page' },
    { image: P6I2, desc: 'Services' },
    { image: P6I3, desc: 'Tracking Section' },
];

const P7 = [
    { image: P7I1, desc: 'Landing Page' },
    { image: P7I2, desc: 'Scrabble main section' },
    { image: P7I3, desc: 'Game1 Section' },
    { image: P7I4, desc: 'Game2 Section ' },
    { image: P7I5, desc: 'Revealing Word' },
    { image: P7I6, desc: 'Word Revealed' },
    { image: P7I7, desc: 'Honey Comb Word Hunt' },
    { image: P7I8, desc: 'When Revealed' },
];



const Administration = () => {
    const navigate = useNavigate();
    const [value, setValue] = React.useState(0); // Active tab index
    const [showTabs, setShowTabs] = React.useState(true);
    const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 700);
    const [selectedImageIndex, setSelectedImageIndex] = useState(null); // Selected image index
    const [currentImages, setCurrentImages] = useState(P1); // Current image array

    // Update the selected image index and current image array
    const handleCardClick = (index) => {
        setSelectedImageIndex(index);
    };

    // Close modal
    const closeModal = () => {
        setSelectedImageIndex(null);
    };

    // Show next image with circular rotation
    const handleNextImage = () => {
        if (selectedImageIndex !== null) {
            setSelectedImageIndex((prevIndex) => (prevIndex + 1) % currentImages.length);
        }
    };

    // Show previous image with circular rotation
    const handlePrevImage = () => {
        if (selectedImageIndex !== null) {
            setSelectedImageIndex((prevIndex) => (prevIndex - 1 + currentImages.length) % currentImages.length);
        }
    };

    // Update tab value and current image array on tab change
    const handleChange = (event, newValue) => {
        setValue(newValue);
        if (isMobile) setShowTabs(false);

        // Update currentImages based on the active tab
        switch (newValue) {
            case 0:
                setCurrentImages(P1);
                break;
            case 1:
                setCurrentImages(P2);
                break;
            case 2:
                setCurrentImages(P3);
                break;
            case 3:
                setCurrentImages(P4);
                break;
            case 4:
                setCurrentImages(P5);
                break;
            case 7:
                setCurrentImages(P6);
                break;
            case 8:
                setCurrentImages(P7);
                break;
            default:
                setCurrentImages([]);
                break;
        }
    };

    // Handle window resize for responsive tabs
    React.useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 700) {
                setIsMobile(true);
                setShowTabs(false);
            } else {
                setIsMobile(false);
                setShowTabs(true);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleDownloadPdf = () => {
        const pdfUrl = SHI;
        const pdfName = 'Agri-Connect-SHI.pdf';
        saveAs(pdfUrl, pdfName);
    };

    return (
        <div className="fixed-scroll">
            <ContentHeader title="Projects" />
            <Box sx={{ width: '100%', borderTop: '1px solid' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider', position: 'relative' }}>
                    <div className="menu-and-share">
                        {isMobile && <BiMenu className="menu-icon" onClick={() => setShowTabs(!showTabs)} />}
                        <Button className="share-btn" onClick={() => navigate('/menu/contact')}>
                            Connect With Me
                        </Button>
                    </div>
                    {(showTabs || !isMobile) && (
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            aria-label="Project Tabs"
                            TabIndicatorProps={{ style: { backgroundColor: '#CC0303' } }}
                            className={`tab-names ${isMobile ? 'mobile-tabs' : ''}`}
                            orientation={isMobile ? 'vertical' : 'horizontal'}
                        >
                            <Tab label="DLMS" {...a11yProps(0)} sx={{ '&.Mui-selected': { color: '#CC0303' } }} />
                            <Tab label="ShootMate" {...a11yProps(0)} sx={{ '&.Mui-selected': { color: '#CC0303' } }} />
                            <Tab label="OOLS" {...a11yProps(0)} sx={{ '&.Mui-selected': { color: '#CC0303' } }} />
                            <Tab label="EduAssist" {...a11yProps(0)} sx={{ '&.Mui-selected': { color: '#CC0303' } }} />
                            <Tab label="WeakVision" {...a11yProps(0)} sx={{ '&.Mui-selected': { color: '#CC0303' } }} />
                            <Tab label="TruckOLimit" {...a11yProps(0)} sx={{ '&.Mui-selected': { color: '#CC0303' } }} />
                            <Tab label="ExpanTrack" {...a11yProps(0)} sx={{ '&.Mui-selected': { color: '#CC0303' } }} />
                            <Tab label="ServiceTrack" {...a11yProps(0)} sx={{ '&.Mui-selected': { color: '#CC0303' } }} />
                            <Tab label="Scrabble" {...a11yProps(0)} sx={{ '&.Mui-selected': { color: '#CC0303' } }} />
                            <Tab label="AgriConnect" {...a11yProps(0)} sx={{ '&.Mui-selected': { color: '#CC0303' } }} />
                            {/* 
                            <Tab label="Electrove" {...a11yProps(0)} sx={{ '&.Mui-selected': { color: '#CC0303' } }} />
                            <Tab label="U Can-Grow" {...a11yProps(0)} sx={{ '&.Mui-selected': { color: '#CC0303' } }} />
                            <Tab label="ChatBot" {...a11yProps(0)} sx={{ '&.Mui-selected': { color: '#CC0303' } }} />
                            <Tab label="ShootMate" {...a11yProps(0)} sx={{ '&.Mui-selected': { color: '#CC0303' } }} />
                            Other Tabs */}

                        </Tabs>
                    )}
                </Box>

                <CustomTabPanel value={value} index={0}>
                    <p className='project-cont'><span className="project-link-live"><BiSolidCircle /> Real Time Project</span></p>
                    <h3>{projectDescriptions[0].name}</h3>
                    <p className="proj-desc">{projectDescriptions[0].description}
                        <div className="sub-sec" >
                            <p className='workstat'><span className='edu-percent'>Our Client :</span> <span className='work-style'>Bioline dental lab</span> </p>
                            <p className='workstat'><span className='edu-percent'>Contributors :</span> <span className='work-style'>Mohan Patro</span> <span className='work-style'>Venkatesh Ganisetti</span> <span className='work-style'>Kimidi Prasanthi</span> </p>
                        </div>
                        <p className='workstat'><span className='edu-percent'>TechStack :</span> <span className='work-style'>HTML</span> <span className='work-style'>CSS</span> <span className='work-style'>JS</span> <span className='work-style'>Bootstrap</span> <span className='work-style'>NodeJs</span> <span className='work-style'>ExpressJS</span> <span className='work-style'>Sequelize</span> <span className='work-style'>Mysql</span></p>
                    </p>
                    {/* <div className="proj-desc proj-func-desc">
                        <p className="workstat">
                            <span className="edu-percent">
                                Challenges
                            </span>
                            
                            <ul className='proj-fun-ul'>
                                <li className='proj-fun-li'>
                                    <div className="proj-points">
                                        <b>-- Complex workflow integration :</b>
                                        <span className='proj-li-desc'>  The need to bring together multiple processes like case management, payments, and invoicing into one streamlined application.</span>
                                    </div>
                                </li>
                                <li className='proj-fun-li'>

                                    <div className="proj-points">
                                        <b>-- Real-time updates implementation :</b>
                                        <span className='proj-li-desc'>  Ensuring that all payment statuses, reports, and case updates are reflected instantly without delays.</span>
                                    </div>
                                </li>
                                <li className='proj-fun-li'>

                                    <div className="proj-points">
                                        <b>-- Role-based access control :</b>
                                        <span className='proj-li-desc'>  Creating secure user roles and permissions to prevent unauthorized access and protect sensitive data.</span>
                                    </div>
                                </li>
                                <li className='proj-fun-li'>

                                    <div className="proj-points">
                                        <b>-- Dynamic forms for flexible data input :</b>
                                        <span className='proj-li-desc'>  Designing forms that could adapt to various input requirements and user roles.</span>
                                    </div>
                                </li>
                                <li className='proj-fun-li'>

                                    <div className="proj-points">
                                        <b>-- Reliable automated email notifications :</b>
                                        <span className='proj-li-desc'>  Ensuring users are notified promptly of key actions without spamming or delays.</span>
                                    </div>
                                </li>
                            </ul>
                        </p>
                        <p className="workstat">
                            <span className="edu-percent">
                                Solutions
                            </span>
                            
                            <ul className='proj-fun-ul'>
                                <li className='proj-fun-li'>

                                    <div className="proj-points">
                                        <b>-- Modular architecture for seamless workflow integration :</b>
                                        <span className='proj-li-desc'>  Each feature was developed as a separate module and connected using RESTful APIs, ensuring scalability and flexibility.</span>
                                    </div>
                                </li>
                                <li className='proj-fun-li'>

                                    <div className="proj-points">
                                        <b>-- WebSocket for real-time updates :</b>
                                        <span className='proj-li-desc'>  Used WebSocket protocols to establish a persistent connection for instant data updates.</span>
                                    </div>
                                </li>
                                <li className='proj-fun-li'>

                                    <div className="proj-points">
                                        <b>-- JWT token authentication for secure access :</b>
                                        <span className='proj-li-desc'>  Implemented JSON Web Tokens to securely authenticate users and manage sessions effectively.</span>
                                    </div>
                                </li>
                                <li className='proj-fun-li'>

                                    <div className="proj-points">
                                        <b>-- React-based dynamic forms with conditional rendering :</b>
                                        <span className='proj-li-desc'>  Built forms that adapted to user roles and inputs dynamically using React's component architecture.</span>
                                    </div>
                                </li>
                                <li className='proj-fun-li'>

                                    <div className="proj-points">
                                        <b>-- Nodemailer for automated email notifications :</b>
                                        <span className='proj-li-desc'>  Integrated Nodemailer to handle all email notifications, ensuring reliability and scalability.</span>
                                    </div>
                                </li>
                            </ul>
                        </p>
                    </div>

                    <div className="proj-desc proj-func-desc">
                        <p className="workstat">
                            <span className="edu-percent">
                                Learnings
                            </span>
                            
                            <ul className='proj-fun-ul'>
                                <li className='proj-fun-li'>

                                    <div className="proj-points">
                                        <b>-- Modular approach to complex workflows :</b>
                                        <span className='proj-li-desc'>  Learned to break down workflows into manageable modules to simplify development and maintenance.</span>
                                    </div>
                                </li>
                                <li className='proj-fun-li'>

                                    <div className="proj-points">
                                        <b>-- Scalability and system design :</b>
                                        <span className='proj-li-desc'>  Gained experience designing systems that can scale with growing data and user needs.</span>
                                    </div>
                                </li>
                                <li className='proj-fun-li'>

                                    <div className="proj-points">
                                        <b>-- Creating user-friendly dynamic interfaces :</b>
                                        <span className='proj-li-desc'>  Learned how to design interfaces that adapt to user needs while remaining simple and intuitive.</span>
                                    </div>
                                </li>
                                <li className='proj-fun-li'>

                                    <div className="proj-points">
                                        <b>-- Advanced security implementation :</b>
                                        <span className='proj-li-desc'>  Understood how to enhance security through robust authentication and access controls.</span>
                                    </div>
                                </li>
                                <li className='proj-fun-li'>

                                    <div className="proj-points">
                                        <b>-- WebSocket usage for real-time updates :</b>
                                        <span className='proj-li-desc'>  Mastered implementing WebSocket for instant communication between the client and server.</span>
                                    </div>
                                </li>
                            </ul>
                        </p>
                        <p className="workstat">
                            <span className="edu-percent">
                                Takeaways
                            </span>
                            
                            <ul className='proj-fun-ul'>
                                <li className='proj-fun-li'>

                                    <div className="proj-points">
                                        <b>-- Importance of modular and scalable design :</b>
                                        <span className='proj-li-desc'>  Reinforced the value of building systems that can evolve with future demands.</span>
                                    </div>
                                </li>
                                <li className='proj-fun-li'>

                                    <div className="proj-points">
                                        <b>-- Understanding user needs for effective solutions :</b>
                                        <span className='proj-li-desc'>  Highlighted the importance of aligning features with user requirements to maximize utility.</span>
                                    </div>
                                </li>
                                <li className='proj-fun-li'>

                                    <div className="proj-points">
                                        <b>-- Crafting reliable notification systems :</b>
                                        <span className='proj-li-desc'>  Understood how to balance performance with reliability for automated notifications.</span>
                                    </div>
                                </li>
                                <li className='proj-fun-li'>

                                    <div className="proj-points">
                                        <b>-- Measuring the impact of technology on efficiency :</b>
                                        <span className='proj-li-desc'>  Learned how to assess the effectiveness of a system in improving workflows and processes.</span>
                                    </div>
                                </li>
                            </ul>
                        </p>
                    </div> */}


                    <div className="card-container">
                        {P1.map((item, index) => (
                            <div key={index} className="card" onClick={() => handleCardClick(index)}>
                                <img src={item.image} alt={`Service ${index + 1}`} className="service-img card-img-top" />
                                <div className="img-desc-cover">
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </CustomTabPanel>

                <CustomTabPanel value={value} index={1}>
                    <p className='project-cont'><a href="https://shootmate-photographer-partner.web.app/" target="blank"><span className="project-link"><BiLinkExternal />View Live Project</span></a></p>
                    <h3>{projectDescriptions[1].name}</h3>
                    <p className="proj-desc">{projectDescriptions[1].description}
                        <p className='workstat'><span className='edu-percent'>TechStack :</span> <span className='work-style'>HTML</span> <span className='work-style'>CSS</span> <span className='work-style'>JS</span> <span className='work-style'>Bootstrap</span> <span className='work-style'>Reactjs</span> </p>
                    </p>

                    <div className="card-container">
                        {P2.map((item, index) => (
                            <div key={index} className="card" onClick={() => handleCardClick(index)}>
                                <img src={item.image} alt={`Service ${index + 1}`} className="service-img card-img-top" />
                                <div className="img-desc-cover">
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </CustomTabPanel>

                <CustomTabPanel value={value} index={2}>
                    <p className='project-cont'><a href="https://ools-34d73.web.app/" target="blank"><span className="project-link"><BiLinkExternal />View Live Project</span></a></p>
                    <h3>{projectDescriptions[2].name}</h3>
                    <p className="proj-desc">{projectDescriptions[2].description}
                        <p className='workstat'><span className='edu-percent'>TechStack :</span> <span className='work-style'>HTML</span> <span className='work-style'>CSS</span> <span className='work-style'>JS</span> <span className='work-style'>Bootstrap</span> <span className='work-style'>Reactjs</span> <span className='work-style'>Material-ui</span> </p>
                    </p>

                    <div className="card-container">
                        {P3.map((item, index) => (
                            <div key={index} className="card" onClick={() => handleCardClick(index)}>
                                <img src={item.image} alt={`Service ${index + 1}`} className="service-img card-img-top" />
                                <div className="img-desc-cover">
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </CustomTabPanel>

                <CustomTabPanel value={value} index={3}>
                    <p className='project-cont'><a href="https://eduassist-learning-partner.web.app/" target="blank"><span className="project-link"><BiLinkExternal />View Live Project</span></a></p>
                    <p className='project-cont'><a href="https://www.figma.com/design/jHeZiyT5wybCT496h5sDlY/DCS?node-id=1-16&p=f&t=BlvBJHApHJxdQ4lw-0" target="blank"><span className="project-link"><BiLinkExternal />View Design</span></a></p>
                    <h3>{projectDescriptions[3].name}</h3>
                    <p className="proj-desc">{projectDescriptions[3].description}
                        <p className='workstat'><span className='edu-percent'>TechStack :</span> <span className='work-style'>HTML</span> <span className='work-style'>CSS</span> <span className='work-style'>JS</span> <span className='work-style'>Reactjs</span> <span className='work-style'>Bootstrap</span> <span className='work-style'>Framermotion</span> </p>
                    </p>

                    <div className="card-container">
                        {P4.map((item, index) => (
                            <div key={index} className="card" onClick={() => handleCardClick(index)}>
                                <img src={item.image} alt={`Service ${index + 1}`} className="service-img card-img-top" />
                                <div className="img-desc-cover">
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </CustomTabPanel>

                <CustomTabPanel value={value} index={4}>
                    <p className='project-cont'><a href="https://brain-ai-82295.web.app/" target="blank"><span className="project-link"><BiLinkExternal />View Live Project</span></a></p>
                    <h3>{projectDescriptions[4].name}</h3>
                    <p className="proj-desc">{projectDescriptions[4].description}

                    <p className='workstat'><span className='edu-percent'>TechStack :</span> <span className='work-style'>HTML</span> <span className='work-style'>CSS</span> <span className='work-style'>JS</span> <span className='work-style'>Reactjs</span> <span className='work-style'>GeminiApi</span> <span className='work-style'>OpenaiApi</span> </p>
                    </p>

                    <div className="card-container">
                        {P5.map((item, index) => (
                            <div key={index} className="card" onClick={() => handleCardClick(index)}>
                                <img src={item.image} alt={`Service ${index + 1}`} className="service-img card-img-top" />
                                <div className="img-desc-cover">
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </CustomTabPanel>

                <CustomTabPanel value={value} index={5}>
                    <p className='project-cont'><a href="https://brain-ai-82295.web.app/" target="blank"><span className="project-link"><BiLinkExternal />View Live Project</span></a></p>
                    <p className='project-cont'><a href="https://www.figma.com/design/pUbLkexovtP8GvSZId7L6k/ServiceTech?t=BlvBJHApHJxdQ4lw-0" target="blank"><span className="project-link"><BiLinkExternal />View Design</span></a></p>
                    <h3>{projectDescriptions[5].name}</h3>
                    <p className="proj-desc">{projectDescriptions[5].description}
                    <p className='workstat'><span className='edu-percent'>TechStack :</span> <span className='work-style'>Figma</span>  </p>
                    </p>

                    {/* <div className="card-container">
                        {P6.map((item, index) => (
                            <div key={index} className="card" onClick={() => handleCardClick(index)}>
                                <img src={item.image} alt={`Service ${index + 1}`} className="service-img card-img-top" />
                                <div className="img-desc-cover">
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div> */}
                </CustomTabPanel>

                <CustomTabPanel value={value} index={6}>                    
                    <p className='project-cont'><a href="https://brain-ai-82295.web.app/" target="blank"><span className="project-link"><BiLinkExternal />View Live Project</span></a></p>
                    <p className='project-cont'><a href="https://www.figma.com/design/VHOLQqTBODbvyPHdZzPQ86/Finance-Tracker?node-id=10-381&p=f&t=mSv48Bf3cpkmNvUf-0" target="blank"><span className="project-link"><BiLinkExternal />View Design</span></a></p>
                    <h3>{projectDescriptions[6].name}</h3>
                    <p className="proj-desc">{projectDescriptions[6].description}
                    <p className='workstat'><span className='edu-percent'>TechStack :</span> <span className='work-style'>Figma</span>  </p>
                    </p>

                    {/* <div className="card-container">
                        {P6.map((item, index) => (
                            <div key={index} className="card" onClick={() => handleCardClick(index)}>
                                <img src={item.image} alt={`Service ${index + 1}`} className="service-img card-img-top" />
                                <div className="img-desc-cover">
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div> */}
                </CustomTabPanel>

                <CustomTabPanel value={value} index={7}>
                    <p className='project-cont'><a href="https://brain-ai-82295.web.app/" target="blank"><span className="project-link"><BiLinkExternal />View Live Project</span></a></p>
                    <h3>{projectDescriptions[7].name}</h3>
                    <p className="proj-desc">{projectDescriptions[7].description}
                    <p className='workstat'><span className='edu-percent'>TechStack :</span> <span className='work-style'>HTML</span> <span className='work-style'>CSS</span> <span className='work-style'>JS</span> <span className='work-style'>Bootstrap</span> </p>
                    </p>

                    <div className="card-container">
                        {P6.map((item, index) => (
                            <div key={index} className="card" onClick={() => handleCardClick(index)}>
                                <img src={item.image} alt={`Service ${index + 1}`} className="service-img card-img-top" />
                                <div className="img-desc-cover">
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </CustomTabPanel>

                <CustomTabPanel value={value} index={8}>
                    <p className='project-cont'><a href="https://brain-ai-82295.web.app/" target="blank"><span className="project-link"><BiLinkExternal />View Live Project</span></a></p>
                    <h3>{projectDescriptions[8].name}</h3>
                    <p className="proj-desc">{projectDescriptions[8].description}
                        <p className='workstat'><span className='edu-percent'>TechStack :</span> <span className='work-style'>HTML</span> <span className='work-style'>CSS</span> <span className='work-style'>JS</span> <span className='work-style'>Bootstrap</span> </p>
                    </p>

                    <div className="card-container">
                        {P7.map((item, index) => (
                            <div key={index} className="card" onClick={() => handleCardClick(index)}>
                                <img src={item.image} alt={`Service ${index + 1}`} className="service-img card-img-top" />
                                <div className="img-desc-cover">
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </CustomTabPanel>

                <CustomTabPanel value={value} index={9}>
                    <p className='project-cont' style={{float:'right', color:'#0A7273', fontWeight: '600'}}>Research Work</p>
                    <h3>{projectDescriptions[9].name}</h3>
                    <p className="proj-desc">{projectDescriptions[9].description}
                        <p className='workstat'><span className='edu-percent'>Event :</span> <span className='work-style'>Smart India Hackathon</span> </p>
                        <p className="download-cont" onClick={handleDownloadPdf}>Download<p className='download-pdf'><MdOutlineDownloadForOffline /></p></p>
                    </p>

                    <div className="card-container">
                        
                    </div>
                </CustomTabPanel>

                {/* Add more CustomTabPanels for other tabs */}

                {/* Modal */}
                {selectedImageIndex !== null && (
                    <div className="modal-overlay" onClick={closeModal}>
                        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                            <span className="close-icon" onClick={closeModal}>
                                <BiX />
                            </span>
                            <button className="prev-btn" onClick={handlePrevImage}>
                                <BiCaretLeftCircle />
                            </button>
                            <img src={currentImages[selectedImageIndex].image} alt="Selected" className="modal-image" />
                            <button className="next-btn" onClick={handleNextImage}>
                                <BiCaretRightCircle />
                            </button>
                        </div>
                    </div>
                )}


            </Box>
        </div>
    );
};

export default Administration;
