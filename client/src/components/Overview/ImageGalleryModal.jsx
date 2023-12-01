import React, { useState } from 'react';
import './Overview.css';

const ImageGalleryModal = ({ photo, changeModalStatus }) => {
  const [[x, y], setXY] = useState([0, 0]);
  const [[imgWidth, imgHeight], setSize] = useState([0, 0]);
  const [showMagnifier, setShowMagnifier] = useState(false);
  const magnifierHeight = 200;
  const magnifierWidth = 200;
  const zoomLevel = 2;

  return (
    <div className="overview-modal">
      <div
        className="modal-image-container"
        role="button"
        tabIndex={0}
        onKeyDown={() => changeModalStatus(false)}
        onClick={() => changeModalStatus(false)}
      >
        <img
          src={photo}
          className="overview-modal-image"
          onMouseEnter={(e) => {
            const elem = e.currentTarget;
            const { width, height } = elem.getBoundingClientRect();
            setSize([width, height]);
            setShowMagnifier(true);
          }}
          onMouseMove={(e) => {
            const elem = e.currentTarget;
            const { top, left } = elem.getBoundingClientRect();

            const newX = e.pageX - left - window.pageXOffset;
            const newY = e.pageY - top - window.pageYOffset;
            setXY([newX, newY]);
          }}
          onMouseLeave={() => {
            setShowMagnifier(false);
          }}
          alt="img"
        />
      </div>

      <div
        className="modal-magnifier"
        style={{
          display: showMagnifier ? '' : 'none',
          position: 'absolute',
          borderRadius: '50%',
          pointerEvents: 'none',
          cursor: 'none',

          height: `${magnifierHeight}px`,
          width: `${magnifierWidth}px`,

          top: `${y - magnifierHeight / 2}px`,
          left: `${x - magnifierWidth / 2}px`,
          opacity: '1',
          border: '1px solid lightgray',
          backgroundColor: 'white',
          backgroundImage: `url('${photo}')`,
          backgroundRepeat: 'no-repeat',

          backgroundSize: `${imgWidth * zoomLevel}px ${
            imgHeight * zoomLevel
          }px`,

          backgroundPositionX: `${-x * zoomLevel + magnifierWidth / 2}px`,
          backgroundPositionY: `${-y * zoomLevel + magnifierHeight / 2}px`,
        }}
      />

    </div>
  );
};

export default ImageGalleryModal;
