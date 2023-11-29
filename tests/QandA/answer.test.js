import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Answer from '../../client/src/components/QandASubFolder/Answer.jsx';

const answer = {
  answer_id: 5993312,
  body: 'Unfortunately with sweatshops...',
  date: '2023-11-23T00:00:00.000Z',
  answerer_name: 'thombombadil420',
  helpfulness: 6,
  photos: ['https://people.com/thmb/a474e7HQ-faRZ02ozExiP4-OeIM=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(869x449:871x451):format(webp)/eastern-black-rhino-calf-2-bb07d615ed1d429fab5cf0f76b1b22cf.jpg'],
};

describe('it should render Answer properly', () => {
  beforeEach(() => render(<Answer answer={answer} />));

  it('should render an Answer', async () => {
    const item = await screen.findByTestId('answer');
    expect(item).toBeTruthy();
  });

  it('should render a helpful', async () => {
    const button = await screen.findByTestId('answer-report');
    expect(button).toBeTruthy();
  });

  it('should render a helpful', async () => {
    const button = await screen.findByTestId('answer-helpful');
    expect(button).toBeTruthy();
  });

  it('should correctly display the date', async () => {
    const date = await screen.getByText(/November 23, 2023/i);
    expect(date).toBeTruthy();
  });

  it('should correctly display the username', async () => {
    const username = await screen.getByText(/thombombadil420/);
    expect(username).toBeTruthy();
  });

  it('should correctly display the body', async () => {
    const body = await screen.getByText(/Unfortunately with sweatshops.../);
    expect(body).toBeTruthy();
  });

  it('should display a photo if url is provided', async () => {
    const photo = await screen.findByTestId('answer-photo');
    expect(photo).toBeTruthy();
  });
});
