import React from 'react';
import axios from 'axios';

// require('dotenv').config();

const RelatedProducts = () => {
  const options = { Authorization: process.env.PORT, URL: process.env.URL };
  const fetch = () => {
    axios.get(options.URL, options)
      .then((data) => {
        console.log(data);
        console.log(process.env.PORT);
      })
      .catch((err) => console.log(err));
  };
  return (
        <div>
          {console.log(process.env.PORT)}
            Testing - Related products: {fetch()};
        </div>
  );
};

export default RelatedProducts;
