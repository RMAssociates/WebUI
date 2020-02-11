import React from 'react';
import { NavLink } from 'react-router-dom';
import lottie from 'lottie-web';
import { SocialIcon } from 'react-social-icons';
import YelpReview from '../reviews/yelp';
import GoogleReview from '../reviews/google';
import RateABizReview from '../reviews/rateABiz';
import PatientThumbsUp from '../../assets/json/PatientThumbsUp.json';

export default class ReviewContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { type: 0 };
  }
  componentDidMount() {
    // lottie.loadAnimation({
    //   container: document.getElementById('PatientThumbsUp'),
    //   renderer: 'svg',
    //   loop: true,
    //   autoplay: true,
    //   animationData: PatientThumbsUp,
    // });
  }
  render() {
    const { type } = this.state;
    return (
      <div className="col-12 text-center">
        <div className="row" role="group" aria-label="Reviews">          
          <button
            type="button"
            className={`${type === 0 ? 'active' : ''} btn-review`}
            onClick={() => this.setState({ type: 0 })}
          ><SocialIcon network="google" /> Google
          </button>
          <button
            type="button"
            className={`${type === 1 ? 'active' : ''} btn-review`}
            onClick={() => this.setState({ type: 1 })}
          > <SocialIcon network="yelp" /> Yelp
          </button>
          <button
            type="button"
            className={`${type === 2 ? 'active' : ''} btn-review`}
            onClick={() => this.setState({ type: 2 })}
          ><SocialIcon network="sharethis" /> Rate A Biz
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
