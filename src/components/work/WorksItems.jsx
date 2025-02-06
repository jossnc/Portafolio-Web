import React, { useState } from 'react';
import "./work.css";

const WorksItems = ({ item }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="" className="work__img" />
      <h3 className="work__title">{item.title}</h3>
      <button className="work__button" onClick={openPopup}>
        Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
      </button>

      {isPopupOpen && (
        <div className="popup show">
          <div className="popup-content">
            <img src={item.image} alt="" className="popup__img" />
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <a href={item.git} target="_blank" rel="noopener noreferrer">
              Ver en GitHub
            </a> 
            <i className='bx bx-left-arrow-alt popup-close-icon' onClick={closePopup}></i>
          </div>
        </div>
      )}
    </div>
  );
};

export default WorksItems;
