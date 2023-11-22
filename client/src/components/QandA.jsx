import React, { useState } from 'react';
import QuestionsList from './QandASubFolder/QuestionsList.jsx';
import SearchQuestions from './QandASubFolder/SearchQuestions.jsx';
import './App.css';

// const id = 40346;

// at the moment, I've just added the forms at the bottom of the widget
// they will need to access certain data, etc.

const QandA = ({ setModalStatus }) => {
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
    <div id='quanda'>
      <h3 className='quanda-header'>
        QUESTIONS & ANSWERS
      </h3>
      <SearchQuestions onSearch={onSearch} />
      <QuestionsList searchTerm={searchTerm} setModalStatus={setModalStatus} />
    </div>
  );
};

export default QandA;
