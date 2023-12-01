import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import VerticalCarousel from './VerticalCarousel.jsx';
import './Overview.css';

const ImageGallery = ({
  photos, changeModalStatus, photoIdx, changePhotoIdx,
}) => {
  const handleChangeImage = (direction) => {
    const newIdx = (photoIdx + direction + photos.length) % photos.length;
    changePhotoIdx(newIdx);
  };

  return (
    <div id="overview-gallery-main">
      <VerticalCarousel
        photos={photos}
        photoIdx={photoIdx}
        changePhotoIdx={changePhotoIdx}
      />
      <button
        data-testid="gallery-button-left"
        type="button"
        aria-label="Gallery Scroll Left"
        className="overview-gallery-btn left-btn"
        onClick={() => handleChangeImage(-1)}
      >
        <FontAwesomeIcon icon={faArrowLeft} className="icon" />
      </button>
      {photos.length ? (
        <img
          role="presentation"
          onKeyDown={() => changeModalStatus(true)}
          id="overview-gallery-img"
          data-testid="gallery-main-image"
          src={photos[photoIdx].url}
          onClick={() => { changeModalStatus(true); }}
          alt="Main Product"
        />

      ) : (
        ''
      )}
      <button
        data-testid="gallery-button-right"
        type="button"
        aria-label="Gallery Scroll Right"
        className="overview-gallery-btn right-btn"
        onClick={() => handleChangeImage(1)}
      >
        <FontAwesomeIcon icon={faArrowRight} className="icon" />
      </button>
    </div>
  );
};

export default ImageGallery;
