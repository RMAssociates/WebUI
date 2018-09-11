import React from 'react';
import YelpReview from '../reviews/yelp';
import GoogleReview from '../reviews/google';
import RateABizReview from '../reviews/rateABiz';


export default () => (
  <div>
    <div className="row offset-sm-2">
      {/* <YelpReview /> */}
      <GoogleReview />

    </div>
    <div className="row">
      <RateABizReview />
    </div>
  </div>
);
