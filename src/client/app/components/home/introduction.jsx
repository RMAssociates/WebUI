import React from 'react';
import { RequestAppointment } from '../subComponents/request-appointment';
import ReviewsContainer from '../highOrderComponents/reviewsContainer';

export default function Introduction() {
  return (
    <div className="col-sm-12 pt-1">
      <h1 className="text-success d-md-block text-center">Welcome to Leaside Village Dental</h1>
      <h3 className="col-sm-12 text-muted mb-2 d-none d-md-flex">Offering professional oral care solutions.
        Changing lives for the better, One smile at a time
      </h3>

      {/* <RequestAppointment /> */}
      <p className="col-sm-12 pt-2 text-center">
         For the past several years we have provided dental services to your neighbours in Leaside
         and the surrounding areas. Our practice creates an
         environment of care and trust. Our wide range of services conveniently address your oral care needs.
      </p>
      <div className="row">
        <div className="col-md-6 my-3 f-600">
          <img src="public/assets/irfan-momin1.png" className="rounded-circle float-left img-fluid img-h-200" alt="..." />
        Led by Dr. Sohila Methani, who features close to 20 years of
         dental experience,
        </div>
        <div className="col-md-6 my-3 f-600">
          <img src="public/assets/irfan_momin.png" className="rounded float-right img-fluid img-h-200" alt="..." />
        Dr. Irfan Momin completed his DDS from University of California San Francisco, school of dentistry in 2010 with an award for professional development. He has been practicing in the GTA ever since. Prior to this, he had been practicing dentistry in India for almost a decade. Dr. Momin is passionate about dentistry and about providing the best possible care for his patients.
        When he is not working on his passion, he likes playing cricket, traveling and spending time with his family.
        </div>
      </div>
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
        <strong>Call us at 647-346-3368 and our knowledgeable team will be glad to assist you.
        </strong>
      </p>
    </div>
  );
}
