import React, { useState } from 'react';
import axios from 'axios';

const Answer = ({ answer }) => {
  const [report, setReport] = useState(false);
  const [helpful, setHelpful] = useState(false);

  const headers = { headers: { Authorization: `${process.env.TOKEN}` } };

  // TO DO:
  // PHOTOS??
  // Seller sort of answers??

  // converts raw answer.date data into proper format: month, dd, yyyy
  const convertDate = () => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const d = new Date(answer.date);
    const month = months[d.getMonth()];
    const day = d.getDate();
    const year = d.getFullYear();
    const date = `${month} ${day}, ${year}`;
    return date;
  };

  // handles a click on 'report' for each answer
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

  // handles the 'helpful' click for each answer
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
    <div>
      <div className="answer-body">
        { answer.body ? <p>A: {answer.body}</p> : ''}
      </div>
      <span>
        by {answer.answerer_name}, {convertDate()} |
         Helpful? <a onClick={onHelpfulClick}>Yes
         ({helpful ? answer.helpfulness + 1 : answer.helpfulness})</a> |
          <a onClick={onReportClick}>{report ? 'Reported' : 'Report'}</a>
      </span>
    </div>
  );
};

export default Answer;
