import React from 'react';
import Carousel from '../subComponents/carousel';
import HomeServices from '../home/homeServices';
import Introduction from '../home/introduction';
import MapLocation from '../address/mapLocation';
import { WorkHours } from '../subComponents/work-hours';
import RequestAppointmentForm from '../subComponents/request-appointment-form';

// eslint-disable-next-line
export const HomeContainer = () => (
  <div>
    <div className="row">
      <Carousel />
      {/* <HomeServices /> */}
      
      <Introduction />
    </div>
    <div className="row">
      <div className="col-md-6">
        <WorkHours />
      </div>
      <div className="col-md-6">
        <div className="card">
          <div className="card-header bg-success text-white">
           Contact Us
          </div>
          <RequestAppointmentForm />
        </div>
      </div>
    </div>
    <div className="">
      <MapLocation />
    </div>
    <div className="row my-5" />
  </div>
);
