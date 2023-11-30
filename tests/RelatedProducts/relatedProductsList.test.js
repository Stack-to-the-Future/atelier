import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { act } from 'react-dom/test-utils';
import RelatedProductsList from '../../client/src/components/RelatedProductsSubFolder/RelatedProductsList.jsx';

const mockData = {
  handleModalStatus: jest.fn(),
  handleCompaired: jest.fn(),
  getMainProduct: jest.fn(),
  products:
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
  relatedProductsId:
   [
     40349,
     40349,
     40351,
     40352,
     40344,
     40346,
   ],
  current: {
    campus: 'hr-rfp',
    category: 'Pants',
    created_at: '2021-08-13T14:38:44.509Z',
    default_price: '40.00',
    description: "Whether you're a morning person or not.  Whether you're gym bound or not.  Everyone looks good in joggers.",
    features: [
      {
        feature: 'Fabric',
        value: '100% Cotton',
      },
      {
        feature: 'Cut',
        value: 'Skinny',
      },
    ],
    id: 40346,
    name: 'Morning Joggers',
    slogan: 'Make yourself a morning person',
    updated_at: '2021-08-13T14:38:44.509Z',
  },
  ratings: {
    1: '25',
    2: '54',
    3: '53',
    4: '42',
    5: '98',
  },
};

describe('RelatedProductsList component', () => {
  it('should render RelatedProductsList.jsx', async () => {
    await act(async () => {
      render(<RelatedProductsList
        handleModalStatus={mockData.handleModalStatus}
        handleCompaired={mockData.handleCompaired}
        products={mockData.products}
        getMainProduct={mockData.getMainProduct}
        relatedProductsId={mockData.relatedProductsId}
        current={mockData.current}
        ratings={mockData.ratings}
      />);
    });
    const relProList = await screen.findByTestId('relProId');
    expect(relProList).toBeInTheDocument();
  });
});
