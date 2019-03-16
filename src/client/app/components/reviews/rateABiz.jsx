

import React from 'react';
import mock from '../../../../server/API.Cloud/rateAbiz.json';

const Ratings = actual => (
  <div className="star-rating my-3 text-center text-md-left">
    {[1, 2, 3, 4, 5].map(i => <span className="fa fa-star" />)}
  </div>
);

const reviewRender = (review) => {
  const {
    authorFirstName,
    authorLastName,
    rating,
    text,
    time} = review; //eslint-disable-line
  return (
    <div className="row">
      <div className="col-md-3 text-center">
        <i className="fa fa-user-circle fa-5x" />
        <div className="caption py-4">
          <small>by <a href="#joe">{`${authorFirstName} ${authorLastName}`}</a></small>
        </div>
      </div>
      <div className="col-md-9 px-4">
        <Ratings className="float-sm-right" rating={rating} />
        <div id="review-summary">
          <p className="review-text collapse" id={`collapseSummary${time}`}>{text}
          </p>
          <a
            className="collapsed"
            data-toggle="collapse"
            href={`#collapseSummary${time}`}
            aria-expanded="false"
            aria-controls={`collapseSummary${time}`}
          >.
          </a>
        </div>
        <small className="review-date">{review.relative_time_description}</small>
      </div>
    </div>
  );
};

class RateABizReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.handleClickPrevious = this.handleClickPrevious.bind(this);
    this.handleClickNext = this.handleClickNext.bind(this);
  }
  handleClickPrevious() {
    if (this.state.count > 0) {
      this.setState({
        count: this.state.count - 1,
      });
    }
  }
  handleClickNext() {
    if (this.state.count <= 4) {
      this.setState({
        count: this.state.count + 1,
      });
    }
  }
  render() {
    return (
      <div className="reviews row blockquote review-item">
        <p className="col-sm-12 lead text-center">
        Read why our patients love us !
        </p>
        <div className="btn-group offset-sm-5 offset-3">
          <button type="button" className="review-prev" onClick={() => this.handleClickPrevious()}>
            <i className="fa fa-angle-left fa-2x" />
          </button>
          <p className="px-4 text-dark py-2">Reviews</p>
          <button type="button" className="review-prev" onClick={() => this.handleClickNext()}>
            <i className="fa fa-angle-right fa-2x" />
          </button>
        </div>
        <hr />
        {reviewRender(mock.reviews[this.state.count])}
      </div>
    );
  }
}
export default RateABizReview;

// http://s3.amazonaws.com/cdn.rateabiz.com/reviews/45213e5dc12904d0f4c294eee34a6a3d/reviews.json
