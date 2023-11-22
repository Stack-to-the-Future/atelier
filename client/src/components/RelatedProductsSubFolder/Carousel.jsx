import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card.jsx';

const Carousel = ({ relatedProducts }) => {
  const length = 3;
  const [index, setIndex] = useState(0);
  const [toDisplay, setToDisplay] = useState([]);
  const options = { Authorization: process.env.TOKEN };

  const scroll = (direction) => {
    const newIndex = index + direction;
    setIndex(newIndex);
  };

  useEffect(() => {
    const getPhotos = () => {
      const promises = relatedProducts.map((product) => axios({
        method: 'GET',
        url: `${process.env.URL}/products/${product.id}/styles`,
        headers: options,
      }).then((response) => {
        const { data } = response;
        return {
          ...product,
          photo: data.results[0].photos[0].thumbnail_url,
        };
      }));

      Promise.all(promises)
        .then((results) => {
          setToDisplay(results);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    };

    getPhotos();
  }, [relatedProducts]);

  return (
    <div id="rel-prod-carousel">
      {index > 0 ? (
        <button onClick={() => scroll(-1)}>
          <h4>◀︎ BACK</h4>
        </button>
      ) : (
        <div></div>
      )}
      {toDisplay.slice(index, index + length).map((product, idx) => (
        <Card
          key={idx}
          product={product}
          productKey={Object.keys(product)[0]}
        />
      ))}
      {index < relatedProducts.length - length ? (
        <button onClick={() => scroll(+1)}>
          <h4>NEXT ▶︎</h4>
        </button>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Carousel;
