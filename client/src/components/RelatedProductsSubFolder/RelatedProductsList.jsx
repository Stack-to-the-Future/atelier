import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import Card from './Card.jsx';
import Carousel from './Carousel.jsx';

const RelatedProductsList = ({ products }) => {
  const [photo, setPhoto] = useState('');
  const [relatedProductsId, setRelatedProductsId] = useState([]);

  // const headers = { headers: { Authorization: process.env.TOKEN } };
  const options = { headers: { Authorization: process.env.TOKEN } };
  useEffect(() => {
    console.log('useEffect');
    axios.get(`${process.env.URL}/products/40346/related`, options)
      .then((response) => {
        const arr = response.data;
        setRelatedProductsId([...arr]);
      })
      .catch((err) => console.log(err));
    // axios.get(`${process.env.URL}/products/${product.id}/styles`, options)
    axios.get(`${process.env.URL}/products/40346/styles`, options)
      .then((data) => {
        setPhoto(data.data.results[0].photos[0].thumbnail_url);
        console.log(data.data.results[0].photos);
      })
      .catch((err) => console.log(err));
  }, []);

  const getRelatedProducts = () => products.filter((p) => relatedProductsId.includes(p.id));

  return (
    <div>
      <h5>RELATED PRODUCTS</h5>
        <Carousel relatedProducts={getRelatedProducts()} photo={photo}/>
    </div>
  );
};
// products.filter((p) => relatedProductsId.includes(p.id))
export default RelatedProductsList;
