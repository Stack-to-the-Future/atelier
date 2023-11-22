import React, { useState } from 'react';
import axios from 'axios';
import Card from './Card.jsx';

const Carousel = ({ relatedProducts }) => {
  const length = 3;
  const [index, setIndex] = useState(0);
  const [displayedProducts, setDisplayedProducts] = useState([]);
  // const [currentProducts, setCurrentProducts] = useState([relatedProducts]);
  const options = { headers: { Authorization: process.env.TOKEN } };

  const scroll = (direction) => {
    const newIndex = index + direction;
    setIndex(newIndex);
    // console.log('.......', temp);

    for (let i = 0; i < relatedProducts.length; i += 1) {
      axios.get(`${process.env.URL}/products/${relatedProducts[i].id}/styles`, options)
        .then((data) => {
          const prod = relatedProducts[i].id;
          // console.log(prod);
          const temp = {};
          temp[prod] = {
            name: relatedProducts[i].name,
            category: relatedProducts[i].category,
            price: relatedProducts[i].default_price,
            photo: data.data.results[0].photos[0].thumbnail_url,
          };
          console.log('.......', temp);
          setDisplayedProducts([...displayedProducts, temp]);
        })
        .catch((err) => console.log(err));
    }
  };
  console.log('.......', displayedProducts);

  return (
    <div id='rel-prod-carousel'>
     {(index >= 0) ? <button onClick={() => scroll(-1)}><h4>◀︎ BACK</h4></button> : <div></div> }
          {
            displayedProducts.slice(index, index + length).map((product, idx) => (
              <Card key={idx} product={ product } productKey={Object.keys(product)[0]} />
            ))
          }
     {index < (relatedProducts.length - length)
       ? <button onClick={() => scroll(+1)}><h4>NEXT ▶︎</h4></button>
       : <div></div> }
    </div>
  );
};

export default Carousel;

/*

<Card key={idx} product={{ ...product, photo: photos[product.id] }} />

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

*/

/*

    for (let i = 0; i < relatedProducts.length; i += 1) {
      axios.get(`${process.env.URL}/products/${relatedProducts[i].id}/styles`, options)
        .then((data) => {
          // relatedProducts[i].photo = data.data.results[0].photos;
          // setCurrentData([...relatedProducts.map
          ((product) => ({ ...product, photo: data.data.results[0].photos }))]);
          setCurrentData
          ([...currentData, { ...relatedProducts[i], photo: data.data.results[0].photos }]);
        })
        .catch((err) => console.log(err));
    }

*/

/*

              // setCurrentData([...relatedProducts.map
              ((product) => ({ ...product, photo: data.data.results[0].photos }))]);

          // setCurrentData([...relatedProducts.
          map((product) => ({ ...product, photo: data.data.results[i].photos[0] }))]);

          // setCurrentData
          ([...currentData, { ...relatedProducts[i], photo: data.data.results[0].photos[0] }]);
          // console.log('.......', data.data.results[0].photos[0].thumbnail_url)

*/
