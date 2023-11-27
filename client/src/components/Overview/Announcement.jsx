import React from 'react';
import './Overview.css';

const Announcement = () => (
  <div data-testid="announce-main" className="overview-announcement">
    <i data-testid="announce-message" className="overview-announcement-message">
      SITE-WIDE ANNOUNCEMENT MESSAGE! --
    </i>
    SALE/DISCOUNT
    <b data-testid="annouce-offer" className="overview-announcement-offer">
      OFFER
    </b>
    --
    <u data-testid="announce-product" className="overview-announcement-product">
      NEW PRODUCT HIGHLIGHT
    </u>
  </div>
);

export default Announcement;
