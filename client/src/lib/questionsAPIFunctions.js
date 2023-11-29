const axios = require('axios');

module.exports = {
  getQuestions: (params) => axios({
    method: 'GET',
    url: '/qa/questions/',
    params,
  }),

  getQuestionAnswers: (id, params) => axios({
    method: 'GET',
    url: `/qa/questions/${id}/answers`,
    params,
  }),

  addQuestion: (data) => axios({
    method: 'POST',
    url: '/qa/questions',
    data,
  }),

  addAnswer: (id, data) => axios({
    method: 'POST',
    url: `/qa/questions/${id}/answers`,
    data,
  }),

  addQuestionHelpful: (id) => axios({
    method: 'PUT',
    url: `/qa/questions/${id}/helpful`,
  }),

  addAnswerHelpful: (id) => axios({
    method: 'PUT',
    url: `/qa/answers/${id}/helpful`,
  }),

  reportQuestion: (id) => axios({
    method: 'PUT',
    url: `/qa/questions/${id}/report`,
  }),

  reportAnswer: (id) => axios({
    method: 'PUT',
    url: `/qa/answers/${id}/report`,
  }),
};
