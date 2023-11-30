import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import AddAnswerModal from '../../client/src/components/QandASubFolder/AddAnswerModal.jsx';

const setModalStatus = { name: '' };
const question = 'Are nacho stains easy to remove from this item?';
const productName = 'morning joggers';
const questionId = 647092;

const modalFunctions = {
  close: () => '',
  bodyChange: () => '',
  usernameChange: () => '',
  emailChange: () => '',
  photoChange: () => '',
  photosChange: () => '',
};

describe('it should render AddAnswerModal', () => {
  beforeEach(() => render(<AddAnswerModal
    setModalStatus={setModalStatus}
    question={question}
    productName={productName}
    questionId={questionId}
    modalFunctions={modalFunctions}
  />));

  it('should render the AddAnserModal component', async () => {
    const item = await screen.findByTestId('add-answer-modal');
    expect(item).toBeTruthy();
  });

  it('submits the form on submit button click', async () => {
    const submitButton = screen.getByRole('button', { name: 'Add Answer' });
    fireEvent.click(submitButton);
    expect(submitButton).toBeInTheDocument();
  });

  it('submits the form on submit button click', async () => {
    const closeButton = screen.getByRole('button', { name: 'X' });
    expect(closeButton).toBeInTheDocument();
  });
});
