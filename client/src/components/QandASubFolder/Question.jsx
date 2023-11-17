import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Question = ({ question }) => {
  const [isHelpful, setIsHelpful] = useState(false);

  const headers = { headers: { Authorization: `${process.env.TOKEN}` } };

  const url = `${process.env.URL}qa/questions/${question.question_id}/helpful`;

  const helpfulClick = (e) => {
    e.preventDefault();
    axios.put(url, headers)
      .then((response) => console.log('help: ', response))
      .catch((err) => console.error(err));
  };

  // in case you need to look at the question passed as prop
  // console.log('question: ', question.question_id)

  return (
    <div>
      <span>
        <span className="main-question">Q: {question.question_body}
        <span className="question-interactions"> Helpful?
        <a onClick={helpfulClick}>Yes(#)</a>
        <a>Add Answer</a>
        </span>
        </span>
      </span>
      <div>
        <h4>
          Answers go here!
        </h4>
      </div>
    </div>
  );
};

export default Question;
