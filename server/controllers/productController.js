const axios = require('axios');
require('dotenv').config();

const baseUrl = process.env.URL;
const token = process.env.TOKEN;

module.exports = {
  getProducts: (req, res) => {
    axios({
      method: 'GET',
      url: `${baseUrl}/products`,
      headers: {
        Authorization: token,
      },
    })
      .then((response) => res.status(200).json(response.data))
      .catch((err) => {
        console.log(err);
        res.send(500);
      });
  },

  getProduct: (req, res) => {
    const { id } = req.params;
    axios({
      method: 'GET',
      url: `${baseUrl}/products/${id}`,
      headers: {
        Authorization: token,
      },
    })
      .then((response) => res.status(200).json(response.data))
      .catch((err) => {
        console.log(err);
        res.send(500);
      });
  },

  getProductStyles: (req, res) => {
    const { id } = req.params;
    axios({
      method: 'GET',
      url: `${baseUrl}/products/${id}/styles`,
      headers: {
        Authorization: token,
      },
    })
      .then((response) => res.status(200).json(response.data))
      .catch((err) => {
        console.log(err);
        res.send(500);
      });
  },

  getRelatedProducts: (req, res) => {
    const { id } = req.params;
    axios({
      method: 'GET',
      url: `${baseUrl}/products/${id}/related`,
      headers: {
        Authorization: token,
      },
    })
      .then((response) => res.status(200).send(response.data))
      .catch((err) => {
        console.log(err);
        res.send(500);
      });
  },
};
