import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Answer from './Answer.jsx';

const Question = ({ question }) => {
  const [isHelpful, setIsHelpful] = useState(false);
  const [answers, setAnswers] = useState([]);

  // STILL TO DO:
  // ONLY LOAD TWO ANSWERS AT A TIME??

  // hanldes the 'helpful' click for each question
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

  // triggers the modal for answers - Modal functionality to be added!
  const addAnswerClick = (e) => {
    e.preventDefault();
    alert('modal to be added');
  };

  // useEffect to get the related answers
  // at the moment I'm getting all the answers, I only need two until the
  // 'Load More Answers' button is clicked!
  const answersURL = `${process.env.URL}/qa/questions/${question.question_id}/answers`;
  // useEffect(() => {
  //   axios.get(answersURL, headers)
  //     .then((response) => setAnswers(response.data.results))
  //     .catch((err) => console.error(err));
  // }, []);

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
          {answers.length > 0 ? answers.map((answer) => <Answer key={answer.answer_id} answer={answer}/>) : ''}
      <div>
        <button>Load More Answers</button>
      </div>
    </div>
  );
};

export default Question;
