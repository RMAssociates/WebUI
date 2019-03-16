
import React from 'react';
import lottie from 'lottie-web';
import bm from '../../assets/json/body.json';
import likeJson from '../../assets/json/like.json';
import PatientThumbsUp from '../../assets/json/PatientThumbsUp.json';
import mockPlaces from '../../../../server/API.Cloud/places.json';

const Ratings = actual => (
  <div className="star-rating my-3 text-center text-md-left">
    {/* {[1, 2, 3, 4, 5].map(i => <span className="fa fa-star" />)} */}
    <div className="rating-animation-size" id="animationl" />
    {/* <div className="like-anim-size" id="anim-like" /> */}
  </div>
);

const reviewRender = (review) => {
  const {author_name, author_url, profile_photo_url, rating, text, time} = review; //eslint-disable-line
  return (
    <div className="row">
      <div className="col-md-3 text-center">
        <img alt="" className="rounded-circle reviewer" src={profile_photo_url} />
        <div className="caption py-4">
          <small>by <a href="#joe">{author_name}</a></small>
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


class GoogleReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.handleClickPrevious = this.handleClickPrevious.bind(this);
    this.handleClickNext = this.handleClickNext.bind(this);
  }
  componentDidMount() {
    const ele = document.getElementById('animationl');
    console.log('ell', ele);
    lottie.loadAnimation({
      container: ele,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: bm,
    });

    lottie.loadAnimation({
      container: document.getElementById('PatientThumbsUp'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: PatientThumbsUp,
    });
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
        {reviewRender(mockPlaces.result.reviews[this.state.count])}
      </div>
    );
  }
}
export default GoogleReview;
