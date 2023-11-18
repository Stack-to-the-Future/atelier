import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card.jsx';

const RelatedProductsList = () => {
  const [products, setProducts] = useState([]);
  // const [product, setProduct] = useState({});
  const [relatedProductsId, setRelatedProductsId] = useState([]);
  // const [category, setCategory] = useState('');
  // const [name, setName] = useState('');
  // const [price, setPrice] = useState('');
  // const [ID, setID] = useState(0);
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
      .then((data) => {
        setRelatedProductsId(data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h5>RELATED PRODUCTS</h5>
      <button><h4>◀︎</h4></button>
      <ul>
          {
            products.filter((p) => relatedProductsId.includes(p.id))
              .map((product, index) => (
                <li key={index}>
                  <Card product={product} relatedProductsId={relatedProductsId} />
                  </li>
              ))
          }
        </ul>
        <button><h4>◀︎</h4></button>

    </div>
  );
};
//                  // category={category} name={name} price={price} ID={ID} />
export default RelatedProductsList;
