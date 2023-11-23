import React, { useState } from 'react';
import './Overview.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const VerticalCarousel = ({ photos, photoIdx, setPhotoIdx }) => {
  const [index, setIndex] = useState(0);
  const size = 3;

  const handleClick = (direction) => setIndex(index + direction);

  return (
    <div id="overview-gallery-styles">
      {index > 0 ? (
        <button
          type="button"
          onClick={() => handleClick(-1)}
          className="overview-gallery-style vert-btn"
        >
          <FontAwesomeIcon icon={faChevronUp} className="icon gallery-icon" />
        </button>
      ) : (
        <div className="overview-gallery-style vert-btn gallery-invisible" />
      )}
      {photos.slice(index, index + size).map((photo, idx) => (
        <button
          className={`overview-gallery-style ${idx + index === photoIdx ? 'overview-gallery-selected' : ''
          }`}
          type="button"
          key={`${photo.url}`}
          onClick={() => setPhotoIdx(idx + index)}
        >
          <img
            className="overview-gallery-image"
            src={photo.url}
            alt={`style:${idx}`}
          />
        </button>
      ))}
      {index < photos.length - size ? (
        <button
          type="button"
          onClick={() => handleClick(1)}
          className="overview-gallery-style vert-btn"
        >
          <FontAwesomeIcon icon={faChevronDown} className="icon gallery-icon" />
        </button>
      ) : (
        <div className="overview-gallery-style vert-btn gallery-invisible" />
      )}
    </div>
  );
};
export default VerticalCarousel;
