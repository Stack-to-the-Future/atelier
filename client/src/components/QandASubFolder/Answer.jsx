import React, { useState } from 'react';
import axios from 'axios';
import './QandA.css';

const Answer = ({ answer }) => {
  const [report, setReport] = useState(false);
  const [helpful, setHelpful] = useState(false);

  const headers = { headers: { Authorization: `${process.env.TOKEN}` } };

  const convertDate = () => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const d = new Date(answer.date);
    const month = months[d.getMonth()];
    const day = d.getDate();
    const year = d.getFullYear();
    const date = `${month} ${day + 1}, ${year}`;
    return date;
  };

  const reportURL = `${process.env.URL}/qa/answers/${answer.answer_id}/report`;
  const onReportClick = (e) => {
    e.preventDefault();
    if (report) {
      return;
    }
    setReport(true);
    axios.put(reportURL, {}, headers)
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  };

  const helpfulURL = `${process.env.URL}/qa/answers/${answer.answer_id}/helpful`;
  const onHelpfulClick = (e) => {
    e.preventDefault();
    if (helpful) {
      return;
    }
    setHelpful(true);
    axios.put(helpfulURL, {}, headers)
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  };

  return (
    <div data-testid="answer">
      <span className="answer-body">
        { answer.body ? (
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
        {convertDate()}
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
