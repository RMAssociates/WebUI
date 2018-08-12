import React from 'react';
import SendMail from '../../api/messageComposer';

// eslint-disable-next-line
const RequestAppointmentForm = () => (
  <div>
    <form>
      <div className="form-group">
        <label>Name</label>
        <input type="text" className="form-control" id="name" placeholder="Name" />
      </div>
      <div className="form-group">
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
        />
      </div>
      <div className="form-group">
        <label>Phone</label>
        <input type="tel" className="form-control" id="name" placeholder="XXX-XXX-XXXX" />
      </div>
      <button type="button" className="btn btn-primary" onClick={() => SendMail()} >Submit</button>
    </form>
  </div>
);

export default RequestAppointmentForm;
