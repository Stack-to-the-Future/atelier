import React, { useState } from 'react';

const Answer = ({ answer }) => {
  const [report, setReport] = useState(false);
  const [helpful, setHelpful] = useState(false);

  // console.log(answer);
  const onReportClick = (e) => {
    e.preventDefault();
    setReport(true);
    // NEED TO ADD THE AXIOS PUT REQUEST
  };

  const onHelpfulClick = (e) => {
    e.preventDefault();
    if (helpful) {
      return;
    }
    setHelpful(true);
  };

  // NEED TO PROPERLY FORMAT THE DATE
  console.log(Date(answer.date));

  return (
    <div>
      <div className="answer-body">
        { answer.body ? <p>A: {answer.body}</p> : ''}
      </div>
      <span>
        by {answer.answerer_name}, {answer.date} | Helpful? <a onClick={onHelpfulClick}>Yes({answer.helpfulness})</a> | <a onClick={onReportClick}>{report ? 'Reported' : 'Report'}</a>
      </span>
    </div>
  );
};

export default Answer;
