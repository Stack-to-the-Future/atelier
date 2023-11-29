import React from 'react';

const QuestionHeader = ({
  question, helpfulClick, isHelpful, addAnswerClick,
}) => (
  <span>
    <span className="main-question">
      Q:
      {' '}
      {question.question_body}
      <span className="question-interactions">
        {' '}
        Helpful?
        <button type="button" data-testid="question-helpful" onClick={helpfulClick}>
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
);

export default QuestionHeader;
