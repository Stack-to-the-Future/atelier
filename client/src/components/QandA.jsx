import React, { useState } from 'react';
import QuestionsList from './QandASubFolder/QuestionsList.jsx';
import SearchQuestions from './QandASubFolder/SearchQuestions.jsx';
// import AddQuestion from './QandASubFolder/AddQuestionModal.jsx';
// import AddAnswer from './QandASubFolder/AddAnswerModal.jsx';
import './App.css';

// const id = 40346;

// at the moment, I've just added the forms at the bottom of the widget
// they will need to access certain data, etc.

// MODAL IDEA:
// switch statement for rendering -- render based on state 'addQuestion' 'addAnswer' etc...
// useState('') -- initializing the state of the modal -- standard

const QandA = ({ changeModal }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const onSearch = (e) => {
    e.preventDefault();
    if (e.target.value.length >= 3) {
      setSearchTerm(e.target.value);
    } else {
      setSearchTerm('');
    }
  };

  return (
    <div id="quanda">
      <h3 className="quanda-header">
        QUESTIONS & ANSWERS
      </h3>
      <SearchQuestions onSearch={onSearch} />
      <QuestionsList searchTerm={searchTerm} changeModal={changeModal} />
      {/* <AddQuestion /> */}
      {/* <AddAnswer /> */}
    </div>
  );
};

export default QandA;
