import React, { useState } from 'react';
import './Overview.css';

const AddToCart = ({ skus }) => {
  const [currentSku, setCurrentSku] = useState('');

  const getSizes = () => {
    const keys = [];

    if (JSON.stringify(skus) === '{}') {
      return keys;
    }

    // eslint-disable-next-line no-restricted-syntax
    for (const key of Object.keys(skus)) {
      if (Object.hasOwn(skus, key)) {
        keys.push(key);
      }
    }

    return keys;
  };

  const getQuant = () => {
    const quantities = [];
    let num = 0;

    if (currentSku === '') {
      return quantities;
    }

    while (num <= 15 && num <= skus[currentSku].quantity) {
      quantities.push((num += 1));
    }

    return quantities;
  };

  return (
    <div className="overview-cart-main">
      <select
        className="overview-size-select"
        defaultValue="Select Size"
        onChange={(e) => setCurrentSku(e.target.value)}
      >
        <option value="Select Size" disabled>
          Select Size
        </option>
        {getSizes().map((key) => (
          <option key={`size:${key}`} value={key}>
            {skus[key].size}
          </option>
        ))}
      </select>

      {currentSku !== '' && (
        <select className="overview-quant-select" defaultValue="1">
          {skus[currentSku].quantity ? (
            getQuant().map((num) => (
              <option value={num.toString()} key={`quant:${num}`}>
                {num}
              </option>
            ))
          ) : (
            <option>OUT OF STOCK</option>
          )}
        </select>
      )}

      {currentSku
        && (skus[currentSku].quantity ? (
          <button
            type="button"
            className="overview-add-button"
            onClick={() => console.log('Added!')}
          >
            <p>Add to cart</p>
            {' '}
            <p>+</p>
          </button>
        ) : (
          <button
            type="button"
            className="overview-add-button"
            onClick={() => console.log('uhoh!')}
          >
            <p>Add to cart</p>
            {' '}
            <p>+</p>
          </button>
        ))}
    </div>
  );
};

export default AddToCart;
