import React, { useState } from 'react';
import questionsAPIFunctions from '../../lib/questionsAPIFunctions.js';
import { convertDate } from '../../lib/helpers.js';
import './QandA.css';

const Answer = ({ answer }) => {
  const [report, setReport] = useState(false);
  const [helpful, setHelpful] = useState(false);

  const onReportClick = (e) => {
    e.preventDefault();
    if (report) {
      return;
    }
    setReport(true);
    questionsAPIFunctions.reportAnswer(answer.answer_id)
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  };

  const onHelpfulClick = (e) => {
    e.preventDefault();
    if (helpful) {
      return;
    }
    setHelpful(true);
    questionsAPIFunctions.addAnswerHelpful(answer.answer_id)
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  };

  return (
    <div data-testid="answer">
      <span className="answer-body">
        {answer.body ? (
          <p>
            {' '}
            {answer.body}
          </p>
        ) : ''}
      </span>
      <span className="answer-photos">
        {answer.photos.map((photo) => <img className="answer-photo" src={photo.url} alt="answer" key={photo.id} />)}
      </span>
      <div className="answer-footer">
        by
        {' '}
        {answer.answerer_name === 'Seller' ? <b>Seller</b> : answer.answerer_name}
        ,
        {' '}
        {convertDate(answer.date)}
        {' '}
        |
        Helpful?
        {' '}
        <button type="button" onClick={onHelpfulClick} data-testid="answer-helpful">
          <span className="inner-link">Yes</span>
          (
          {helpful ? answer.helpfulness + 1 : answer.helpfulness}
          )
        </button>
        {' '}
        |
        <button type="button" className="inner-link" data-testid="answer-report" onClick={onReportClick}>{report ? 'Reported' : 'Report'}</button>
      </div>
    </div>
  );
};

export default Answer;
