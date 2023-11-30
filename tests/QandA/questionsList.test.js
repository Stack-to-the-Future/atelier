import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import QuestionsList from '../../client/src/components/QandASubFolder/QuestionsList.jsx';

const searchTerm = '';

const modalStatus = { name: '', data: '' };

const productName = 'Morning Joggers';

const productId = 40346;

describe('it should render QuestionsList properly', () => {
  beforeEach(() => render(<QuestionsList
    searchTerm={searchTerm}
    modalStatus={modalStatus}
    productName={productName}
    productId={productId}
    setModalStatus={() => 'x'}
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
    const button = await screen.queryByTestId('more-questions-button');
    expect(button).not.toBeInTheDocument();
  });

  it('should have a clickable load more questions button', () => {
    const moreAnswered = screen.getByTestId('add-question-button');
    fireEvent.click(moreAnswered);
    expect(moreAnswered).toBeTruthy();
  });
});

describe('it should render QuestionsList properly', () => {
  beforeEach(() => render(<QuestionsList searchTerm={searchTerm} modalStatus={{ name: 'question' }} productName={productName} productId={productId} />));

  it('should render Add Question Modal', async () => {
    const modal = await screen.getByTestId('add-question-modal');
    expect(modal).toBeTruthy();
  });
});
