import React from 'react';
import Stars from '../shared/Stars.jsx';
import StyleSelector from './StyleSelector.jsx';
import AddToCart from './AddToCart.jsx';
import './ProductInformation.css';

const ProductInformation = ({ product }) => <div id='overview-productinfo-main'>
  <div className='overview-stars-container'>
    <Stars rating={3.75}/>
    <p>
      Read all reviews
    </p>
  </div>
  <div>
    <div>{product.category}</div>
    <h1>{product.name}</h1>
  </div>
  <div>{product.default_price}</div>
  <StyleSelector />
  <AddToCart />
</div>;

export default ProductInformation;
