import React from "react";
import Stars from "../shared/Stars.jsx";
import StyleSelector from "./StyleSelector.jsx";
import AddToCart from "./AddToCart.jsx";
import "./Overview.css";

const ProductInformation = ({
  product,
  styles,
  currentStyle,
  setCurrentStyle,
}) => (
  <div id="overview-productinfo-main">
    <div className="overview-stars-container">
      <div className="overview-stars-left">
        <Stars rating={3.75} />
      </div>
      <a className="overview-reviews-link" href="#ratrev">
        Read all reviews
      </a>
    </div>
    <div>
      <div>{product.category}</div>
      <h1 className="overview-product-title">{product.name}</h1>
    </div>
    <div className="overview-product-price">${product.default_price}</div>
    <StyleSelector
      styles={styles}
      currentStyle={currentStyle}
      setCurrentStyle={setCurrentStyle}
    />
    <AddToCart skus={styles[currentStyle] ? styles[currentStyle].skus : {}} />
  </div>
);
export default ProductInformation;
