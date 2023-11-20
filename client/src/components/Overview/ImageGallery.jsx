import React, { useState } from 'react';
import './Overview.css';

const ImageGallery = ({ photos }) => {
  const [photoIdx, setPhotoIdx] = useState(0);

  const handleChangeImage = (direction) => {
    const newIdx = (photoIdx + direction + photos.length) % photos.length;
    setPhotoIdx(newIdx);
  };

  return (
    <div id='overview-gallery-main'>
      <button className='overview-gallery-btn' onClick={() => handleChangeImage(-1)}>LEFT BTN</button>
      {
        photos.length ? <img id='overview-gallery-img' src={photos[photoIdx].url} /> : ''
      }
      <button className='overview-gallery-btn' onClick={() => handleChangeImage(1)}>RIGHT BTN</button>
    </div>
  );
};

export default ImageGallery;
