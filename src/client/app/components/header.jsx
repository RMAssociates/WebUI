import React from 'react';
import NavigationBar from './subComponents/navigationBar';

export default function Header(props) {
  return (
    <div className="">
      <div className="row d-none d-md-flex">
        {/* NOt Sure that we need this header */}
        <div className="col-sm-3">
          {/* <img className="img-fluid" src="public/assets/logo_white_b.jpg" alt="First slide" /> */}
        </div>
        <div className="col-sm-6"><p /></div>
        <div className="col-sm-3">
          <p className="text-primary float-right font-weight-bold align-bottom">
            <i className="fa fa-phone-square" aria-hidden="true" />
              647-346-3368sw
          </p>
          <button className="btn btn-success float-right mb-0">Emergency Appointment</button>
        </div>
      </div>

      <div className="d-md-none">
        <div className="row  bg-header-white">
          <div className="">
            <a className="navbar-brand" href="#">
              <img
                className="float-left img-fluid-header nav-brand-mobile-img"
                src="public/assets/logo_white_b.jpg"
                alt="Home"
              />
            </a>
          </div>
          <div className="col-7 header-m-phone">
            <span className="">
              <a href="tel:647-560-2430" className="text-dark">
                <i classNaDme="fa fa-inverse fa-phone-square fa-1_5x pl-4 my-2" aria-hidden="true" />
             &nbsp;647-346-3368
              </a>
            </span>
            <button
              className="navbar-toggler menu-header float-right"
              type="button"
              data-toggle="collapse"
              data-target="#navbarTogglerList"
              aria-controls="navbarTogglerList"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span>Menu</span>
            </button>

          </div>
          {/* <div className="col-xs-12">
            <a href="mailTo:info@myleasidedentist.com" className="text-white">
              <i className="fa fa-inverse fa-envelope-square fa-1_5x pl-4 my-2" aria-hidden="true" />
            &nbsp;info@myleasidedentist.com
            </a>
            </div> */}
        </div>

      </div>
      <NavigationBar />
    </div>
  );
}
