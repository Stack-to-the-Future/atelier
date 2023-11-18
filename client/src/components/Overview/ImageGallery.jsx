import React, { useState } from 'react';
import './ImageGallery.css';

const ImageGallery = ({ photos }) => {
  const [photoIdx, setPhotoIdx] = useState(0);

  const handleChangeImage = (direction) => {
    const newIdx = (photoIdx + direction + photos.length) % photos.length;
    setPhotoIdx(newIdx);
  };

  return (
    <div id='overview-gallery-main'>
      {
        photos.length ? <img id='overview-gallery-img' src={photos[photoIdx].url} /> : ''
      }
      <div className='overview-gallery-btn-group'>
        <button className='overview-gallery-btn' onClick={() => handleChangeImage(-1)}>LEFT BTN</button>
        <button className='overview-gallery-btn' onClick={() => handleChangeImage(1)}>RIGHT BTN</button>
      </div>
    </div>
  );
};

export default ImageGallery;
