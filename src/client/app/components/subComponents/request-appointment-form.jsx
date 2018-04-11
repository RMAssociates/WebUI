import React from 'react';
// eslint-disable-next-line
const RequestAppointmentForm = () => (
  <div>
    <form>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" className="form-control" id="name" placeholder="Name" />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
        />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone</label>
        <input type="tel" className="form-control" id="name" placeholder="XXX-XXX-XXXX" />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  </div>
);

export default RequestAppointmentForm;
