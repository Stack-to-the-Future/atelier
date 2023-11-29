import React from 'react';
import { render, screen } from '@testing-library/react';
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
});
