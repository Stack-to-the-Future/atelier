const axios = require('axios');

module.exports = {
  getProducts: () => axios({
    method: 'GET',
    url: '/products',
  }),

  getRatings: (id) => axios({
    method: 'GET',
    url: `/reviews/meta/${id}`,
  }),

  getProduct: (id) => axios({
    method: 'GET',
    url: `/products/${id}`,
  }),

  getStyles: (id) => axios({
    method: 'GET',
    url: `/products/${id}/styles`,
  }),

  getRelatedProducts: (id) => axios({
    method: 'GET',
    url: `/products/${id}/related`,
  }),
};
