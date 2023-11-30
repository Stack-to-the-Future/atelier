import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import AddQuestionModal from '../../client/src/components/QandASubFolder/AddQuestionModal.jsx';

const setModalStatus = () => 'x';
const productName = 'joggers';
const productId = 123554;

describe('it should render Add Question Modal', () => {
  beforeEach(() => render(<AddQuestionModal
    setModalStatus={setModalStatus}
    productName={productName}
    productId={productId}
  />));

  it('should render the Add Question Modal', async () => {
    const modal = await screen.findByTestId('add-question-modal');
    expect(modal).toBeTruthy();
  });

  it('closes the modal when the X button is clicked', async () => {
    const closeButton = screen.getByRole('button', { name: 'X' });
    fireEvent.click(closeButton);
    expect(closeButton).toBeInTheDocument();
  });

  it('submits the form on submit button click', async () => {
    const submitButton = screen.getByRole('button', { name: 'Add Question'});
    fireEvent.click(submitButton);
    expect(submitButton).toBeInTheDocument();
  });
});
