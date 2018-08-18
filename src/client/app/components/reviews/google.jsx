
import React from 'react';
import mockPlaces from '../../../../server/API.Cloud/places.json';

const Ratings = actual => (
  <div className="star-rating">
    {[1, 2, 3, 4, 5].map(i => <span className="fa fa-star" />)}
  </div>
);

const reviewRender = (review) => {
  const {author_name, author_url, profile_photo_url, rating, text, time} = review; //eslint-disable-line
  return (
    <div>
      <div className="row blockquote review-item">
        <div className="col-md-3 text-center">
          <img alt="" className="rounded-circle reviewer" src={profile_photo_url} />
          <div className="caption">
            <small>by <a href="#joe">{author_name}</a></small>
          </div>
        </div>
        <div className="col-md-9">
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
    </div>
  );
};

const googleReviews = () =>
  // const { reviews } = mockPlaces.result.reviews;
  (
    <div>
      {mockPlaces.result.reviews.map(review => reviewRender(review))}
    </div>
  );

class GoogleReview extends React.Component {
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
      <div className="reviews">
        <div className="btn-group">
          <button type="button" className="btn btn-success" onClick={() => this.handleClickPrevious()}>Prev</button>
          <p className="p-2">REVIEWS</p>
          <button type="button" className="btn btn-success" onClick={() => this.handleClickNext()}>Next</button>
        </div>
        <hr />
        {reviewRender(mockPlaces.result.reviews[this.state.count])}
      </div>
    );
  }
}
export default GoogleReview;
