import React, { useState } from 'react';
import Card from './Card.jsx';
import './RelPro.css';

const Carousel = ({
  setModalStatus, setCompaired, setProductInfo, gallery, setOutFits, icon,
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
          key={`${product.id}, ${product.name}`}
          product={product}
          gallery={gallery}
          setModalStatus={setModalStatus}
          setCompaired={setCompaired}
          setOutFits={setOutFits}
          setProductInfo={setProductInfo}
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
