import React from 'react';
import './Overview.css';

const StyleSelector = ({ styles, setCurrentStyle, currentStyle }) => {
  const getArr = () => {
    const arr = [];
    for (let i = 0; i < 8; i += 1) {
      arr[i] = styles[i] ? styles[i].photos[0].thumbnail_url : '';
    }
    return arr;
  };
  return (
    <div className="overview-styles-container">
      <div className="overview-style-title">
        <b> STYLE &gt; </b>{' '}
        {styles[currentStyle] ? styles[currentStyle].name : ''}
      </div>
      <div className="overview-styles-images">
        {styles[0]
          && getArr().map((url, idx) => (url ? (
              <img
                className={`overview-styles-image ${idx === currentStyle ? 'selected' : ''
                }`}
                src={url}
                key={idx}
                onClick={() => {
                  setCurrentStyle(idx);
                }}
              />
          ) : (
              <div className="overview-styles-image" key={idx}></div>
          )))}
      </div>
    </div>
  );
};
export default StyleSelector;
