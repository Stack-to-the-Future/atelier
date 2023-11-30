import React, { useState } from 'react';
import questionsAPIFunctions from '../../lib/questionsAPIFunctions.js';
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

  const helpfulClick = (e) => {
    e.preventDefault();
    if (isHelpful) {
      return;
    }
    setIsHelpful(!isHelpful);
    questionsAPIFunctions.addQuestionHelpful(question.question_id)
      .then((response) => console.log('help: ', response.status))
      .catch((err) => console.error(err));
  };

  const addAnswerClick = (e) => {
    e.preventDefault();
    setModalStatus({ name: 'answer', data: `${question.question_id}` });
  };

  // useEffect(() => {
  //   const params = {
  //     count: 1000,
  //     page: 1,
  //   };
  //   questionsAPIFunctions.getQuestionAnswers(question.question_id, params)
  //     .then((response) => setAnswers(response.data.results))
  //     .catch((err) => console.error(err));
  // }, []);

  // console.log(question.answers);

  const onShowMoreAnswers = (e) => {
    e.preventDefault();
    setAnswerCount(answerCount + 2);
  };

  const onCollapseAnswers = (e) => {
    e.preventDefault();
    setAnswerCount(0);
  };

  const answerArray = [];
  // console.log(question.answers);
  const answersObj = question.answers;
  // question.answers.forEach((answer) => answerArray.push(answer));
  for (const answer in answersObj) {
    answerArray.push(answersObj[answer]);
  }
  // console.log(answerArray);
  // const workingAnswers = question.answers.slice();
  // console.log('workinganswers, ', workingAnswers);
  const sortedByHelpfulness = answerArray.sort((a, b) => {
    if (a.helpfulness > b.helpfulness) {
      return 1;
    }
    if (b.helpfulness > a.helpfulness) {
      return -1;
    }
    return 0;
  });

  const sellerFirst = [];
  sortedByHelpfulness.forEach((answer) => (answer.answerer_name === 'Seller' ? sellerFirst.unshift(answer) : sellerFirst.push(answer)));
  const renderList = sellerFirst.slice(0, answerCount);

  console.log(renderList);
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
      <div id="answer" data-testid="question-answer-container">
        { answerCount === 0 || answers.length === 0 ? '' : <span className="a-tag"><b>A:</b></span>}
        <span id="A">
          {sellerFirst.length > 0
            ? renderList.map((answer) => (
              <Answer
                key={answer.id}
                answer={answer}
                setModalStatus={setModalStatus}
                modalStatus={modalStatus}
              />
            ))
            : ''}
        </span>
      </div>
      <div data-testid="question-footer">
        {renderList !== 0 ? (
          <QuestionFooter
            answerCount={answerCount}
            answers={sellerFirst}
            onShowMoreAnswers={onShowMoreAnswers}
            onCollapseAnswers={onCollapseAnswers}
          />
        ) : ''}
      </div>
    </div>
  );
};

export default Question;
