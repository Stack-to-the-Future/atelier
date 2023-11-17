import React from 'react';
import axios from 'axios';

const RelatedProducts = () => {
  // const headers = { headers: { Authorization: process.env.TOKEN } };
  const options = { headers: { Authorization: process.env.TOKEN } };
  const url = process.env.URL;
  const fetch = () => {
    axios.get(url, options)
      .then((data) => {
        console.log(data.data);
      })
      .catch((err) => console.log(err));
  };
  return (
        <div>
            -Testing - Related products: {fetch()};
        </div>
  );
};

export default RelatedProducts;
