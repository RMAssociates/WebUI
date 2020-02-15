import React from 'react';
import ReviewsContainer from '../highOrderComponents/reviewsContainer';
import RequestAppointmentForm from '../subComponents/request-appointment-form';

export default function Introduction() {
  return (
    <div className="col-sm-12 pt-1 pt-md-3">
      <h1 className="text-success d-md-block text-center">Welcome to Leaside Village Dental</h1>
      {/* <h3 className="col-sm-12 text-muted mb-2 d-none d-md-flex">Offering professional oral care solutions.
        Changing lives for the better, One smile at a time
      </h3> */}
      <p className="bg-light">
         For the past several years we have provided dental services to your neighbours in Leaside
         and the surrounding areas. Our practice creates an
         environment of care and trust. Our wide range of services conveniently address your oral care needs.
      </p>
      <ul className="introduction list-inline">
        {/* Why choose us? */}
        <li className="list-inline-item"><i className="material-icons intro-icons">label_important</i>Accepting new patients </li>
        <li className="list-inline-item"><i className="material-icons intro-icons">label_important</i>Comfortable, relaxing environment </li>
        <li className="list-inline-item"><i className="material-icons intro-icons">label_important</i>Same day emergency appointments</li>
        <li className="list-inline-item"><i className="material-icons intro-icons">label_important</i>Weekend and evening appointments</li>
        {/* <div id="PatientThumbsUp" className="img-h-200" /> */}
      </ul>
      <div className="row">
        <div className="col-sm-12 col-md-7 mt-md-3 card"><ReviewsContainer /></div>
        <div className="col-sm-12 col-md-5 mt-md-3">
          <div className="card">
            <div className="card-header bg-success text-white">
           Contact Us
            </div>
            <RequestAppointmentForm />
          </div>
        </div>

      </div>
      <p className="col-sm-12 py-3 text-center text-info">
        <strong>Call us at 647-346-3368 and our knowledgeable team will be glad to assist you.
        </strong>
      </p>
    </div>
  );
}
