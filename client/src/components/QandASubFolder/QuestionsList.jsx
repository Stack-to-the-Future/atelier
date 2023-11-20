import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Question from './Question.jsx';

const QuestionsList = () => {
  const [questions, setQuestions] = useState([]);

  const headers = { headers: { Authorization: `${process.env.TOKEN}` } };

  // TO DO:
  // GET PROPER NUMBER OF QUESTIONS ON INITIAL API CALL

  // this is a temp value to work from = there are questions and answers associated with this id
  const tempProductID = 40348;

  // the actual product ID I will use is this:
  // const actualProductID = 40346;
  const onAddQuestionClick = (e) => {
    e.preventDefault();
    alert('Add Question Modal goes here!');
  };

  // gets the inital batch of questions -- NEED TO MAKE SURE IT GRABS ONLY THE PROPER NUMBER
  const questionCount = 400;
  // const url = `${process.env.URL}/qa/questions/?product_id=${tempProductID}`;
  useEffect(() => {
    axios.get(`${process.env.URL}/qa/questions/?count=${questionCount}&product_id=${tempProductID}`, headers)
      .then((response) => setQuestions(response.data.results))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <div className="questionList-box">
        {questions.length > 0 ? questions.map((question) => <Question key={question.question_id} question={question}/>) : ''}
      </div>
      <div>
        <span>
          <button>MORE ANSWERED QUESTIONS</button>
          <button onClick={onAddQuestionClick}>ADD A QUESTION +</button>
        </span>
      </div>
    </div>
  );
};

export default QuestionsList;
