import React from 'react';
import { Route } from 'react-router-dom';

export default function MobileHeader() {
  return (
    <div className="d-md-none header__mobile">
      <div className="row  bg-header-white">
        <div className="col-5 no-padding">
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
            <a href="tel:647-560-2430" className="text-emphasize">
              <i className="fa fa-phone-square fa-1x" aria-hidden="true" />
             &nbsp;647-346-3368
            </a>
          </span>
          <button
            className="navbar-toggler header__button--menu float-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerList"
            aria-controls="navbarTogglerList"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="text-uppercase">Menu</span>
          </button>

        </div>
        {/* <div className="col-xs-12">
            <a href="mailTo:info@myleasidedentist.com" className="text-white">
              <i className="fa fa-inverse fa-envelope-square fa-1_5x pl-4 my-2" aria-hidden="true" />
            &nbsp;info@myleasidedentist.com
            </a>
            </div> */}
      </div>

      <div className="row  bg-header-white">
        <div className="col-3 no-padding">
          <Route render={({ history }) => (
            <button
              className="btn btn-outline-success header__button"
              onClick={() => history.push('/meet-us')}
            >Meet Us
            </button>
        )}
          />
        </div>
        <div className="col-4 no-padding">
          <Route render={({ history }) => (
            <button
              className="btn btn-outline-success header__button"
              onClick={() => history.push('/address')}
            >Address &amp; Hours
            </button>
        )}
          />

        </div>
        <div className="col-5 no-padding">
          <button className="btn btn-success header__button">Book an Appointment</button>
        </div>
      </div>
    </div>
  );
}
