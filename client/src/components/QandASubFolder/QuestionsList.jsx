import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Question from './Question.jsx';

const QuestionsList = () => {
  const [questions, setQuestions] = useState([]);

  const headers = { headers: { Authorization: `${process.env.TOKEN}` } };

  // this is a temp value to work from = there are questions and answers associated with this id
  const tempProductID = 40348;

  // the actual product ID I will use
  // const actualProductID = 40346;

  useEffect(() => {
    axios.get(`${process.env.URL}qa/questions/?product_id=${tempProductID}`, headers)
      .then((response) => setQuestions(response.data.results))
      .catch((err) => console.error(err));
  }, []);

  // console.log('questions: ', questions);
  return (
    <div>
      {questions.length > 0 ? questions.map((question) => <Question key={question.question_id} question={question}/>) : ''}
    </div>
  );
};

export default QuestionsList;
