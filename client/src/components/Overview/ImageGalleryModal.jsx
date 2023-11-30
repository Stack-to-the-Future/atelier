import React from 'react';
import './Overview.css';

const ImageGalleryModal = ({ photo, changeModalStatus }) => (
  <div className="overview-modal" onClick={() => changeModalStatus(false)}>
    <img className="overview-modal-image" src={photo} />
  </div>
);

export default ImageGalleryModal;
