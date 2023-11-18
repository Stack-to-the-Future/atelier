import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RelatedProductsList = () => {
  const [products, setProducts] = useState([]);
  const [relatedProductsId, setRelatedProductsId] = useState([]);
  // const headers = { headers: { Authorization: process.env.TOKEN } };
  const options = { headers: { Authorization: process.env.TOKEN } };
  // useEffect for when component mounts
  useEffect(() => {
    // GET all products
    axios.get(`${process.env.URL}/products`, options)
      .then((data) => {
        setProducts(data.data);
      })
      .catch((err) => console.log(err));
    // get related items
    axios.get(`${process.env.URL}/products/40346/related`, options)
      .then((related) => {
        setRelatedProductsId(related.data);
        console.log('related Items::::', relatedProductsId);
      });
  }, []);

  return (
    <div>
      <h5>RELATED PRODUCTS</h5>
      <ul>
        {
          products.filter((p) => relatedProductsId.includes(p.id))
            .map((p, index) => <li key={index}> {p.name} </li>)
        }
      </ul>
    </div>
  );
};

export default RelatedProductsList;
