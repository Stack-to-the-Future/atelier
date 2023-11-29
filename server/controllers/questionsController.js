const axios = require('axios');
require('dotenv').config();

const baseUrl = process.env.URL;
const token = process.env.TOKEN;
const headers = { Authorization: token };

module.exports = {
  getQuestions: (req, res) => {
    const params = req.query;

    axios({
      method: 'GET',
      url: `${baseUrl}/qa/questions/`,
      headers,
      params,
    })
      .then((response) => res.status(200).json(response.data))
      .catch((err) => {
        console.log(err);
        res.sendStatus(500);
      });
  },

  getQuestionAnswers: (req, res) => {
    const { id } = req.params;
    const params = req.query;

    axios({
      method: 'GET',
      url: `${baseUrl}/qa/questions/${id}/answers`,
      headers,
      params,
    })
      .then((response) => res.status(200).json(response.data))
      .catch((err) => {
        console.log(err);
        res.sendStatus(500);
      });
  },

  addQuestion: (req, res) => {
    const { body } = req;

    axios({
      method: 'POST',
      url: `${baseUrl}/qa/questions`,
      headers,
      data: body,
    })
      .then((response) => res.status(201).json(response.data))
      .catch((err) => {
        console.log(err);
        res.sendStatus(500);
      });
  },

  addAnswer: (req, res) => {
    const { id } = req.params;
    const { body } = req;

    axios({
      method: 'POST',
      url: `${baseUrl}/qa/questions/${id}/answers`,
      headers,
      data: body,
    })
      .then((response) => res.status(201).json(response.data))
      .catch((err) => {
        console.log(err);
        res.sendStatus(500);
      });
  },

  addQuestionHelpful: (req, res) => {
    const { id } = req.params;

    axios({
      method: 'PUT',
      url: `${baseUrl}/qa/questions/${id}/helpful`,
      headers,
    })
      .then(() => res.statusStatus(204))
      .catch((err) => {
        console.log(err);
        res.sendStatus(500);
      });
  },

  addAnswerHelpful: (req, res) => {
    const { id } = req.params;

    axios({
      method: 'PUT',
      url: `${baseUrl}/qa/answers/${id}/helpful`,
      headers,
    })
      .then(() => res.statusStatus(204))
      .catch((err) => {
        console.log(err);
        res.sendStatus(500);
      });
  },

  reportQuestion: (req, res) => {
    const { id } = req.params;

    axios({
      method: 'PUT',
      url: `${baseUrl}/qa/questions/${id}/report`,
      headers,
    })
      .then(() => res.statusStatus(204))
      .catch((err) => {
        console.log(err);
        res.sendStatus(500);
      });
  },

  reportAnswer: (req, res) => {
    const { id } = req.params;

    axios({
      method: 'PUT',
      url: `${baseUrl}/qa/answers/${id}/report`,
      headers,
    })
      .then(() => res.statusStatus(204))
      .catch((err) => {
        console.log(err);
        res.sendStatus(500);
      });
  },
};
