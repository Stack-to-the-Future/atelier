import React, { useState } from "react";
import "./Overview.css";

const AddToCart = ({ skus }) => {
  const [currentSku, setCurrentSku] = useState("");

  const getSizes = () => {
    const keys = [];

    if (JSON.stringify(skus) === "{}") {
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

    if (currentSku === "") {
      return quantities;
    }

    while (num <= skus[currentSku].quantity) {
      arr.push((num += 1));
    }

    return quantities;
  };

  return (
    <div className="overview-cart-main">
      <select
        className="overview-size-select"
        defaultValue="Select size"
        onChange={(e) => setCurrentSku(e.target.value)}
      >
        <option disabled>Select size</option>
        {getSizes().map((key) => (
          <option key={`size:${key}`} value={key}>
            {skus[key].size}
          </option>
        ))}
      </select>
      <select className="overview-quant-select">
        {currentSku !== "" &&
          getQuant().map((num) => <option key={`quant:${num}`}>{num}</option>)}
      </select>
    </div>
  );
};

export default AddToCart;
