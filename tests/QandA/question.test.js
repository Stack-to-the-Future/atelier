import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Question from '../../client/src/components/QandASubFolder/Question.jsx';

const question = {
  question_id: 647092,
  question_body: 'Are nacho stains easy to remove from this item?',
  question_date: '2023-11-18T00:00:00.000Z',
  asker_name: 'FatBoi420',
  question_helpfulness: 0,
  reported: false,
  answers: {},
};
const modalStatus = { name: '' };
const productName = 'Morning joggers';

describe('it should render Question properly', () => {
  beforeEach(() => render(<Question
    question={question}
    modalStatus={modalStatus}
    productName={productName}
  />));

  it('should render a Question', async () => {
    const item = await screen.findByTestId('question');
    expect(item).toBeTruthy();
  });

  it('should render a helpful button', async () => {
    const button = await screen.findByTestId('question-helpful');
    expect(button).toBeTruthy();
  });
});

// describe('it should render Question properly', () => {
//   beforeEach(() => render(<Question
//     question={question}
//     modalStatus={{ name: 'answer' }}
//     productName={productName}
//   />));

//   it('should render the add answer modal', async () => {
//     const modal = await screen.findByTestId('add-answer-modal');
//     expect(modal).toBeTruthy();
//   });
// });
