import React, { useState } from 'react';
import axios from 'axios';

const Question = ({ question }) => {
  const [isHelpful, setIsHelpful] = useState(false);
  // const [answer, setAnswers] = useState([]);

  const headers = { headers: { Authorization: `${process.env.TOKEN}` } };
  const helpURL = `${process.env.URL}/qa/questions/${question.question_id}/helpful`;

  // triggers helpful state and sends PUT req
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

  // triggers the modal for answers - Modal functionality to be added!
  const addAnswerClick = (e) => {
    e.preventDefault();
    alert('modal to be added');
  };

  // const answersURL = ``;
  // useEffect to get the related answers
  // useEffect(() => {
  //   axios.get()
  // });

  return (
    <div>
      <span>
        <span className="main-question">Q: {question.question_body}
        <span className="question-interactions"> Helpful?
        <a onClick={helpfulClick}>Yes(
          {isHelpful ? question.question_helpfulness + 1 : question.question_helpfulness})</a>
        <a onClick={addAnswerClick}>Add Answer</a>
        </span>
        </span>
      </span>
      <div>
        <h4>
          Answers go here!
        </h4>
        <div>
          <button>Load More Answers</button>
        </div>
      </div>
    </div>
  );
};

export default Question;
