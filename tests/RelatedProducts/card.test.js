import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { act } from 'react-dom/test-utils';
import Card from '../../client/src/components/RelatedProductsSubFolder/Card.jsx';

const mockData = {
  handleModalStatus: jest.fn(),
  handleCompaired: jest.fn(),
  setToDisplay: jest.fn(),
  getMainProduct: jest.fn(),
  setProductInfo: jest.fn(),
  handleOutFitList: jest.fn(),
  key: '40344',
  product:
[
  {
    id: 40344,
    campus: 'hr-rfp',
    name: 'Camo Onesie',
    slogan: 'Blend in to your crowd',
    description:
      `The So Fatigues will wake you up and fit you in.
This high energy camo will have you blending in to even the wildest surroundings.`,
    category: 'Jackets',
    default_price: '140.00',
    created_at: '2021-08-13T14:38:44.509Z',
    updated_at: '2021-08-13T14:38:44.509Z',
  },
],
  gallery:
  [
    {
      campus: 'hr-rfp',
      category: 'Jackets',
      created_at: '2021-08-13T14:38:44.509Z',
      default_price: '140.00',
      description: `The So Fatigues will wake you up and fit you in.
      This high energy camo will have you blending in to even the wildest surroundings.`,
      id: 40344,
      name: 'Camo Onesie',
      photo: 'https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
      slogan: 'Blend in to your crowd',
      updated_at: '2021-08-13T14:38:44.509Z',
    },
    {
      campus: 'hr-rfp',
      category: 'Accessories',
      created_at: '2021-08-13T14:38:44.509Z',
      default_price: '69.00',
      description: `Where you're going you might not need roads, but you definitely need some shades.
      Give those baby blues a rest and let the future shine bright on these timeless lenses.`,
      id: 40345,
      name: 'Bright Future Sunglasses',
      photo: null,
      slogan: "You've got to wear shades",
      updated_at: '2021-08-13T14:38:44.509Z',
    },
    {
      campus: 'hr-rfp',
      category: 'Kicks',
      created_at: '2021-08-13T14:38:44.509Z',
      default_price: '99.00',
      description: `Now where da boxes where I keep mine? You should peep mine, maybe once or twice but never three times.
      I'm just a sneaker pro, I love Pumas and shell toes, but can't nothin compare to a fresh crispy white pearl`,
      id: 40348,
      name: 'Heir Force Ones',
      photo: 'https://images.unsplash.com/photo-1544441892-794166f1e3be?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
      slogan: 'A sneaker dynasty',
      updated_at: '2021-08-13T14:38:44.509Z',
    },
  ],
  icon: '*',
  ratings: {
    1: '25',
    2: '54',
    3: '53',
    4: '42',
    5: '98',
  },
};

describe('single card component', () => {
  it('should render one card in Carousel', async () => {
    await act(async () => {
      render(<Card
        key={mockData.key}
        product={mockData.product}
        gallery={mockData.gallery}
        ratings={mockData.ratings}
        icon={mockData.icon}
        handleModalStatus={mockData.handleModalStatus}
        handleCompaired={mockData.handleCompaired}
        handleOutFitList={mockData.handleOutFitList}
        getMainProduct={mockData.getMainProduct}
      />);
    });
    const card = await screen.findByTestId('cardTest');
    expect(card).toBeInTheDocument();
  });
});
