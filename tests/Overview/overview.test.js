import React from 'react';
import { render, screen } from '@testing-library/react';
import Overview from '../../client/src/components/Overview';

const mockProduct = {
  id: 40346,
  name: 'testName',
  category: 'testCategory',
  default_price: '1.23',
};

const mockRatings = {
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
};

describe('should render overview component', () => {
  it('should render image gallery component', () => {
    render(<Overview product={mockProduct} ratings={mockRatings} />);

    const gallery = screen.getByTestId('overview-gallery-container');
    expect(gallery).toBeTruthy();
  });
});
