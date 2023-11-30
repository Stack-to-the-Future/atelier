import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { act } from 'react-dom/test-utils';
import OutfitList from '../../client/src/components/RelatedProductsSubFolder/OutfitList.jsx';

const mockData = {
  handleModalStatus: jest.fn(),
  handleCompaired: jest.fn(),
  getMainProduct: jest.fn(),
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

describe('OutfitList component', () => {
  it('should render OutfitList.jsx', async () => {
    await act(async () => {
      render(<OutfitList
        handleModalStatus={mockData.handleModalStatus}
        handleCompaired={mockData.handleCompaired}
        current={mockData.current}
        getMainProduct={mockData.getMainProduct}
        ratings={mockData.ratings}
      />);
    });
    const outFitProdList = await screen.findByTestId('outFitId');
    expect(outFitProdList).toBeInTheDocument();
  });

  it('should check if there is a + Button in OutfitList.jsx', async () => {
    await act(async () => {
      render(<OutfitList
        handleModalStatus={mockData.handleModalStatus}
        handleCompaired={mockData.handleCompaired}
        current={mockData.current}
        getMainProduct={mockData.getMainProduct}
        ratings={mockData.ratings}
      />);
    });
    const outFitProdList = await screen.getByText(/add an outfit/i);
    expect(outFitProdList).toBeInTheDocument();
  });

  it('should check if there is a container for teh user\'s OutfitListButton in OutfitList.jsx', async () => {
    await act(async () => {
      render(<OutfitList
        handleModalStatus={mockData.handleModalStatus}
        handleCompaired={mockData.handleCompaired}
        current={mockData.current}
        getMainProduct={mockData.getMainProduct}
        ratings={mockData.ratings}
      />);
    });
    const outFitListContainer = await screen.findByTestId('outFitListId');
    expect(outFitListContainer).toBeInTheDocument();
  });
});
