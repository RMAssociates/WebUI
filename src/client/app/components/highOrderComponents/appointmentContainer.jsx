import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import AppointmentForm from '../subComponents/request-appointment-form';

// eslint-disable-next-line
export default ({ match }) =>{
  return (
    <div>
      <Helmet>
        <title>Contact Us Or Book an Appointment @Leaside Village Dental East York , Laird drive</title>
        <meta
          name="description"
          content="Book an appointment online by an ease of a click and we can work to get your oral health on track."
        />
      </Helmet>
      <h1 className="my-3 display-4">Contact Us</h1>
      <AppointmentForm />
    </div>
  );
};
