import React from 'react';
import './Overview.css';

const StyleSelector = ({
  styles, changeCurrentStyle, currentStyle,
}) => (
  <div className="overview-styles-container">
    <div className="overview-style-title">
      <b> STYLE &gt; </b>
      {' '}
      {styles[currentStyle] ? styles[currentStyle].name : ''}
    </div>
    <div className="overview-styles-images">
      {styles.length ? (
        styles.slice(0, 8).map((style, idx) => (
          <button
            type="button"
            className="overview-styles-image-container"
            onClick={() => {
              changeCurrentStyle(idx);
            }}
            key={style.name}
          >
            <img
              className={`overview-styles-image ${idx === currentStyle
                ? 'selected' : ''}`}
              src={style.photos[0].thumbnail_url}
              alt="style"
            />
          </button>
        ))
      ) : (
        <div className="overview-styles-image-container" />
      )}
    </div>
  </div>
);
export default StyleSelector;
