import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Answer from './Answer.jsx';
import AddAnswerModal from './AddAnswerModal.jsx';
import QuestionHeader from './QuestionHeader.jsx';
import QuestionFooter from './QuestionFooter.jsx';
import './QandA.css';

const Question = ({
  question, setModalStatus, modalStatus, productName,
}) => {
  const [isHelpful, setIsHelpful] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [answerCount, setAnswerCount] = useState(2);

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

  const addAnswerClick = (e) => {
    e.preventDefault();
    setModalStatus({ name: 'answer', data: `${question.question_id}` });
  };

  const answersURL = `${process.env.URL}/qa/questions/${question.question_id}/answers`;
  useEffect(() => {
    axios.get(answersURL, headers)
      .then((response) => setAnswers(response.data.results))
      .catch((err) => console.error(err));
  }, []);

  const onShowMoreAnswers = (e) => {
    e.preventDefault();
    setAnswerCount(answerCount + 2);
  };

  const onCollapseAnswers = (e) => {
    e.preventDefault();
    setAnswerCount(0);
  };

  const workingAnswers = answers.slice();
  const sellerFirst = [];
  workingAnswers.forEach((answer) => (answer.answerer_name === 'Seller' ? sellerFirst.unshift(answer) : sellerFirst.push(answer)));
  const renderList = sellerFirst.slice(0, answerCount);

  return (
    <div id="question" data-testid="question">
      {modalStatus.name === 'answer' && modalStatus.data === `${question.question_id}`
        ? (
          <AddAnswerModal
            setModalStatus={setModalStatus}
            question={question.question_body}
            productName={productName}
            questionId={question.question_id}
          />
        ) : ''}
      <QuestionHeader
        question={question}
        helpfulClick={helpfulClick}
        isHelpful={isHelpful}
        addAnswerClick={addAnswerClick}
      />
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
        <QuestionFooter
          answerCount={answerCount}
          answers={answers}
          onShowMoreAnswers={onShowMoreAnswers}
          onCollapseAnswers={onCollapseAnswers}
        />
      ) : ''}
    </div>
  );
};

export default Question;
