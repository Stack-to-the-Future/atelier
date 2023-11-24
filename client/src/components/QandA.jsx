import React, { useState } from 'react';
import QuestionsList from './QandASubFolder/QuestionsList.jsx';
import SearchQuestions from './QandASubFolder/SearchQuestions.jsx';
import './App.css';

const QandA = ({
  setModalStatus, modalStatus, productName,
}) => {
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
      <QuestionsList
        searchTerm={searchTerm}
        setModalStatus={setModalStatus}
        modalStatus={modalStatus}
        productName={productName}
      />
    </div>
  );
};

export default QandA;
