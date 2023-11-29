import React, { useState } from 'react';
import Card from './Card.jsx';
import './RelPro.css';

const Carousel = ({
  handleCompaired, handleModalStatus, gallery, ratings,
  handleOutFitList, getMainProduct, icon, handleProductInfo,
}) => {
  const length = 4;
  const [index, setIndex] = useState(0);

  const scroll = (direction) => {
    const newIndex = index + direction;
    setIndex(newIndex);
  };

  return (
    <div className="rel-prod-carousel">
      {index > 0 ? (
        <button type="button" onClick={() => scroll(-1)}>
          <h4>◀︎ BACK</h4>
        </button>
      ) : (
        <div />
      )}
      {gallery.slice(index, index + length).map((product) => (
        <Card
          key={`${product.id}`}
          product={product}
          gallery={gallery}
          handleModalStatus={handleModalStatus}
          handleProductInfo={handleProductInfo}
          handleCompaired={handleCompaired}
          handleOutFitList={handleOutFitList}
          getMainProduct={getMainProduct}
          ratings={ratings}
          icon={icon}
        />
      ))}
      {index < gallery.length - length ? (
        <button type="button" onClick={() => scroll(+1)}>
          <h4>NEXT ▶︎</h4>
        </button>
      ) : (
        <div />
      )}
    </div>
  );
};

export default Carousel;
