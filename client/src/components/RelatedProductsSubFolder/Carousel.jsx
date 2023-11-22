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

/*

      const requests = relatedProducts.map((prod) =>
      axios.get(`${process.env.URL}/products/${relatedProducts[i].id}/styles`, options));
      axios.all(requests).then((responses) =>
      const data = [];
      responses.forEach(response) => data.push(response)
      setDisplayedProducts([...displayedProducts, data]));

*/

/*
 // for (let i = 0; i < relatedProducts.length; i += 1) {
    //   axios.get(`${process.env.URL}/products/${relatedProducts[i].id}/styles`, options)
    //     .then((data) => {
    //       const prod = relatedProducts[i].id;
    //       const temp = {};
    //       temp[prod] = {
    //         name: relatedProducts[i].name,
    //         category: relatedProducts[i].category,
    //         price: relatedProducts[i].default_price,
    //         photo: data.data.results[0].photos[0].thumbnail_url,
    //       };
    //       console.log('.......', temp);
    //       setDisplayedProducts([...displayedProducts, temp]);
    //     })
    //     .catch((err) => console.log(err));
    // }
*/

/*

  // const getStyle = (idx) => {
  //   axios.get(`${process.env.URL}/products/${relatedProducts[idx].id}/styles`, options)
  //     .then((data) => {
  //       const prod = relatedProducts[idx].id;
  //       const temp = {};
  //       temp[prod] = {
  //         name: relatedProducts[idx].name,
  //         category: relatedProducts[idx].category,
  //         price: relatedProducts[idx].default_price,
  //         photo: data.data.results[0].photos[0].thumbnail_url,
  //       };
  //       console.log('.......', temp);
  //       setDisplayedProducts([...displayedProducts, temp]);
  //     })
  //     .catch((err) => console.log(err));
  // };

*/
