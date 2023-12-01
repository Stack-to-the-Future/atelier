import React, { useState, useEffect } from 'react';
import productAPIFunctions from '../../lib/productAPIFunctions';
import Stars from '../shared/Stars.jsx';
import './RelPro.css';

const Card = ({
  product, handleCompaired, handleModalStatus,
  handleOutFitList, getMainProduct, icon, gallery,
}) => {
  const [singleProductRatings, setSingleProductRatings] = useState({});
  const fetchProductCardRatings = () => {
    productAPIFunctions.getRatings(product.id)
      .then((data) => { setSingleProductRatings(data.data.ratings); })
      .catch((err) => console.error(err));
  };
  const handleButtonClick = () => {
    if (icon === '*') {
      const temp = { name: 'compare', data: '' };
      handleModalStatus(temp);
      handleCompaired(product);
    } else {
      const deleted = gallery.filter((obj) => obj.id !== product.id);
      handleOutFitList([...deleted]);
    }
  };

  useEffect(() => {
    fetchProductCardRatings();
  }, []);

  return (
    <div
      className="all-cards"
      data-testid="cardTest"
    >
      { (icon === '*')
        ? <button className="card-button" type="button" onClick={() => { handleButtonClick(); }}>⭐️</button>
        : <button className="card-button" type="button" onClick={() => { handleButtonClick(); }}>✖️</button>}
      <button
        className={(icon === '*') ? 'product-card' : 'outFit-card'}
        type="button"
        onClick={() => getMainProduct(product.id)}
      >
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
        <h4 className="prod-reviews"><Stars ratings={singleProductRatings} /></h4>
      </button>
    </div>

  );
};

export default Card;
