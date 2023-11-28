import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Answer from './Answer.jsx';
import AddAnswerModal from './AddAnswerModal';
import './QandA.css';

const Question = ({
  question, setModalStatus, modalStatus, productName,
}) => {
  const [isHelpful, setIsHelpful] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [answerCount, setAnswerCount] = useState(2);

  // hanldes the 'helpful' click for each question
  const headers = { headers: { Authorization: `${process.env.TOKEN}` } };
  const helpURL = `${process.env.URL}/qa/questions/${question.question_id}/helpful`;
  const helpfulClick = (e) => {
    e.preventDefault();
    if (isHelpful) {
      return;
    }
    setIsHelpful(!isHelpful);
    axios.put(helpURL, {}, headers)
      .then((response) => console.log('help: ', response.status))
      .catch((err) => console.error(err));
  };

  // triggers the modal for answers -- REFACTOR LATER (LIFT)
  const addAnswerClick = (e) => {
    e.preventDefault();
    setModalStatus({ name: 'answer', data: `${question.question_id}` });
  };

  // useEffect to get the related answers - grabs all Answers and hits API once per question
  const answersURL = `${process.env.URL}/qa/questions/${question.question_id}/answers`;
  useEffect(() => {
    axios.get(answersURL, headers)
      .then((response) => setAnswers(response.data.results))
      .catch((err) => console.error(err));
  }, []);

  // show more answers button that increments the answers to be rendred count by 2
  const onShowMoreAnswers = (e) => {
    e.preventDefault();
    setAnswerCount(answerCount + 2);
  };

  const onCollapseAnswers = (e) => {
    e.preventDefault();
    setAnswerCount(0);
  };

  // establishes the answers that need to be rendered
  const workingAnswers = answers.slice();
  // loop throught he array and if the answer isn't from seller push, otherwise add it to the front
  const sellerFirst = [];
  workingAnswers.forEach((answer) => (answer.answerer_name === 'Seller' ? sellerFirst.unshift(answer) : sellerFirst.push(answer)));
  const renderList = sellerFirst.slice(0, answerCount);

  return (
    <div id="question">
      {modalStatus.name === 'answer' && modalStatus.data === `${question.question_id}`
        ? (
          <AddAnswerModal
            setModalStatus={setModalStatus}
            question={question.question_body}
            productName={productName}
            questionId={question.question_id}
          />
        ) : ''}
      <span>
        <span className="main-question">
          Q:
          {' '}
          {question.question_body}
          <span className="question-interactions">
            {' '}
            Helpful?
            <button type="button" onClick={helpfulClick}>
              <span className="inner-link">Yes</span>
              (
              {isHelpful
                ? question.question_helpfulness + 1
                : question.question_helpfulness}
              )
            </button>
            {' '}
            <button type="button" onClick={addAnswerClick}>
              |
              <span className="inner-link">Add Answer</span>
              {' '}
            </button>
          </span>
        </span>
      </span>
      <div id="answer">
        { answerCount === 0 || answers.length === 0 ? '' : <span className="a-tag"><b>A:</b></span>}
        <span id="A">
          {answers.length > 0
            ? renderList.map((answer) => (
              <Answer
                key={answer.answer_id}
                answer={answer}
                setModalStatus={setModalStatus}
                modalStatus={modalStatus}
              />
            ))
            : ''}
        </span>
      </div>
      { answers.length > 0 ? (
        <div>
          {answerCount < answers.length
            ? <button type="button" className="answer-button" onClick={onShowMoreAnswers}>LOAD MORE ANSWERS</button>
            : <button type="button" className="answer-button" onClick={onCollapseAnswers}>COLLAPSE ANSWERS</button>}
        </div>
      ) : ''}
    </div>
  );
};

export default Question;
