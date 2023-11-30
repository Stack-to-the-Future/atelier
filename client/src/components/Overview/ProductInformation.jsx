import React, { useEffect, useState } from 'react';
import Stars from '../shared/Stars.jsx';
import StyleSelector from './StyleSelector.jsx';
import AddToCart from './AddToCart.jsx';
import './Overview.css';

const ProductInformation = ({
  product,
  styles,
  currentStyle,
  changeCurrentStyle,
  ratings,
}) => {
  const [skus, setSkus] = useState({});
  const [currentSku, setCurrentSku] = useState('');

  const changeCurrentSku = (sku) => setCurrentSku(sku);

  useEffect(() => {
    if (!styles[currentStyle]) {
      return;
    }
    setCurrentSku('');
    setSkus(styles[currentStyle].skus);
  }, [currentStyle, styles]);

  return (
    <div id="overview-productinfo-main">
      <div className="overview-product-stars">
        <div data-testid="overview-product-stars" className="overview-stars-container">
          <Stars ratings={ratings} />
        </div>
        <a className="overview-reviews-link" href="#ratrev">
          Read all reviews
        </a>
      </div>
      <div className="overview-title-container">
        <p data-testid="overview-product-category" className="overview-category">{product.category}</p>
        <h1 data-testid="overview-product-name" className="overview-product-title">{product.name}</h1>
        <p data-testid="overview-product-price">
          {`$${product.default_price}`}
        </p>
      </div>
      <StyleSelector
        styles={styles}
        currentStyle={currentStyle}
        changeCurrentStyle={changeCurrentStyle}
      />
      <AddToCart
        skus={skus}
        currentSku={currentSku}
        changeCurrentSku={changeCurrentSku}
      />
    </div>
  );
};
export default ProductInformation;
