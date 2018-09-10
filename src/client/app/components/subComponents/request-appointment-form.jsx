import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import ContactUs from '../../api/contactUs';

const handleSubmitHandle = (e, data) => {
  e.prevent.default();
  console.log('Submission received!', data);
};

// eslint-disable-next-line
class RequestAppointmentFormC extends Component {
  render() {
    const {
      handleSubmit, pristine, reset, submitting,
    } = this.props;
    return (
      <div className="m-2">
        <form onSubmit={handleSubmit(data => ContactUs.send(data))}>
          <div className="form-group  w-75">
            <label htmlFor="name">Name</label>
            <Field
              className="form-control"
              name="name"
              component="input"
              type="text"
            />
          </div>
          <div className="form-group  w-50">
            <label htmlFor="emailAddress">Email address</label>
            <Field
              className="form-control"
              name="emailAddress"
              component="input"
              type="text"
            />
          </div>
          <div className="form-group w-50">
            <label>Phone</label>
            <Field
              className="form-control"
              name="phoneNumber"
              component="input"
              type="text"
            />
          </div>
          <div className="form-group">
            <label>Message</label>
            <Field
              className="form-control"
              name="message"
              component="textarea"
            />
          </div>
          <button
            className="btn btn-outline-primary w-50 offset-3"
            type="submit"
            disabled={pristine || submitting}
          >Submit
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = state => ({
  abc: state.form,
});

const mapStateToProps = dispatch => ({
  // ...
});

const RequestAppointmentForm = connect(
  mapStateToProps,
  mapDispatchToProps,
)(RequestAppointmentFormC);

export default reduxForm({
  form: 'contactus', // a unique identifier for this form
})(RequestAppointmentForm);
