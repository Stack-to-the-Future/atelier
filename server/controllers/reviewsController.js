const axios = require('axios');
require('dotenv').config();

const baseUrl = process.env.URL;
const token = process.env.TOKEN;

module.exports = {
  getMetadata: (req, res) => {
    const { id } = req.params;
    axios({
      method: 'GET',
      url: `${baseUrl}/reviews/meta/`,
      params: { product_id: id },
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
};
