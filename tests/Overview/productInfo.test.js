import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProductInformation from '../../client/src/components/Overview/ProductInformation';

const mockProduct = {
  id: 40346,
  name: 'testName',
  category: 'testCategory',
  default_price: '1.23',
};
const mockStyles = [
  {
    style_id: 240510,
    name: 'Black',
    original_price: '40.00',
    sale_price: null,
    'default?': true,
    photos: [
      {
        thumbnail_url: 'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
        url: 'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
      },
    ],
    skus: {
      1394805: {
        quantity: 8,
        size: 'XS',
      },
    },
  },
];
const mockRatings = {
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
};
let mockCurrentStyle = 0;
const mockChangeCurrentStyle = (idx) => { mockCurrentStyle = idx; };

describe('should render ProductInformation properly', () => {
  beforeEach(() => render(<ProductInformation
    product={mockProduct}
    styles={mockStyles}
    currenStyle={mockCurrentStyle}
    changeCurrentStyle={mockChangeCurrentStyle}
    ratings={mockRatings}
  />));

  it('should render stars component', () => {
    const stars = screen.getByTestId('overview-product-stars');
    expect(stars).toBeTruthy();
    expect(stars.childElementCount).toBe(1);
  });

  it('should render product category', () => {
    const category = screen.getByTestId('overview-product-category').innerHTML;
    expect(category).toBe(mockProduct.category);
  });

  it('should render product name', () => {
    const name = screen.getByTestId('overview-product-name').innerHTML;
    expect(name).toBe(mockProduct.name);
  });

  it('should render product price', () => {
    const price = screen.getByTestId('overview-product-price').innerHTML;
    expect(price).toBe(`$${mockProduct.default_price}`);
  });
});
