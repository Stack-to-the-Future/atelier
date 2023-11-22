import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';

import QandA from '../client/src/components/QandA.jsx';














// Q AND A TESTS
// initial test
describe('renders title header for Q and A section', () => {
  it('should render "QUESTIONS & ANSWERS', () => {
    render(<QandA />);
    expect(screen.queryByText('QUESTIONS & ANSWERS')).toBeTruthy();
  });
});