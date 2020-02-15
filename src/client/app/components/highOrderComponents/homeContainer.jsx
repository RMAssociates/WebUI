import React from 'react';
import { Helmet } from 'react-helmet';
import Carousel from '../subComponents/carousel';
import HomeServices from '../home/homeServices';
import Introduction from '../home/introduction';
import MapLocation from '../address/mapLocation';
import { WorkHours } from '../subComponents/work-hours';
import RequestAppointmentForm from '../subComponents/request-appointment-form';
import OurServices from '../subComponents/our-services';

import EducationVideo from '../subComponents/youTube-edu';

// eslint-disable-next-line
export const HomeContainer = () => (
  <div>
    <Helmet>
      <title>Leaside Village Dental | Laird , East York Toronto |Emergency Appointment</title>
      <meta
        name="description"
        content="We have provided dental services to your neighbours in Leaside and the surrounding areas. Our practice creates an environment of care and trust. Our wide range of services conveniently address your oral care needs.
        | Dr. Irfan Momin has joined Leaside village dental."
      />
    </Helmet>
    <div className="row">
      <Carousel />
      {/* <HomeServices /> */}
      <Introduction />
      {/* <EducationVideo /> */}
      <OurServices />
    </div>
    {/* <div className="row">
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
    </div> */}
    <div className="">
      <MapLocation />
    </div>
    <div className="row my-5" />
  </div>
);
