import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AddToCart from '../../client/src/components/Overview/AddToCart';

const mockSkus = {
  1394805: {
    quantity: 8,
    size: 'XS',
  },
  1394806: {
    quantity: 16,
    size: 'S',
  },
  1394807: {
    quantity: 17,
    size: 'M',
  },
  1394808: {
    quantity: 10,
    size: 'L',
  },
  1394809: {
    quantity: 15,
    size: 'XL',
  },
  1394810: {
    quantity: 6,
    size: 'XXL',
  },
};

describe('should render AddToCart properly', () => {
  beforeEach(() => render(<AddToCart skus={mockSkus} />));
  it('should render main', () => {
    const main = screen.getByTestId('cart-main');
    expect(main).toBeTruthy();
  });

  it('should render size selector', () => {
    const select = screen.getByTestId('cart-select-size');
    expect(select).toBeTruthy();
  });

  it('select should have initial value of "Select Size"', () => {
    const select = screen.getByTestId('cart-select-size');
    expect(select.value).toBe('Select Size');
  });

  it('select should have various sizes as options', () => {
    const select = screen.getByTestId('cart-select-size');
    expect(select);
  });
});
