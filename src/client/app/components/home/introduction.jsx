import React from 'react';
import { RequestAppointment } from '../subComponents/request-appointment';
import ReviewsContainer from '../highOrderComponents/reviewsContainer';

export default function Introduction() {
  return (
    <div className="col-sm-12 pt-1">
      <h1 className="col-sm-12 text-success my-3 d-none d-md-block">Welcome to Leaside Village Dental</h1>
      <h3 className="col-sm-12 text-muted mb-2 d-none d-md-flex">Offering professional oral care solutions.
        Changing lives for the better, One smile at a time
      </h3>
      <p className="col-sm-12 bg-highlighter-green text-light">
        Our patients love us , Read what our patients have to say About us or come in and find out why
      </p>
      {/* <RequestAppointment /> */}
      <p className="col-sm-12 pt-2">
         For the past several years we have provided dental services to your neighbours in Leaside
         and the surrounding areas. Led by Dr. Sohila Methani, who features close to 20 years of
         dental experience, our practice creates an
         environment of care and trust. Our wide range of services conveniently address your oral care needs.
      </p>
      <div className="row">
        <div>
          <ul>
            {/* Why choose us? */}
            <li>Accepting new patients </li>
            <li>Comfortable, relaxing environment </li>
            <li>Same day emergency appointments</li>
            <li>Weekend and evening appointments</li>
          </ul>
        </div>
        <div><ReviewsContainer /></div>
      </div>
      <p className="col-sm-12 py-3 text-center text-info">
        <strong>Call us at 647-346-3368 and our knowledgeble team will be glad to assist you.
        </strong>
      </p>
    </div>
  );
}
