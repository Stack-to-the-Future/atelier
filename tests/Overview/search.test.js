import React from 'react';
import { render, screen } from '@testing-library/react';
import Search from '../../client/src/components/Overview/Search.jsx';

describe('renders the search component properly', () => {
  it('should render the logo', async () => {
    render(<Search />);
    const logo = await screen.findByTestId('search-logo');
    expect(logo).toBeTruthy();
  });

  it('should render the input', async () => {
    render(<Search />);
    const input = await screen.findByTestId('search-input');
    expect(input).toBeTruthy();
  });

  it('should render the search icon', async () => {
    render(<Search />);
    const icon = await screen.findByTestId('search-icon');
    expect(icon).toBeTruthy();
  });
});
