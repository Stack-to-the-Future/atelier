import React, {} from 'react';
import './RelPro.css';

const Card = ({
  product, setModalStatus, setCompaired, setProductInfo, icon,
}) => {
  const handleButtonClick = () => {
    setModalStatus({ name: 'compare' });
    setCompaired(product);
    setProductInfo({ ...product });
  };
  // change Main product
  const changeMainProd = () => {
    setProductInfo(product);
  };

  return (
    <button
      className="product-card"
      type="button"
      onClick={() => { changeMainProd(); }}
    >
      <button className="card-button" type="button" onClick={() => { handleButtonClick(); }}>{icon}</button>
      <br />
      <img
        src={product.photo}
        width="100"
        height="150"
        alt="product"
        className="prod-image"
      />
      <h4>{product.category}</h4>
      <br />
      <h4 className="prod-name">{product.name}</h4>
      <h4>
        $
        {product.default_price}
      </h4>
    </button>

  );
};

export default Card;
