import React from 'react';
import './Overview.css';

const VerticalCarousel = ({ photos, photoIdx, setPhotoIdx }) => (
  <div id="overview-gallery-styles">
    {photos.map((photo, idx) => (
      <button
        type="button"
        key={`photo:${photo.url.slice(0, 3)}`}
        onClick={() => setPhotoIdx(idx)}
      >
        <img
          src={photo.url}
          className={`overview-gallery-style ${idx === photoIdx ? 'overview-gallery-selected' : ''
          }`}
          alt={`style:${idx}`}
        />

      </button>

    ))}
  </div>
);

export default VerticalCarousel;
