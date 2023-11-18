import React, {} from 'react';

const Card = ({ product, photo }) => (
    <button style={ {
      marginLeft: 15, marginBottom: 15, backgroundColor: 'lightbrown', padding: 25,
    } }>⭐️
      <br/>
      <img
         src={`${photo}`}
         width="100"
         height="150"
      />
      <h3>CATEGORY</h3>
      <h4>{product.category}</h4>
      <h4>{product.name}</h4>
      <h5>{product.description}</h5>
      <h4>${product.default_price}</h4>
    </button>

);

export default Card;
