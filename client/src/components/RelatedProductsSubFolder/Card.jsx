import React, {} from 'react';

const Card = ({ product }) => (
    <>
      <img
         src=""
         width="100"
         height="170"
      />
      <h3>CATEGORY</h3>
      <h4>{product.category}</h4>
      <h4>{product.name}</h4>
      <h5>{product.description}</h5>
      <h4>{product.default_price}</h4>
    </>
);

export default Card;
