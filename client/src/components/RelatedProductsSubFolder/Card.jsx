import React, {} from 'react';
import './RelPro.css';

const Card = ({ product }) => (
  <button
    type="button"
    className="card-button"
    style={{
      marginLeft: 15, marginBottom: 15, backgroundColor: 'lightbrown', padding: 25,
    } }>⭐️
      <br/>
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
    </button>

);

export default Card;
