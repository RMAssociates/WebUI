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
      <title>Leaside Village Dental | Laird , East York Toronto | Emergency Appointment</title>
      <meta
        name="description"
        content="You and your family can receive the highest level of treatment, including pediatric, prosthodontics, endodontics, oral surgery, Invisalign®, emergency and sedation dentistry.
        | Conveniently located in plaza on Laird Drive, | Dr. Irfan Momin has joined Leaside village dental."
      />
    </Helmet>
    <div className="row">
      <h4 className="alert-warning my-3 font-weight-bold">COVID-19 Update - We are glad to inform you that we will resume regular patient care starting Tuesday, June 2nd, 2020.
           
      </h4>
      <p className="alert-warning">However, we request any patients who have tested positive for Covid-19 or come in contact with someone who has tested positive or has had acute respiratory illness, to kindly wait until they have consulted their physician
      and/or are symptom free following 14 days of self isolation prior to booking an appointment.
    We thank you for your understanding and help in preventing the spread of Covid-19. We look forward to seeing you again and are happy to answer any questions you may have about
        the steps we are taking to keep you and our team safe.
        </p>
    </div>
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
