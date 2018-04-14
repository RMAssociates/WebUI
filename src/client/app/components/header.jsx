import React from 'react';
import NavigationBar from './subComponents/navigationBar';
import MobileHeader from './header/mobile';

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
      <MobileHeader />
      <NavigationBar />
    </div>
  );
}
