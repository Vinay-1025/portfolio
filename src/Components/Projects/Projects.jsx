import React, { useState } from 'react';
import './Education.css';
import TagInput from '../TagInput/TagInput';

const Education = () => {
    const [educationEntries, setEducationEntries] = useState([]);
    const [formData, setFormData] = useState({
        year: '',
        educationName: '',
        percentage: '',
        institution: '',
        description: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleAddEntry = () => {
        setEducationEntries([...educationEntries, formData]);
        setFormData({
            year: '',
            educationName: '',
            percentage: '',
            institution: '',
            description: ''
        });
    };

    return (
        <div className="resume page">
            <div className="resume-row">
                <div className="wrapper">
                    <div className="education">
                        <h2>Education</h2>
                        
                        {educationEntries.map((entry, index) => (
                            <div key={index} className="grid-item">
                                <h4 className="year">{entry.year}</h4>
                                <h4 className="education-name">{entry.educationName} - <span className='edu-percent'>{entry.percentage}%</span></h4>
                                <p className="company">{entry.institution}</p>
                                <p className="education-description">{entry.description}</p>
                                <div className="divider"></div>
                            </div>
                        ))}

                        <div className="add-education-form">
                            <input
                                type="text"
                                name="year"
                                value={formData.year}
                                onChange={handleInputChange}
                                placeholder="Year (e.g., 2021 - Present)"
                            />
                            <input
                                type="text"
                                name="educationName"
                                value={formData.educationName}
                                onChange={handleInputChange}
                                placeholder="Education Name (e.g., Bachelor of Technology)"
                            />
                            <input
                                type="text"
                                name="percentage"
                                value={formData.percentage}
                                onChange={handleInputChange}
                                placeholder="Percentage (e.g., 89)"
                            />
                            <input
                                type="text"
                                name="institution"
                                value={formData.institution}
                                onChange={handleInputChange}
                                placeholder="Institution Name"
                            />
                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleInputChange}
                                placeholder="Description of the course or achievements"
                            />
                            <button onClick={handleAddEntry}>Add Education</button>
                        </div>
                    </div>
                </div>

                <div className="wrapper">
                    <TagInput />
                </div>
            </div>
        </div>
    );
};

export default Education;
