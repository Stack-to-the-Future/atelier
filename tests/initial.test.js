import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';

import QandA from '../client/src/components/QandA.jsx';

describe('renders an interactive counter button', () => {
  it('should render the counter button', () => {
    render(<QandA />);
    expect(screen.queryByText('Here is the Q and A!')).toBeFalsy();
  });
});