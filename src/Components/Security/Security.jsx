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
import { BiX } from 'react-icons/bi';

const Security = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleCardClick = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className='fixed-scroll'>
      <ContentHeader title="Certifications" />
      <div className="certificate-container">
        <div className="card-container">
          {/* Map through the certifications */}
          {[HTML, CSS, BOOTSTRAP, JSJQ, FIGMA, CC, JAVA, MREACT, REACT, GENAI].map((image, index) => (
            <div key={index} className="card" onClick={() => handleCardClick(image)}>
              <div className="container mt-3">
                <img src={image} className="service-img card-img-top" alt={`Service ${index + 1}`} />
              </div>
            </div>
          ))}
        </div>
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
    </div>
  );
};

export default Security;
