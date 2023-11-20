import React from 'react';
import './Overview.css';

const Announcement = () => (
  <div className='overview-announcement'>
    <i className='overview-announcement-message'>
      SITE-WIDE ANNOUNCEMENT MESSAGE! --
    </i>
    SALE/DISCOUNT
    <b className='overview-announcement-offer'>
      OFFER
    </b>
     --
    <u className='overview-announcement-product'>
      NEW PRODUCT HIGHLIGHT
    </u>
</div>);

export default Announcement;
