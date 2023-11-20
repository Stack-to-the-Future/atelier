import React, { useState } from 'react';
import Card from './Card.jsx';

const Carousel = ({ relatedProducts, photo }) => {
  const length = 3;
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState([...relatedProducts.slice(0, length)]);

  const scroll = (direction) => {
    const newIndex = index + direction;
    if (newIndex < 0) {
      setIndex(relatedProducts.length - 1);
    } else if (newIndex >= relatedProducts.length) {
      setIndex(0);
    } else {
      setIndex(newIndex);
    }

    let copy = relatedProducts.slice(index, index + length);
    if (copy.length < length) {
      copy = copy.concat(relatedProducts.slice(0, length - copy.length));
    }
    setDisplayed([...copy]);
  };

  return (
    <div id='rel-prod-carousel'>
      <button onClick={() => scroll(-1)}><h4>◀︎ BACK</h4></button>
          {
            displayed.map((product, idx) => (
                <Card key={idx} product={product} photo={photo}/>
            ))
          }
        <button onClick={() => scroll(+1)}><h4>NEXT ▶︎</h4></button>
    </div>
  );
};

export default Carousel;
