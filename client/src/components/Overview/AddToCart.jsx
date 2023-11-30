import React, { useEffect } from 'react';
import './Overview.css';

const AddToCart = ({ skus, currentSku, changeCurrentSku }) => {
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

    while (num < 15 && num < skus[currentSku].quantity) {
      quantities.push((num += 1));
    }

    return quantities;
  };

  useEffect(() => {
    const select = document.getElementById('overview-size-select');
    select.options[0].selected = true;
  }, [skus, currentSku]);

  return (
    <div data-testid="cart-main" className="overview-cart-main">
      <select
        aria-label="Size"
        data-testid="cart-select-size"
        id="overview-size-select"
        className="overview-size-select"
        placeholder="Select Size"
        defaultValue="Select Size"
        onChange={(e) => changeCurrentSku(e.target.value)}
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

      {(currentSku !== '') && (
        <select
          aria-label="Quantity"
          data-testid="cart-select-quant"
          className="overview-quant-select"
          defaultValue="1"
        >
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

      {currentSku !== ''
        && (skus[currentSku].quantity ? (
          <button
            aria-label="Add to Cart"
            data-testid="cart-add-button"
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
            aria-label="Add to Cart"
            data-testid="cart-fake-button"
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
