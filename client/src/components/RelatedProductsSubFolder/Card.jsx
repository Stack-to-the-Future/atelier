import React from 'react';
import './RelPro.css';

const Card = ({
  product, handleCompaired, handleModalStatus, handleProductInfo,
  handleOutFitList, getMainProduct, icon, gallery,
}) => {
  const handleButtonClick = () => {
    if (icon === '*') {
      handleModalStatus({ name: 'compare' });
      handleCompaired(product);
    } else {
      const deleted = gallery.filter((obj) => obj.id !== product.id);
      handleOutFitList([...deleted]);
    }
  };

  // change Main product
  // const changeMainProd = () => {
  //   getMainProduct(product.id);
  // };

  return (
    <div
      className="all-cards"
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
        {/* {'Subject to change once I have drilled star reviews down here'} */}
        <h4 className="prod-reviews">*****</h4>
      </button>
    </div>

  );
};

export default Card;
