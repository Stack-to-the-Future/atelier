import React, { useState } from 'react';
import QuestionsList from './QandASubFolder/QuestionsList.jsx';
import SearchQuestions from './QandASubFolder/SearchQuestions.jsx';
import './App.css';

const QandA = ({
  setModalStatus, modalStatus, productName, productId,
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
    <div id="quanda" data-testid="quanda">
      <h3 className="quanda-header">
        QUESTIONS & ANSWERS
      </h3>
      <SearchQuestions onSearch={onSearch} />
      <QuestionsList
        searchTerm={searchTerm}
        setModalStatus={setModalStatus}
        modalStatus={modalStatus}
        productName={productName}
        productId={productId}
      />
    </div>
  );
};

export default QandA;
