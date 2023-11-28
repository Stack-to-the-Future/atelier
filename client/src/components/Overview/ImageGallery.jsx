import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import VerticalCarousel from './VerticalCarousel.jsx';
import './Overview.css';

const ImageGallery = ({ photos }) => {
  const [photoIdx, setPhotoIdx] = useState(0);

  const handleChangeImage = (direction) => {
    const newIdx = (photoIdx + direction + photos.length) % photos.length;
    setPhotoIdx(newIdx);
  };

  return (
    <div id="overview-gallery-main">
      <VerticalCarousel
        photos={photos}
        photoIdx={photoIdx}
        setPhotoIdx={setPhotoIdx}
      />
      <button
        data-testid="gallery-button-left"
        type="button"
        className="overview-gallery-btn left-btn"
        onClick={() => handleChangeImage(-1)}
      >
        <FontAwesomeIcon icon={faArrowLeft} className="icon" />
      </button>
      {photos.length ? (
        <img id="overview-gallery-img" data-testid="gallery-main-image" src={photos[photoIdx].url} alt="Main Product" />
      ) : (
        ''
      )}
      <button
        data-testid="gallery-button-right"
        type="button"
        className="overview-gallery-btn right-btn"
        onClick={() => handleChangeImage(1)}
      >
        <FontAwesomeIcon icon={faArrowRight} className="icon" />
      </button>
    </div>
  );
};

export default ImageGallery;
