import React from 'react';
// eslint-disable-next-line
export const WorkHours = () => (
  <div className="card">
    <div className="card-header">
           Working Hours
    </div>
    <div className="card-body">
      <h5 className="card-title">Our work timings</h5>

      <dl className="row">
        <dt className="col-5">Monday</dt>
        <dd className="col-7">Closed</dd>

        <dt className="col-5">Tuesday</dt>
        <dd className="col-7">11:00 AM - 7:00 PM</dd>

        <dt className="col-5">Wednesday</dt>
        <dd className="col-7">11:00 AM - 7:00 PM</dd>

        <dt className="col-5">Thursday</dt>
        <dd className="col-7">11:00 AM - 7:00 PM</dd>


        <dt className="col-5">Friday</dt>
        <dd className="col-7">11:00 AM - 7:00 PM</dd>


        <dt className="col-5">Saturday</dt>
        <dd className="col-7">7:00 AM - 6:00 PM</dd>

        <dt className="col-5">Sunday</dt>
        <dd className="col-7">Closed</dd>

      </dl>
    </div>
  </div>
);
