import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Answer from '../../client/src/components/QandASubFolder/QuestionsList.jsx';

const answer = {
  answer_id: 5993312,
  body: "Unfortunately with sweatshops...",
  date: "2023-11-23T00:00:00.000Z",
  answerer_name: "thombombadil420",
  helpfulness: 6,
  photos: []
}

describe('it should render Answer properly', () => {
  beforeEach(() => render(<Answer answer={answer} />));

  it('should render an Answer', async () => {
    const modal = await screen.findByTestId("answer");
    expect(modal).toBeTruthy();
  })
})