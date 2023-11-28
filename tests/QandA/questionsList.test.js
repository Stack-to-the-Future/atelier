import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import * as axios from 'axios';
import QuestionsList from '../../client/src/components/QandASubFolder/QuestionsList.jsx';

const searchTerm = '';

const modalStatus = { name: '', data: '' };

const productName = 'Morning Joggers';

const productId = 40346;

jest.mock('axios');
const mockQuestionsCall = {
  product_id: '40346',
  results: [
    {
      question_id: 646812,
      question_body: 'Gosh Darnit Bobby!',
      question_date: '2023-07-05T00:00:00.000Z',
      asker_name: 'HankHill323',
      question_helpfulness: 7,
      reported: false,
      answers: {
        5992792: {
          id: 5992792,
          body: 'Mercury was here xD',
          date: '2023-07-06T00:00:00.000Z',
          answerer_name: 'Mercury',
          helpfulness: 8,
          photos: [],
        },
        5993157: {
          id: 5993157,
          body: 'Ya bobby what are you doing?',
          date: '2023-08-26T00:00:00.000Z',
          answerer_name: 'bobby123',
          helpfulness: 2,
          photos: [],
        },
        5993162: {
          id: 5993162,
          body: 'answer goe sd here',
          date: '2023-08-26T00:00:00.000Z',
          answerer_name: 'jack212',
          helpfulness: 0,
          photos: [],
        },
        5993387: {
          id: 5993387,
          body: 'photo test baby!',
          date: '2023-11-27T00:00:00.000Z',
          answerer_name: 'baby23',
          helpfulness: 1,
          photos: [
            'https://media.licdn.com/dms/image/D4E03AQGI33jet_7UJA/profile-displayphoto-shrink_200_200/0/1679495573016?e=1701302400&v=beta&t=dpaEJhg7qILFhBHaGPKxrUHhxsqqKszA60X5w9V-fj8',
          ],
        },
      },
    },
    {
      question_id: 646995,
      question_body: 'question',
      question_date: '2023-08-22T00:00:00.000Z',
      asker_name: 'jack',
      question_helpfulness: 1,
      reported: false,
      answers: {
        5993131: {
          id: 5993131,
          body: 'What should I type for an answer to this question',
          date: '2023-08-25T00:00:00.000Z',
          answerer_name: 'NotJack',
          helpfulness: 2,
          photos: [],
        },
        5993132: {
          id: 5993132,
          body: 'What should I type for an answer to this question',
          date: '2023-08-25T00:00:00.000Z',
          answerer_name: 'NotJack',
          helpfulness: 0,
          photos: [],
        },
      },
    },
    {
      question_id: 646972,
      question_body: 'hhehehe',
      question_date: '2023-08-20T00:00:00.000Z',
      asker_name: 'hehehe',
      question_helpfulness: 0,
      reported: false,
      answers: {},
    },
    {
      question_id: 646811,
      question_body: 'Gosh Darnit Bobby!',
      question_date: '2023-07-05T00:00:00.000Z',
      asker_name: 'Hank Hill',
      question_helpfulness: 0,
      reported: false,
      answers: {},
    },
  ],
};

axios.get.mockResolvedValue({ data: mockQuestionsCall });

describe('it should render QuestionsList properly', () => {
  beforeEach(() => render(<QuestionsList
    searchTerm={searchTerm}
    modalStatus={modalStatus}
    productName={productName}
    productId={productId}
  />));
  it('it should render list container', () => {
    const container = screen.getByTestId('question-list-container');
    expect(container).toBeTruthy();
  });

  it('should render Add Question Button', async () => {
    const button = await screen.getByTestId('add-question-button');
    expect(button).toBeTruthy();
  });

  it('should render More Questions Button', async () => {
    const button = await screen.findByTestId('more-questions-button');
    expect(button).toBeTruthy();
  });
});

describe('it should render QuestionsList properly', () => {
  beforeEach(() => render(<QuestionsList searchTerm={searchTerm} modalStatus={{ name: 'question' }} productName={productName} productId={productId} />));

  it('should render Add Question Modal', async () => {
    const modal = await screen.getByTestId('add-question-modal');
    expect(modal).toBeTruthy();
  });
});
