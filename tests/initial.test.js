import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';

import QandA from '../client/src/components/QandA.jsx';
import RelatedProducts from '../client/src/components/RelatedProducts.jsx';

describe('renders an interactive counter button', () => {
  it('should render the counter button', () => {
    render(<QandA />);
    expect(screen.queryByText('Here is the Q and A!')).toBeFalsy();
  });
});

describe('RelatedProducts Component', () => {
  it('should render the RelatedProducts component', async () => {
    render(<RelatedProducts products= {
      [{
        id: 40344,
        campus: "hr-rfp",
        name: "Camo Onesie",
        slogan: "Blend in to your crowd",
        description: "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
        category: "Jackets",
        default_price: "140.00",
        created_at: "2021-08-13T14:38:44.509Z",
        updated_at: "2021-08-13T14:38:44.509Z"
      }]
    }/>);
    await expect(screen.queryByText('RELATED PRODUCTS')).toBeTruthy();
  });
 });
