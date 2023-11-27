import React, {} from 'react';
import './RelPro.css';

const Card = ({
  product, setModalStatus, setCompaired, setProductInfo, setOutFits, icon, gallery,
}) => {
  const handleButtonClick = () => {
    if (icon === '*') {
      setModalStatus({ name: 'compare' });
      setCompaired(product);
    } else {
      const deleted = gallery.filter((outfit) => outfit !== product);
      setOutFits([...deleted]);
    }
  };
  // change Main product
  const changeMainProd = () => {
    setProductInfo({ ...product });
  };

  return (
    <button
      className="product-card"
      type="button"
      onClick={() => { changeMainProd(); }}
    >
      { (icon === '*')
        ? <button className="card-button" type="button" onClick={() => { handleButtonClick(icon); }}>⭐️</button>
        : <button className="card-button" type="button" onClick={() => { handleButtonClick(icon); }}>✖️</button>}
      <br />
      <img
        src={product.photo}
        width="100"
        height="150"
        alt="product"
        className="prod-image"
      />
      <h4 className="prod-category">{product.category}</h4>
      <br />
      <h4 className="prod-name">{product.name}</h4>
      <h4 className="prod-price">
        $
        {product.default_price}
      </h4>
    </button>

  );
};

export default Card;
