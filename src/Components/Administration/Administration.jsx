import * as React from 'react';
import './Administration.css';
import { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { BiBlock, BiMenu, BiX } from 'react-icons/bi';
import ContentHeader from '../ContentHeader/ContentHeader';

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

import P3I1 from '../../assets/project/P3I1.png';
import P3I2 from '../../assets/project/P3I2.png';
import P3I3 from '../../assets/project/P3I3.png';
import P3I4 from '../../assets/project/P3I4.png';
import P3I5 from '../../assets/project/P3I5.png';

import P4I1 from '../../assets/project/P4I1.png';
import P4I2 from '../../assets/project/P4I2.png';
import P4I3 from '../../assets/project/P4I3.png';
import P4I4 from '../../assets/project/P4I4.png';


import P5I1 from '../../assets/project/P0I1.png';
import P5I2 from '../../assets/project/P0I2.png';
import P5I3 from '../../assets/project/P0I3.png';
import P5I4 from '../../assets/project/P0I4.png';
import P5I5 from '../../assets/project/P0I5.png';
import P5I6 from '../../assets/project/P0I6.png';
import P5I7 from '../../assets/project/P0I7.png';
import P5I8 from '../../assets/project/P0I8.png';

import P6I1 from '../../assets/project/P6I1.png';
import P6I2 from '../../assets/project/P6I2.png';
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
        name: 'Online Outing & Leaving System',
        description: 'The Online Outing & Leaving System is a platform designed to simplify the process of applying for and managing student outings and leave requests within a college. It provides a convenient interface for students to submit leave applications online, specifying their reasons and dates, while tracking the status of approvals. The system also streamlines the process for college administrators, allowing them to review, approve, or reject requests efficiently, with all records maintained digitally. Additionally, a separate section for the security team ensures that students leaving the campus are verified against approved leave applications, enhancing security. By centralizing the process, the system reduces paperwork and enhances communication, making it easier for students, administrators, and security personnel to handle operations effectively.'
    },
    {
        name: 'Electrove',
        description: 'Electrove is a technical feast organized by the ECE department, for which I developed a dedicated webpage. This site showcases all the technical and non-technical events featured in the fest, providing detailed information about each event. It also includes a user-friendly registration system, allowing participants to easily sign up for events they are interested in. The webpage aims to enhance engagement and streamline the registration process, making it easier for attendees to explore and participate in the various activities offered during the fest.'

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
        name: 'Student Movie Box',
        description: 'The Movie Download and Upload System is a student-led project that allows users to upload and download movies within the college community. It makes it easy to share and access a variety of films, while also enabling users to leave reviews and recommendations. This platform fosters a community of film lovers and enhances cultural engagement among students.'
    },
    {
        name: 'TruckOlimit',
        description: 'Truckolimit is an application designed to make it easier for heavy motor vehicle drivers to find return transport opportunities after delivering products, ensuring they don’t return to their home towns empty-handed. The platform connects drivers with exporters who need goods transported, providing a flexible system where exporters can share detailed information about their products and transportation needs. Both drivers and exporters can access nearby transport requirements and services, streamlining the process of finding available jobs. This approach boosts the productivity of the goods transportation sector, reduces downtime for drivers, and increases revenue for both parties involved.'


    },
    {
        name: 'u can-grow ',
        description: 'U Can-Grow is a mobile application designed to help students find and connect with peers who share similar interests in specific domains or tech stacks. The app simplifies the process of discovering relevant fields, offering roadmaps to guide users in building expertise in their chosen areas. It also encourages networking by allowing students to connect with others, form teams, and collaborate on projects. A real-time chat feature is integrated for seamless communication, making it easier to coordinate tasks and discussions. Additionally, users can post content and share information related to their domains, fostering a collaborative learning environment where students can grow both their skills and professional network.'


    },
    {
        name: 'ExpanTrack',
        description: "Can't be provided.",
    },
    {
        name: 'Agriconnect',
        description: 'A multilingual Android and web application enabling farmers to upload produce details using AI-based voice-to-text and Read a Loud features, with automated location-based navigation, and an ML-driven price prediction model. The integrated ML model compares seasonal and local market prices to provide accurate pricing suggestions and notifies farmers about high-demand crops in the market by allowing direct sales to consumers with an integrated payment gateway, bypassing intermediaries.'
    }
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
    { image: P2I1, desc: 'Landing Page' },
    { image: P2I2, desc: 'Dashboard section' },
    { image: P2I3, desc: 'Application section' },
    { image: P2I4, desc: 'Work Place section' },
    { image: P2I5, desc: 'Stack section' },
    { image: P2I6, desc: 'Administration section' },
    { image: P2I7, desc: 'Caretakers section' },
    { image: P2I8, desc: 'Queries section' },
    { image: P2I9, desc: 'Security section' },
];

const P3 = [
    { image: P3I1, desc: 'Landing Page' },
    { image: P3I2, desc: 'Events Section' },
    { image: P3I3, desc: 'Webinar Section' },
    { image: P3I4, desc: 'Registration section ' },
    { image: P3I5, desc: 'Get In Touch' },
];

const P4 = [
    { image: P4I4, desc: 'Authentication' },
    { image: P4I1, desc: 'Landing Page' },
    { image: P4I2, desc: 'Services' },
    { image: P4I3, desc: 'Tracking Section' },
];

const P5 = [
    { image: P5I1, desc: 'Landing Page' },
    { image: P5I2, desc: 'Scrabble main section' },
    { image: P5I3, desc: 'Game1 Section' },
    { image: P5I4, desc: 'Game2 Section ' },
    { image: P5I5, desc: 'Revealing Word' },
    { image: P5I6, desc: 'Word Revealed' },
    { image: P5I7, desc: 'Honey Comb Word Hunt' },
    { image: P5I8, desc: 'When Revealed' },
];

const P6 = [
    { image: P6I1, desc: 'Movie Cards' },
    { image: P6I2, desc: 'Card Fliped' }
];


const Administration = () => {
    const navigate = useNavigate();
    const [value, setValue] = React.useState(0);
    const [showTabs, setShowTabs] = React.useState(true); // Tabs visible by default
    const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 700);
    const [selectedImage, setSelectedImage] = useState(null);

    const handleCardClick = (image) => {
        setSelectedImage(image);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };


    const handleChange = (event, newValue) => {
        setValue(newValue);

        // Automatically hide tabs on mobile after selection
        if (isMobile) {
            setShowTabs(false);
        }
    };

    const handleShareIdeaClick = () => {
        navigate('/menu/queries');
    };

    const toggleTabs = () => {
        setShowTabs(!showTabs); // Toggle the tabs visibility
    };

    // Handle window resize to update mobile view
    React.useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 700) {
                setIsMobile(true);
                setShowTabs(false); // Hide tabs on mobile
            } else {
                setIsMobile(false);
                setShowTabs(true); // Show tabs on larger screens
            }
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="fixed-scroll">
            <ContentHeader title="Projects" />
            <Box sx={{ width: '100%', borderTop: '1px solid' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider', position: 'relative' }}>
                    <div className="menu-and-share">
                        {isMobile && (
                            <BiMenu className="menu-icon" onClick={toggleTabs} />
                        )}
                        <Button className="share-btn" onClick={handleShareIdeaClick}>
                            Connect With Me
                        </Button>
                    </div>
                    {(showTabs || !isMobile) && (
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            aria-label="basic tabs example"
                            TabIndicatorProps={{ style: { backgroundColor: '#CC0303' } }}
                            className={`tab-names ${isMobile ? 'mobile-tabs' : ''}`}
                            orientation={isMobile ? 'vertical' : 'horizontal'}
                        >
                            <Tab label="DLMS" {...a11yProps(0)} sx={{ '&.Mui-selected': { color: '#CC0303' } }} />
                            <Tab label="OOLS" {...a11yProps(1)} sx={{ '&.Mui-selected': { color: '#CC0303' } }} />
                            <Tab label="Electrove" {...a11yProps(2)} sx={{ '&.Mui-selected': { color: '#CC0303' } }} />
                            <Tab label="ServiceTrack" {...a11yProps(3)} sx={{ '&.Mui-selected': { color: '#CC0303' } }} />
                            <Tab label="Scrabble" {...a11yProps(4)} sx={{ '&.Mui-selected': { color: '#CC0303' } }} />
                            <Tab label="SMB" {...a11yProps(5)} sx={{ '&.Mui-selected': { color: '#CC0303' } }} />
                            <Tab label="TruckOlimit" {...a11yProps(6)} sx={{ '&.Mui-selected': { color: '#CC0303' } }} />
                            <Tab label="UCG" {...a11yProps(7)} sx={{ '&.Mui-selected': { color: '#CC0303' } }} />
                            <Tab label="ExpanTrack" {...a11yProps(8)} sx={{ '&.Mui-selected': { color: '#CC0303' } }} />
                            <Tab label="AgriConnect" {...a11yProps(9)} sx={{ '&.Mui-selected': { color: '#CC0303' } }} />
                            <Tab label="Share Idea" {...a11yProps(10)} sx={{ display: 'none' }} />
                        </Tabs>
                    )}
                </Box>

                {/* Project Description and Technologies Timeline */}
                <CustomTabPanel value={value} index={0}>
                    <h3>{projectDescriptions[0].name}</h3>
                    <p className="proj-desc">{projectDescriptions[0].description}
                    <p className='workstat'><span className='edu-percent'>TechStack :</span> <span className='work-style'>HTML</span> <span className='work-style'>CSS</span> <span className='work-style'>JS</span> <span className='work-style'>Bootstrap</span> <span className='work-style'>NodeJs</span> <span className='work-style'>ExpressJS</span> <span className='work-style'>Sequelize</span> <span className='work-style'>Mysql</span></p>
                    <p className='workstat'><span className='edu-percent'>Contributors :</span> <span className='work-style'>Mohan Patro</span> <span className='work-style'>Venkatesh Ganisetti</span> <span className='work-style'>Kimidi Prasanthi</span> </p>
                    </p>
                    <div className="card-container">
                        {/* Map through the global imageData array */}
                        {P1.map((item, index) => (
                            <div key={index} className="card" onClick={() => handleCardClick(item.image)}>
                                <div className="container mt-3">
                                    <img src={item.image} className="service-img card-img-top" alt={`Service ${index + 1}`} />
                                </div>
                                <div className="img-desc-cover">
                                    <p className='img-desc-p'>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Modal to show enlarged image */}
                    {selectedImage && (
                        <div className="modal-overlay" onClick={closeModal}>
                            <div className="modal-content">
                                <span className="close-icon" onClick={closeModal}> <BiX /> </span>
                                <img src={selectedImage} alt="Selected" className="modal-image" />
                            </div>
                        </div>
                    )}

                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    <h3>{projectDescriptions[1].name}</h3>
                    <p className="proj-desc">{projectDescriptions[1].description}
                    <p className='workstat'><span className='edu-percent'>TechStack :</span> <span className='work-style'>HTML</span> <span className='work-style'>CSS</span> <span className='work-style'>JS</span> <span className='work-style'>Bootstrap</span> <span className='work-style'>reactJs</span> <span className='work-style'>material Ui</span> </p>
                    </p>
                    <div className="card-container">
                        {/* Map through the global imageData array */}
                        {P2.map((item, index) => (
                            <div key={index} className="card" onClick={() => handleCardClick(item.image)}>
                                <div className="container mt-3">
                                    <img src={item.image} className="service-img card-img-top" alt={`Service ${index + 1}`} />
                                </div>
                                <div className="img-desc-cover">
                                    <p className='img-desc-p'>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Modal to show enlarged image */}
                    {selectedImage && (
                        <div className="modal-overlay" onClick={closeModal}>
                            <div className="modal-content">
                                <span className="close-icon" onClick={closeModal}> <BiX /> </span>
                                <img src={selectedImage} alt="Selected" className="modal-image" />
                            </div>
                        </div>
                    )}
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                    <h3>{projectDescriptions[2].name}</h3>
                    <p className="proj-desc">{projectDescriptions[2].description}
                    <p className='workstat'><span className='edu-percent'>TechStack :</span> <span className='work-style'>HTML</span> <span className='work-style'>CSS</span> <span className='work-style'>JS</span> <span className='work-style'>Bootstrap</span> </p>
                    </p>
                    <div className="card-container">
                        {/* Map through the global imageData array */}
                        {P3.map((item, index) => (
                            <div key={index} className="card" onClick={() => handleCardClick(item.image)}>
                                <div className="container mt-3">
                                    <img src={item.image} className="service-img card-img-top" alt={`Service ${index + 1}`} />
                                </div>
                                <div className="img-desc-cover">
                                    <p className='img-desc-p'>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Modal to show enlarged image */}
                    {selectedImage && (
                        <div className="modal-overlay" onClick={closeModal}>
                            <div className="modal-content">
                                <span className="close-icon" onClick={closeModal}> <BiX /> </span>
                                <img src={selectedImage} alt="Selected" className="modal-image" />
                            </div>
                        </div>
                    )}
                </CustomTabPanel>
                <CustomTabPanel value={value} index={3}>
                    <h3>{projectDescriptions[3].name}</h3>
                    <p className="proj-desc">{projectDescriptions[3].description}
                    <p className='workstat'><span className='edu-percent'>TechStack :</span> <span className='work-style'>HTML</span> <span className='work-style'>CSS</span> <span className='work-style'>JS</span> <span className='work-style'>Bootstrap</span> </p>
                    </p>
                    <div className="card-container">
                        {/* Map through the global imageData array */}
                        {P4.map((item, index) => (
                            <div key={index} className="card" onClick={() => handleCardClick(item.image)}>
                                <div className="container mt-3">
                                    <img src={item.image} className="service-img card-img-top" alt={`Service ${index + 1}`} />
                                </div>
                                <div className="img-desc-cover">
                                    <p className='img-desc-p'>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Modal to show enlarged image */}
                    {selectedImage && (
                        <div className="modal-overlay" onClick={closeModal}>
                            <div className="modal-content">
                                <span className="close-icon" onClick={closeModal}> <BiX /> </span>
                                <img src={selectedImage} alt="Selected" className="modal-image" />
                            </div>
                        </div>
                    )}
                </CustomTabPanel>
                <CustomTabPanel value={value} index={4}>
                    <h3>{projectDescriptions[4].name}</h3>
                    <p className="proj-desc">{projectDescriptions[4].description}
                    <p className='workstat'><span className='edu-percent'>TechStack :</span> <span className='work-style'>HTML</span> <span className='work-style'>CSS</span> <span className='work-style'>JS</span> <span className='work-style'>Bootstrap</span> </p>
                    </p>
                    <div className="card-container">
                        {/* Map through the global imageData array */}
                        {P5.map((item, index) => (
                            <div key={index} className="card" onClick={() => handleCardClick(item.image)}>
                                <div className="container mt-3">
                                    <img src={item.image} className="service-img card-img-top" alt={`Service ${index + 1}`} />
                                </div>
                                <div className="img-desc-cover">
                                    <p className='img-desc-p'>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Modal to show enlarged image */}
                    {selectedImage && (
                        <div className="modal-overlay" onClick={closeModal}>
                            <div className="modal-content">
                                <span className="close-icon" onClick={closeModal}> <BiX /> </span>
                                <img src={selectedImage} alt="Selected" className="modal-image" />
                            </div>
                        </div>
                    )}
                </CustomTabPanel>
                <CustomTabPanel value={value} index={5}>
                    <h3>{projectDescriptions[5].name}</h3>
                    <p className="proj-desc">{projectDescriptions[4].description}
                    <p className='workstat'><span className='edu-percent'>TechStack :</span> <span className='work-style'>HTML</span> <span className='work-style'>CSS</span> <span className='work-style'>JS</span> <span className='work-style'>Bootstrap</span> </p>
                    </p>
                    <div className="card-container">
                        {/* Map through the global imageData array */}
                        {P6.map((item, index) => (
                            <div key={index} className="card" onClick={() => handleCardClick(item.image)}>
                                <div className="container mt-3">
                                    <img src={item.image} className="service-img card-img-top" alt={`Service ${index + 1}`} />
                                </div>
                                <div className="img-desc-cover">
                                    <p className='img-desc-p'>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Modal to show enlarged image */}
                    {selectedImage && (
                        <div className="modal-overlay" onClick={closeModal}>
                            <div className="modal-content">
                                <span className="close-icon" onClick={closeModal}> <BiX /> </span>
                                <img src={selectedImage} alt="Selected" className="modal-image" />
                            </div>
                        </div>
                    )}
                </CustomTabPanel>
                <CustomTabPanel value={value} index={6}>
                    <h3>{projectDescriptions[6].name}</h3>
                    <p className="proj-desc">{projectDescriptions[6].description}
                    <p className='workstat'><span className='edu-percent'>TechStack :</span> <span className='work-style'>HTML</span> <span className='work-style'>CSS</span> <span className='work-style'>JS</span> <span className='work-style'>Bootstrap</span> <span className='work-style'>reactjs</span> <span className='work-style'>material ui</span> </p>
                    </p>
                    {/*<div className="card-container">
                        {P1.map((item, index) => (
                            <div key={index} className="card" onClick={() => handleCardClick(item.image)}>
                                <div className="container mt-3">
                                    <img src={item.image} className="service-img card-img-top" alt={`Service ${index + 1}`} />
                                </div>
                                <div className="img-desc-cover">
                                    <p className='img-desc-p'>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>*/}
                    <div className="upcoming-pro"><p className='up-p'>No Preview</p></div>

                    {/* Modal to show enlarged image */}
                    {selectedImage && (
                        <div className="modal-overlay" onClick={closeModal}>
                            <div className="modal-content">
                                <span className="close-icon" onClick={closeModal}> <BiX /> </span>
                                <img src={selectedImage} alt="Selected" className="modal-image" />
                            </div>
                        </div>
                    )}
                </CustomTabPanel>
                <CustomTabPanel value={value} index={7}>
                    <h3>{projectDescriptions[7].name}</h3>
                    <p className="proj-desc">{projectDescriptions[7].description}
                    <p className='workstat'><span className='edu-percent'>TechStack :</span> <span className='work-style'>HTML</span> <span className='work-style'>CSS</span> <span className='work-style'>JS</span> <span className='work-style'>Bootstrap</span> <span className='work-style'>reactjs</span> <span className='work-style'>react native</span> </p>
                    </p>
                    {/*<div className="card-container">
                        {P1.map((item, index) => (
                            <div key={index} className="card" onClick={() => handleCardClick(item.image)}>
                                <div className="container mt-3">
                                    <img src={item.image} className="service-img card-img-top" alt={`Service ${index + 1}`} />
                                </div>
                                <div className="img-desc-cover">
                                    <p className='img-desc-p'>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>*/}
                    <div className="upcoming-pro"><p className='up-p'>No Preview</p></div>

                    {/* Modal to show enlarged image */}
                    {selectedImage && (
                        <div className="modal-overlay" onClick={closeModal}>
                            <div className="modal-content">
                                <span className="close-icon" onClick={closeModal}> <BiX /> </span>
                                <img src={selectedImage} alt="Selected" className="modal-image" />
                            </div>
                        </div>
                    )}
                </CustomTabPanel>
                <CustomTabPanel value={value} index={8}>
                    <h3>{projectDescriptions[8].name}</h3>
                    <p className="proj-desc">{projectDescriptions[8].description}</p>
                    {/*<div className="card-container">
                        {P1.map((item, index) => (
                            <div key={index} className="card" onClick={() => handleCardClick(item.image)}>
                                <div className="container mt-3">
                                    <img src={item.image} className="service-img card-img-top" alt={`Service ${index + 1}`} />
                                </div>
                                <div className="img-desc-cover">
                                    <p className='img-desc-p'>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>*/}
                    <div className="upcoming-pro"><p className='up-p'>No Preview</p></div>

                    {/* Modal to show enlarged image */}
                    {selectedImage && (
                        <div className="modal-overlay" onClick={closeModal}>
                            <div className="modal-content">
                                <span className="close-icon" onClick={closeModal}> <BiX /> </span>
                                <img src={selectedImage} alt="Selected" className="modal-image" />
                            </div>
                        </div>
                    )}
                </CustomTabPanel>
                <CustomTabPanel value={value} index={9}>
                    <h3>{projectDescriptions[9].name}</h3>
                    <p className="proj-desc">{projectDescriptions[9].description}
                    <p className='workstat'><span className='edu-percent'>TechStack :</span> <span className='work-style'><BiBlock /></span>  </p>
                    </p>
                    {/*<div className="card-container">
                        {P1.map((item, index) => (
                            <div key={index} className="card" onClick={() => handleCardClick(item.image)}>
                                <div className="container mt-3">
                                    <img src={item.image} className="service-img card-img-top" alt={`Service ${index + 1}`} />
                                </div>
                                <div className="img-desc-cover">
                                    <p className='img-desc-p'>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>*/}
                    <div className="upcoming-pro"><p className='up-p'>Upcoming...</p></div>

                    {/* Modal to show enlarged image */}
                    {selectedImage && (
                        <div className="modal-overlay" onClick={closeModal}>
                            <div className="modal-content">
                                <span className="close-icon" onClick={closeModal}> <BiX /> </span>
                                <img src={selectedImage} alt="Selected" className="modal-image" />
                            </div>
                        </div>
                    )}
                </CustomTabPanel>
            </Box>
        </div>
    );
};

export default Administration;
