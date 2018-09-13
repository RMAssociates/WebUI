import React from 'react';
import { NavLink } from 'react-router-dom';
import YelpReview from '../reviews/yelp';
import GoogleReview from '../reviews/google';
import RateABizReview from '../reviews/rateABiz';


export default class ReviewContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { type: 0 };
  }
  render() {
    const { type } = this.state;
    return (
      <div className="offset-sm-2">
        <div className="btn-group btn-group-lg" role="group" aria-label="Reviews">
          <button
            type="button"
            className="btn-review"
            onClick={() => this.setState({ type: 0 })}
          >Google
          </button>
          <button
            type="button"
            className="btn-review"
            onClick={() => this.setState({ type: 1 })}
          >Yelp
          </button>
          <button
            type="button"
            className="btn-review"
            onClick={() => this.setState({ type: 2 })}
          >Rate A Biz
          </button>
        </div>
        { type === 0 &&
        <div className="row">
          <GoogleReview />
        </div>
        }
        { type === 1 &&
        <div className="row">
          <YelpReview />
        </div>
        }
        { type === 2 &&
        <div className="row">
          <RateABizReview />
        </div>
        }
      </div>
    );
  }
}
