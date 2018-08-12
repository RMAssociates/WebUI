
import React from 'react';

export default () => (
  <div className="reviews">
    <div className="row blockquote review-item">
      <div className="col-md-3 text-center">
        <img alt="" className="rounded-circle reviewer" src="http://standaloneinstaller.com/upload/avatar.png" />
        <div className="caption">
          <small>by <a href="#joe">Joe</a></small>
        </div>
      </div>
      <div className="col-md-9">
        <h4>My awesome review</h4>
        <div className="ratebox text-center" data-id="0" data-rating="5" />
        <p className="review-text">My awesome review. My awesome review. My awesome review.
         My awesome review. My awesome review. My awesome review. My awesome review. My awesome review.
          My awesome review. My awesome review. My awesome review.
        </p>

        <small className="review-date">March 26, 2017</small>
      </div>
    </div>
  </div>
);
