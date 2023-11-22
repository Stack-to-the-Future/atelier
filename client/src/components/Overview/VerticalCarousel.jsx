import React from 'react';
import './Overview.css';

const VerticalCarousel = ({ photos, photoIdx, setPhotoIdx }) => (
  <div id="overview-gallery-styles">
    {photos.map((photo, idx) => (
      <img
        src={photo.url}
        key={idx}
        onClick={() => setPhotoIdx(idx)}
        className={`overview-gallery-style ${idx === photoIdx ? 'overview-gallery-selected' : ''
        }`}
      />
    ))}
  </div>
);

export default VerticalCarousel;
