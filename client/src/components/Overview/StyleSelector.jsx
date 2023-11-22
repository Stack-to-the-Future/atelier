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
        <b> STYLE &gt; </b>
        {' '}
        {styles[currentStyle] ? styles[currentStyle].name : ''}
      </div>
      <div className="overview-styles-images">
        {styles[0]
          && getArr().map((url, idx) => (url ? (
            <button
              type="button"
              className={`overview-styles-image ${idx === currentStyle ? 'selected' : ''
              }`}
              onClick={() => {
                setCurrentStyle(idx);
              }}
              key={`styles${url.slice(0, 3)}`}
            >
              <img
                src={url}
                alt={`style:${idx}`}
              />
            </button>
          ) : (
            <div className="overview-styles-image" key="styles" />
          )))}
      </div>
    </div>
  );
};
export default StyleSelector;
