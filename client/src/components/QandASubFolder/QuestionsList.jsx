import React, { useState, useEffect } from 'react';
import questionsAPIFunctions from '../../lib/questionsAPIFunctions.js';
import Question from './Question.jsx';
import AddQuestionModal from './AddQuestionModal.jsx';
import './QandA.css';

const QuestionsList = ({
  searchTerm, setModalStatus, modalStatus, productName, productId,
}) => {
  const [questions, setQuestions] = useState([]);
  const [numOfQuestions, setNumOfQuestions] = useState(2);

  const questionCount = 1000;
  const params = {
    count: questionCount,
    product_id: productId,
  };

  const renderedQuestions = questions.slice(0, numOfQuestions);
  const filterFunc = (term, q) => q.question_body.toLowerCase().includes(term.toLowerCase());
  const filteredQuestions = renderedQuestions.filter((q) => filterFunc(searchTerm, q));

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } = document.getElementById('scrollable');
      if (scrollTop + clientHeight >= scrollHeight - 120) {
        setTimeout(() => {
          setNumOfQuestions(numOfQuestions + 2);
        }, 300);
      }
    };
    const target = document.getElementById('scrollableDiv');
    target.addEventListener('scroll', handleScroll);
    // document.getElementById('scrollableDiv').addEventListener('scroll', handleScroll);
    return () => {
      target.removeEventListener('scroll', handleScroll);
    };
  }, [filteredQuestions]);

  const onAddQuestionClick = (e) => {
    e.preventDefault();
    setModalStatus({ name: 'question' });
  };

  useEffect(() => {
    questionsAPIFunctions.getQuestions(params)
      .then((response) => setQuestions(response.data.results))
      .then(() => setNumOfQuestions(2))
      .catch((err) => console.error(err));
  }, [productId]);

  return (
    <div id="scrollable" data-testid="question-list-container">
      {modalStatus.name === 'question'
        && (
          <AddQuestionModal
            setModalStatus={setModalStatus}
            productName={productName}
            productId={productId}
          />
        )}
      <div id="scrollableDiv" className="questionlist">
        {questions.length > 0
          && filteredQuestions.map((q) => (
            <Question
              key={q.question_id}
              question={q}
              setModalStatus={setModalStatus}
              modalStatus={modalStatus}
              productName={productName}
            />
          ))}
      </div>
      <div>
        <span>
          <button type="button" className="list-bottom-buttons" data-testid="add-question-button" onClick={onAddQuestionClick}>ADD A QUESTION +</button>
        </span>
      </div>
    </div>
  );
};

export default QuestionsList;
