import React, {} from 'react';
import './RelPro.css';

const Card = ({ product }) => (
  <div className='product-card'style={ {
    marginLeft: 15, marginBottom: 15, backgroundColor: 'lightbrown', padding: 25,
  } }>
    <button style={ {
      marginLeft: 15, marginBottom: 15, backgroundColor: 'lightbrown', padding: 25,
    } }>⭐️  </button>
      <br />
      <img
         src={product.photo}
         width="100"
         height="150"
      />
      <br/>
      <h4>{product.category}</h4>
      <br/>
      <h4 className='prod-name'>{product.name}</h4>
      <h4>${product.default_price}</h4>
  </div>

);

export default Card;
