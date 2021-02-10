import React from 'react';
// eslint-disable-next-line
export const WorkHours = () => (
  <div className="card h-100">
    <div className="card-header bg-success text-white">
           Working Hours
    </div>
    <div className="card-body">
      
      <dl className="row">
        <dt className="col-5">Monday</dt>
        <dd className="col-7 text-danger" >Closed</dd>

        <dt className="col-5">Tuesday</dt>
        <dd className="col-7">10:00 AM - 07:00 PM</dd>

        <dt className="col-5">Wednesday</dt>
        <dd className="col-7">10:00 AM - 07:00 PM</dd>

        <dt className="col-5">Thursday</dt>
        <dd className="col-7">10:00 AM - 07:00 PM</dd>


        <dt className="col-5">Friday</dt>
        <dd className="col-7">11:00 AM - 05:00 PM</dd>


        <dt className="col-5">Saturday</dt>
        <dd className="col-7">09:00 AM - 06:00 PM</dd>

        <dt className="col-5">Sunday</dt>
        <dd className="col-7 text-danger">Closed</dd>

      </dl>
    </div>
  </div>
);
