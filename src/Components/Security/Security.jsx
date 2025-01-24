import React, { useState } from 'react';
import './Security.css';
import ContentHeader from '../ContentHeader/ContentHeader';
import BOOTSTRAP from '../../assets/certi/Bootstrap&Jquery.jpg';
import CC from '../../assets/certi/CC&AWS.jpg';
import CSS from '../../assets/certi/css.png';
import GENAI from '../../assets/certi/GenAI.png';
import HTML from '../../assets/certi/Html.png';
import FIGMA from '../../assets/certi/Figma_Essentials.jpg';
import JAVA from '../../assets/certi/Java_Basics.jpg';
import JSJQ from '../../assets/certi/Javascript&Jquery.jpg';
import MREACT from '../../assets/certi/Mastering_React.jpg';
import REACT from '../../assets/certi/ReactJs.png';
import { BiX, BiChevronLeft, BiChevronRight } from 'react-icons/bi';

const Security = () => {
  const certifications = [HTML, CSS, BOOTSTRAP, JSJQ, FIGMA, CC, JAVA, MREACT, REACT, GENAI];
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const handleCardClick = (index) => {
    setSelectedImageIndex(index);
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
  };

  const showNextImage = (e) => {
    e.stopPropagation();
    setSelectedImageIndex((prevIndex) => (prevIndex + 1) % certifications.length);
  };

  const showPreviousImage = (e) => {
    e.stopPropagation();
    setSelectedImageIndex((prevIndex) => (prevIndex - 1 + certifications.length) % certifications.length);
  };

  return (
    <div className='fixed-scroll'>
      <ContentHeader title="Certifications" />
      <div className="certificate-container">
        <div className="card-container">
          {certifications.map((image, index) => (
            <div key={index} className="card" onClick={() => handleCardClick(index)}>
              <div className="container mt-3">
                <img src={image} className="service-img card-img-top" alt={`Service ${index + 1}`} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImageIndex !== null && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content">
            <span className="close-icon" onClick={closeModal}>
              <BiX />
            </span>
            <button className="arrow-icon left-arrow" onClick={showPreviousImage}>
              <BiChevronLeft />
            </button>
            <img src={certifications[selectedImageIndex]} alt="Selected" className="modal-image" />
            <button className="arrow-icon right-arrow" onClick={showNextImage}>
              <BiChevronRight />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Security;
