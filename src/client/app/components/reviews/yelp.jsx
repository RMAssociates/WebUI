
import React from 'react';
import mock from '../../../../server/API.Cloud/yelp.json';

const Ratings = actual => (
  <div className="star-rating my-3 text-center text-md-left">
    {[1, 2, 3, 4, 5].map(i => <span className="fa fa-star" />)}
  </div>
);

const reviewRender = (review) => {
  const {user, rating, text, time_created} = review; //eslint-disable-line
  return (
    <div className="row">
      <div className="col-md-3 text-center">
        <img alt="" className="rounded-circle reviewer" src={user.image_url} />
        <div className="caption py-4">
          <small>by <a href="#joe">{user.name}</a></small>
        </div>
      </div>
      <div className="col-md-9 px-4">
        <Ratings className="float-sm-right" rating={rating} />
        <div id="review-summary">
          <p className="review-text collapse" id={`collapseSummary${time_created}`}>{text}
          </p>
          <a
            className="collapsed"
            data-toggle="collapse"
            href={`#collapseSummary${time_created}`}
            aria-expanded="false"
            aria-controls={`collapseSummary${time_created}`}
          >.
          </a>
        </div>
        <small className="review-date">{time_created}</small>
      </div>
    </div>
  );
};

class YelpReview extends React.Component {
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
        <p className="col-sm-12 lead text-center f-600">
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
export default YelpReview;

// import React from 'react';

// export default () => (
//   <div>
//     <a href="http://www.yelp.com/biz/leaside-village-dental-toronto-2" target="_blank" className="link">
//       <img src="public/assets/yelp.jpg" title="Read Our Yelp Reviews!" alt="Read Our Yelp Reviews!" />
//     </a>
//   </div>
// );
