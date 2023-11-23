import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Question from './Question.jsx';
import './QandA.css';

const QuestionsList = ({ searchTerm, setModalStatus }) => {
  const [questions, setQuestions] = useState([]);
  const [numOfQuestions, setNumOfQuestions] = useState(2);

  const headers = { headers: { Authorization: `${process.env.TOKEN}` } };

  // this is a temp value to work from = there are questions and answers associated with this id
  const tempProductID = 40348;

  // the actual product ID I will use is this:
  // const actualProductID = 40346;

  // triggers the modal for questions -- REFACTOR LATER (LIFT)
  const onAddQuestionClick = (e) => {
    e.preventDefault();
    setModalStatus({ name: 'question' });
  };

  // grabs ALL of the questions from the server and stores them as state
  const questionCount = 1000;
  useEffect(() => {
    axios.get(`${process.env.URL}/qa/questions/?count=${questionCount}&product_id=${tempProductID}`, headers)
      .then((response) => setQuestions(response.data.results))
      .catch((err) => console.error(err));
  }, []);

  // on click increments the questions rendered by two
  const onLoadMoreQuestions = (e) => {
    e.preventDefault();
    setNumOfQuestions(numOfQuestions + 2);
  };

  // I need to incrementally increase the amount +2
  const renderedQuestions = questions.slice(0, numOfQuestions);
  // functions to filter terms and function to filter based on search
  const filterFunc = (term, q) => q.question_body.toLowerCase().includes(term.toLowerCase());
  const filteredQuestions = renderedQuestions.filter((q) => filterFunc(searchTerm, q));

  return (
    <div>
      <div className="questionlist">
        {questions.length > 0
          ? filteredQuestions.map((q) => (
            <Question
              key={q.question_id}
              question={q}
              setModalStatus={setModalStatus}
            />
          ))
          : ''}
      </div>
      <div>
        <span>
          {numOfQuestions < questions.length
            ? <button type="button" className="list-bottom-buttons" onClick={onLoadMoreQuestions}>MORE ANSWERED QUESTIONS</button>
            : ''}
          <button type="button" className="list-bottom-buttons" onClick={onAddQuestionClick}>ADD A QUESTION +</button>
        </span>
      </div>
    </div>
  );
};

export default QuestionsList;
