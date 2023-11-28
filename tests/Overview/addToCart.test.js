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
let mockSku = '';
const changeMockSku = (sku) => { mockSku = sku; };

describe('should render AddToCart under normal usage', () => {
  beforeEach(() => render(<AddToCart
    skus={mockSkus}
    currentSku={mockSku}
    changeCurrentSku={changeMockSku}
  />));
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
    const option1 = select[1].innerHTML;
    expect(option1).toBe('XS');
    const option2 = select[2].innerHTML;
    expect(option2).toBe('S');
    const option3 = select[3].innerHTML;
    expect(option3).toBe('M');
    const option4 = select[4].innerHTML;
    expect(option4).toBe('L');
    const option5 = select[5].innerHTML;
    expect(option5).toBe('XL');
    const option6 = select[6].innerHTML;
    expect(option6).toBe('XXL');
  });
});

describe('should handle various breakpoints', () => {
  it('select size should render select quantity when utilized', () => {
    render(<AddToCart
      skus={mockSkus}
      currentSku="1394805"
      changeCurrentSku={changeMockSku}
    />);
    const quantities = screen.getByTestId('cart-select-quant');
    expect(quantities).toHaveLength(8);
  });

  it('selecting size should render add to cart when utilized', () => {
    render(<AddToCart
      skus={mockSkus}
      currentSku="1394805"
      changeCurrentSku={changeMockSku}
    />);
    const addButton = screen.getByTestId('cart-add-button');
    expect(addButton).toBeTruthy();
  });

  it('should return empty array if no skus are present', () => {
    render(<AddToCart
      skus={{}}
      currentSku=""
      changeCurrentSku={changeMockSku}
    />);
    const select = screen.getByTestId('cart-select-size');
    expect(select).toHaveLength(1);
  });

  it('should not allow add to cart if quantity is zero', () => {
    const outOfStock = {
      1234: {
        size: 'XS',
        quantity: 0,
      },
    };
    render(<AddToCart
      skus={outOfStock}
      currentSku="1234"
      changeCurrentSku={changeMockSku}
    />);
    const quantity = screen.getByTestId('cart-select-quant');
    expect(quantity).toHaveLength(1);

    const option = quantity[0];
    expect(option.innerHTML).toBe('OUT OF STOCK');

    const fakeButton = screen.getByTestId('cart-fake-button');
    expect(fakeButton).toBeTruthy();
  });
});
