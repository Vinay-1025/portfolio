import React, { useState, useEffect } from 'react';
import './Aboutp.css';
import { BiArrowToBottom, BiBot, BiCloudDownload, BiDownArrowAlt, BiReceipt } from 'react-icons/bi';
import ProfileImage from '../../assets/G.Vinay_Sriram.jpeg';
import ContentHeader from '../ContentHeader/ContentHeader';
import { useNavigate } from 'react-router-dom';
import { MdOutlineDownloadForOffline } from "react-icons/md";
import { saveAs } from 'file-saver';
import Resume from "../../assets/VinaySriram-Gavara.pdf";

const roles = ["UI Development", "UI/UX", "Linux", "front end", "free leancer"];

const Aboutp = () => {
    const [currentRole, setCurrentRole] = useState(0);
    const navigate = useNavigate();

    // Change roles every 2 seconds
    useEffect(() => {
        const roleInterval = setInterval(() => {
            setCurrentRole((prevRole) => (prevRole + 1) % roles.length);
        }, 2000.1);
        return () => clearInterval(roleInterval); // Cleanup interval on component unmount
    }, []);


    const HandleProjectNavigation = () => {
        navigate('/menu/projects');
    }

    const handleScrollToSkills = () => {
        const element = document.querySelector('.skills-div');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleResumeDownload = () => {
        const pdfUrl = Resume;
        const pdfName = 'VinaySriram-Gavara-Resume.pdf';
        saveAs(pdfUrl, pdfName);
    }


    return (
        <div className='fixed-scroll'>
            <ContentHeader title="About Me" />
            <div className='about-container'>
                {/* Left Section */}
                <div className="left-section">
                    <div className="profile-pic">
                        <img src={ProfileImage} alt="Profile" />
                    </div>
                    <h3>I Am Skilled In</h3>
                    <div className="roles">
                        <h3><span className='span-color'>{roles[currentRole]}</span></h3>
                    </div>
                </div>

                {/* Right Section */}
                <div className="right-section">
                    <div className="description-text">
                        <p>I'm <span className='edu-percent'>Gavara Vinay Sriram</span> , a passionate <span className="sub-heading"> Frontend Developer</span>. I have hands-on experience with HTML, CSS, JavaScript, Bootstrap, and ReactJS.
                        I thrive on creating clean, engaging, and user-friendly interfaces. Recently, I worked on <span className="sub-heading">real-time</span> projects focused on <span className='edu-percent'>dental lab automation</span>, which honed my ability to develop practical solutions and enhance user experience.
                        I'm always eager to learn and explore new technologies to improve my skills further.
                        </p>
                        <p className='address'><span className='edu-percent'>Address :</span> Palivela-Kotameraka Kothapeta Mandal Konasemma District - 533229</p>
                        <p className='workstat'><span className='edu-percent'>Work Mode :</span> <span className='work-style'>OnSite</span> <span className='work-style'>WorkFromHome</span> <span className='work-style'>Hybrid</span></p>
                    </div>
                    <div className="download-button">
                    <button className='butn' onClick={HandleProjectNavigation}>Explore Projects <BiBot className='icon-bot'/></button>
                    <button className='butn' onClick={handleScrollToSkills}> View Resume <BiReceipt className='icon-bot' /></button>
                    </div>
                </div>
            </div>

            <div className="skills-div">
                <div className="skills-title">
                    <h2>resume</h2>
                </div>
                <p className='download-cont' onClick={handleResumeDownload}>Download resume<p className='download-pdf'><MdOutlineDownloadForOffline /></p></p>
                <div className="resume page">

                    <div className="resume-row">
                        <div className="wrapper">
                            <div className="education">
                                <h2>Education</h2>
                                <div className="grid-item">
                                    <h4 className="year">2021 - Present</h4>
                                    <h4 className="education-name">Bachelor Of Technologies - <span className='edu-percent'>89%</span></h4>
                                    <p className="company">Rajiv Gandhi University of Knowledge Technologies - Srikakulam</p>
                                    <p className="education-description">Currently pursuing a B.Tech in Computer Science & Engineering, with an achieved percentage of 89%, demonstrating a solid foundation in core technical subjects.</p>
                                    <div className="divider"></div>
                                </div>

                                <div className="grid-item">
                                    <h4 className="year">2019 - 2021</h4>
                                    <h4 className="education-name">Pre University Course - <span className='edu-percent'>92%</span></h4>
                                    <p className="company">Rajiv Gandhi University of Knowledge Technologies - Srikakulam</p>
                                    <p className="education-description">Completed PUC in the MPC stream with a 92% score, showcasing strong skills in Mathematics, Physics, and Chemistry.</p>
                                    <div className="divider"></div>
                                </div>

                                <div className="grid-item">
                                    <h4 className="year">2018 - 2019</h4>
                                    <h4 className="education-name">SSC - <span className='edu-percent'>98%</span> </h4>
                                    <p className="company">ZPHS High School</p>
                                    <p className="education-description">Completed my SSC excelling with a 98% score, demonstrating consistent academic dedication and a strong foundation in core subjects.</p>
                                    <div className="divider"></div>
                                </div>
                            </div>

                            <div className="experience">
                                <h2>Organizations & Clubs</h2>
                                <div className="grid-item">
                                    <h4 className="year">2023 - Current</h4>
                                    <h4 className="experience-name">Student Coordinator</h4>
                                    <p className="company">Training & Placement Cell (TNPC)</p>
                                    <p className="experience-description">Student Coordinator responsible for managing and overseeing active placement drives, coordinating organizational tasks, and training students to ensure their readiness for upcoming recruitment processes, contributing to successful outcomes.</p>
                                    <div className="divider"></div>
                                </div>

                                <div className="grid-item">
                                    <h4 className="year">2023 - Current</h4>
                                    <h4 className="experience-name">Class Coordinator</h4>
                                    <p className="company">Training & Placement Cell (TNPC)</p>
                                    <p className="experience-description">Class Coordinator responsible for managing the respective class, organizing and conducting exams, and preparing students for recruitment drives, ensuring smooth execution of academic activities and student readiness.</p>
                                    <div className="divider"></div>
                                </div>

                                <div className="grid-item">
                                    <h4 className="year">2022 - Current</h4>
                                    <h4 className="experience-name">Quiz Team Member</h4>
                                    <p className="company">English Literary Club (ELC)</p>
                                    <p className="experience-description">Quiz Team Member responsible for organizing and conducting activities, tests, and events related to the English language as part of the ELC club, fostering language skills and engaging student participation.</p>
                                    <div className="divider"></div>
                                </div>

                                <div className="grid-item">
                                    <h4 className="year">2021 - Current</h4>
                                    <h4 className="experience-name">Member Of Yoga</h4>
                                    <p className="company">Yoga</p>
                                    <p className="experience-description">Active participant in Yoga, regularly engaging in yoga sessions to enhance physical fitness, mental well-being, and mindfulness practices as part of the club's wellness initiatives.</p>
                                    <div className="divider"></div>
                                </div>
                            </div>
                        </div>

                        <div className="wrapper">
                            <div className="design-skill">
                                <h2>Design Skills</h2>

                                <div className="progress-detail">
                                    <div className="progress-name">Web Design</div>
                                    <div className="progress-percent">95%</div>
                                </div>
                                <div className="progress-bar">
                                    <div className="progress" style={{width: '95%'}}></div>
                                </div>

                                <div className="progress-detail">
                                    <div className="progress-name">UI Design</div>
                                    <div className="progress-percent">96%</div>
                                </div>
                                <div className="progress-bar">
                                    <div className="progress" style={{width: '96%'}}></div>
                                </div>

                                <div className="progress-detail">
                                    <div className="progress-name">Figma</div>
                                    <div className="progress-percent">86%</div>
                                </div>
                                <div className="progress-bar">
                                    <div className="progress" style={{width: '86%'}}></div>
                                </div>

                                <div className="progress-detail">
                                    <div className="progress-name">Canva</div>
                                    <div className="progress-percent">92%</div>
                                </div>
                                <div className="progress-bar">
                                    <div className="progress" style={{width: '92%'}}></div>
                                </div>
                            </div>

                            <div className="coding-skill">
                                <h2>Coding Skills</h2>

                                <div className="progress-detail">
                                    <div className="progress-name">HTML/CSS</div>
                                    <div className="progress-percent">98%</div>
                                </div>
                                <div className="progress-bar">
                                    <div className="progress" style={{width: '98%'}}></div>
                                </div>

                                <div className="progress-detail">
                                    <div className="progress-name">JavaScript</div>
                                    <div className="progress-percent">90%</div>
                                </div>
                                <div className="progress-bar">
                                    <div className="progress" style={{width: '90%'}}></div>
                                </div>

                                <div className="progress-detail">
                                    <div className="progress-name">React</div>
                                    <div className="progress-percent">70%</div>
                                </div>
                                <div className="progress-bar">
                                    <div className="progress" style={{width: '70%'}}></div>
                                </div>

                                <div className="progress-detail">
                                    <div className="progress-name">Python</div>
                                    <div className="progress-percent">80%</div>
                                </div>
                                <div className="progress-bar">
                                    <div className="progress" style={{width: '80%'}}></div>
                                </div>

                                <div className="progress-detail">
                                    <div className="progress-name">Java</div>
                                    <div className="progress-percent">79%</div>
                                </div>
                                <div className="progress-bar">
                                    <div className="progress" style={{width: '79%'}}></div>
                                </div>

                                <div className="progress-detail">
                                    <div className="progress-name">C</div>
                                    <div className="progress-percent">95%</div>
                                </div>
                                <div className="progress-bar">
                                    <div className="progress" style={{width: '95%'}}></div>
                                </div>

                                <div className="progress-detail">
                                    <div className="progress-name">React Native</div>
                                    <div className="progress-percent">55%</div>
                                </div>
                                <div className="progress-bar">
                                    <div className="progress" style={{width: '55%'}}></div>
                                </div>

                                <div className="progress-detail">
                                    <div className="progress-name">AWS</div>
                                    <div className="progress-percent">50%</div>
                                </div>
                                <div className="progress-bar">
                                    <div className="progress" style={{width: '50%'}}></div>
                                </div>
                            </div>
                            
                            <div className="coding-skill">
                                <h2>Soft Skills</h2>

                                <div className="progress-detail">
                                    <div className="progress-name">Leadership</div>
                                    <div className="progress-percent">Served as a Class, Mess Representative.</div>
                                </div>
                                <div className="progress-detail">
                                    <div className="progress-name">Organiser</div>
                                    <div className="progress-percent">Managed in handling Events and Drives.</div>
                                </div>

                                <div className="progress-detail">
                                    <div className="progress-name">Communication</div>
                                    <div className="progress-percent">One of the Member in English Literacy Club.</div>
                                </div>

                                <div className="progress-detail">
                                    <div className="progress-name">Team Work</div>
                                    <div className="progress-percent">Sucessfully handled many events and seminar.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Aboutp;
