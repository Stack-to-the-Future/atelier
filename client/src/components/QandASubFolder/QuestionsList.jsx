import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Question from './Question.jsx';
import AddQuestionModal from './AddQuestionModal.jsx';
import './QandA.css';

const QuestionsList = ({
  searchTerm, setModalStatus, modalStatus, productName, productId,
}) => {
  const [questions, setQuestions] = useState([]);
  const [numOfQuestions, setNumOfQuestions] = useState(2);

  const headers = { headers: { Authorization: `${process.env.TOKEN}` } };

  // triggers the modal for questions
  const onAddQuestionClick = (e) => {
    e.preventDefault();
    setModalStatus({ name: 'question' });
  };

  // grabs ALL of the questions from the server and stores them as state
  const questionCount = 1000;
  useEffect(() => {
    axios.get(`${process.env.URL}/qa/questions/?count=${questionCount}&product_id=${productId}`, headers)
      .then((response) => setQuestions(response.data.results))
      .catch((err) => console.error(err));
  }, [productId]);

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
      {modalStatus.name === 'question'
        ? (
          <AddQuestionModal
            setModalStatus={setModalStatus}
            productName={productName}
          />
        )
        : ''}
      <div className="questionlist">
        {questions.length > 0
          ? filteredQuestions.map((q) => (
            <Question
              key={q.question_id}
              question={q}
              setModalStatus={setModalStatus}
              modalStatus={modalStatus}
              productName={productName}
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
