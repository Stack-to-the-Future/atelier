import React from 'react';

const QuestionFooter = ({
  answerCount, answers, onShowMoreAnswers, onCollapseAnswers,
}) => (
  <div>
    {answerCount < answers.length
      ? <button type="button" className="answer-button" onClick={onShowMoreAnswers}>LOAD MORE ANSWERS</button>
      : <button type="button" className="answer-button" onClick={onCollapseAnswers}>COLLAPSE ANSWERS</button>}
  </div>
);

export default QuestionFooter;
