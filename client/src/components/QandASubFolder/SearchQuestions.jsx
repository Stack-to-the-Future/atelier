import React from 'react';
import './QandA.css';

const SearchQuestions = ({ onSearch }) => (
    <input className='question-search' type='text' placeholder='Have a question? Search for answers...' onChange={onSearch} />
);

export default SearchQuestions;
