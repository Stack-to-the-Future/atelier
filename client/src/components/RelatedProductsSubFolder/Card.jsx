import React, {} from 'react';
import './RelPro.css';

const Card = ({ product, productKey }) => {
  console.log('ZZZZZZZ', productKey);

  return (
    <button className='card-button' style={ {
      marginLeft: 15, marginBottom: 15, backgroundColor: 'lightbrown', padding: 25,
    } }>⭐️
      <br/>
      <img
         src={product[productKey].photo}
         width="100"
         height="150"
      />
      <br/>
      <h4>{product[productKey].category}</h4>
      <br/>
      <h4 className='prod-name'>{product[productKey].name}</h4>
      <h4>${product[productKey].price}</h4>
    </button>

  );
};

export default Card;
