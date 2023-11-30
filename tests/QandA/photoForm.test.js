import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PhotoForm from '../../client/src/components/QandASubFolder/PhotoForm.jsx';

const photo = 'https://media-cldnry.s-nbcnews.com/image/upload/streams/2014/September/140905/1D274906713956-today-pygmy-hippo-1a-140904.jpg';
const photos = [photo];

const modalFunctions = {
  close: () => 'x',
  bodyChange: () => 'x',
  usernameChange: () => 'x',
  emailChange: () => 'x',
  photoChange: () => 'x',
  photosChange: () => 'x',
};

describe('it should render Photo Form', () => {
  beforeEach(() => render(<PhotoForm
    photo={photo}
    photos={photos}
    modalFunctions={modalFunctions}
  />));

  it('should render the Photo Form', async () => {
    const item = await screen.findByTestId('photo-form');
    expect(item).toBeTruthy();
  });

  it('should render the close photo form button', async () => {
    const button = await screen.findByTestId('close-photo-form');
    expect(button).toBeTruthy();
  });
});
