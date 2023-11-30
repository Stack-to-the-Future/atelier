import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import questionsAPIFunctions from '../../lib/questionsAPIFunctions.js';
import Question from './Question.jsx';
import AddQuestionModal from './AddQuestionModal.jsx';
import './QandA.css';

const QuestionsList = ({
  searchTerm, setModalStatus, modalStatus, productName, productId,
}) => {
  const [questions, setQuestions] = useState([]);
  const [numOfQuestions, setNumOfQuestions] = useState(4);

  const onAddQuestionClick = (e) => {
    e.preventDefault();
    setModalStatus({ name: 'question' });
  };

  const questionCount = 1000;
  useEffect(() => {
    const params = {
      count: questionCount,
      product_id: productId,
    };
    questionsAPIFunctions.getQuestions(params)
      .then((response) => setQuestions(response.data.results))
      .catch((err) => console.error(err));
  }, [productId]);

  // const onLoadMoreQuestions = (e) => {
  //   e.preventDefault();
  //   setNumOfQuestions(numOfQuestions + 2);
  // };

  const renderedQuestions = questions.slice(0, numOfQuestions);
  const filterFunc = (term, q) => q.question_body.toLowerCase().includes(term.toLowerCase());
  const filteredQuestions = renderedQuestions.filter((q) => filterFunc(searchTerm, q));

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
        <InfiniteScroll
          dataLength={numOfQuestions}
          next={() => setNumOfQuestions(numOfQuestions + 4)}
          hasMore={numOfQuestions < questions.length}
          loader={<p>loading more questions...</p>}
          endMessage={<p>No more questions for this product</p>}
          scrollableTarget="scrollableDiv"
        >
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
        </InfiniteScroll>
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
