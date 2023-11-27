import React from 'react';
import Stars from '../shared/Stars.jsx';
import StyleSelector from './StyleSelector.jsx';
import AddToCart from './AddToCart.jsx';
import './Overview.css';

const ProductInformation = ({
  product,
  styles,
  currentStyle,
  setCurrentStyle,
  ratings,
}) => (
  <div id="overview-productinfo-main">
    <div className="overview-product-stars">
      <div className="overview-stars-container">
        <Stars ratings={ratings} />
      </div>
      <a className="overview-reviews-link" href="#ratrev">
        Read all reviews
      </a>
    </div>
    <div className="overview-title-container">
      <p className="overview-category">{product.category}</p>
      <h1 className="overview-product-title">{product.name}</h1>
      <p>
        $
        {product.default_price}
      </p>
    </div>
    <StyleSelector
      styles={styles}
      currentStyle={currentStyle}
      setCurrentStyle={setCurrentStyle}
    />
    <AddToCart skus={styles[currentStyle] ? styles[currentStyle].skus : {}} />
  </div>
);
export default ProductInformation;
