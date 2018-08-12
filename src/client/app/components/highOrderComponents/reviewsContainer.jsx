import React from 'react';
import YelpReview from '../reviews/yelp';
import GoogleReview from '../reviews/google';


export default () => (
  <div className="row">
    <YelpReview />
    <GoogleReview />
  </div>
);
