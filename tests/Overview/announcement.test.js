import React from 'react';
import { render, screen } from '@testing-library/react';
import Announcement from '../../client/src/components/Overview/Announcement.jsx';

describe('renders the announcement component properly', () => {
  it('should render the main', async () => {
    render(<Announcement />);
    const main = await screen.findByTestId('announce-main');
    expect(main).toBeTruthy();
  });

  it('should render the message', async () => {
    render(<Announcement />);
    const message = await screen.findByTestId('announce-message');
    expect(message).toBeTruthy();
  });
});
