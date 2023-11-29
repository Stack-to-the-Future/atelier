import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import QandA from '../../client/src/components/QandA.jsx';

const setModalStatus = () => 'x';
const modalStatus = { name: '' };
const productName = 'joggers';
const productId = 378483;

describe('it should render Add Question Modal', () => {
  beforeEach(() => render(<QandA
    setModalStatus={setModalStatus}
    productName={productName}
    productId={productId}
    modalStatus={modalStatus}
  />));

  it('should render the Q and A', async () => {
    const modal = await screen.findByTestId('quanda');
    expect(modal).toBeTruthy();
  });
});
