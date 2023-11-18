import React from 'react';
import Stars from '../shared/Stars.jsx';
import StyleSelector from './StyleSelector.jsx';
import AddToCart from './AddToCart.jsx';
import './ProductInformation.css';

const ProductInformation = ({ product }) => <div id='overview-productinfo-main'>
  <Stars num={3.75}/>
  <div>{product.category}</div>
  <h1>{product.name}</h1>
  <div>{product.default_price}</div>
  <StyleSelector />
  <AddToCart />
</div>;

export default ProductInformation;
