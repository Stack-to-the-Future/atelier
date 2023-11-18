import React from 'react';
import QuestionsList from './QandASubFolder/QuestionsList.jsx';
import AddQuestion from './QandASubFolder/AddQuestionModal.jsx';
import AddAnswer from './QandASubFolder/AddAnswerModal.jsx';

// const id = 40346;

// at the moment, I've just added the forms at the bottom of the widget
// they will need to access certain data, etc.

const QandA = () => (
    <div>
      <h3>
        QUESTIONS AND ANSWERS
      </h3>
      <QuestionsList />
      <AddQuestion />
      <AddAnswer />
    </div>
);

export default QandA;
