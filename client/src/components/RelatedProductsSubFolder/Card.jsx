import React, {} from 'react';
import './RelPro.css';

const Card = ({
  product, setModalStatus, setCompaired, setProductInfo, setOutFits, icon, gallery,
}) => {
  const handleButtonClick = (e) => {
    e.preventDefault();
    if (icon === '*') {
      setModalStatus({ name: 'compare' });
      setCompaired(product);
    } else {
      const deleted = gallery.filter((outfit) => outfit !== product);
      setOutFits([...deleted]);
    }
  };
  // change Main product
  const changeMainProd = (e) => {
    e.preventDefault();
    setProductInfo({ ...product });
  };

  return (
    <form
      className="all-cards"
      type="submit"
    >
      { (icon === '*')
        ? <button className="card-button" type="submit" onClick={(e) => { handleButtonClick(e); }}>⭐️</button>
        : <button className="card-button" type="submit" onClick={(e) => { handleButtonClick(e); }}>✖️</button>}
      <button className={(icon === '*') ? 'product-card' : 'outFit-card'} type="submit" onClick={(e) => { changeMainProd(e); }}>
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
        <h4 className="prod-reviews">*****</h4>
      </button>
    </form>

  );
};

export default Card;
