import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import ContactUs from '../../api/contactUs';

const handleSubmitHandle = (e, data) => {
  e.prevent.default();
  console.log('Submission received!', data);
};

const required = value => (value ? undefined : 'Required');
const email = value =>
  (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
    'Invalid email address' : undefined);

const renderField = ({
  input, label, type, meta: { touched, error, warning },
}) => (
  <div className="form-group">
    <label>{label}</label>
    <input {...input} placeholder={label} type={type} className="form-control" />
    {touched && ((error && <span className="text-danger">{error}</span>) || (warning && <span>{warning}</span>))}

  </div>
);
// eslint-disable-next-line
class RequestAppointmentFormC extends Component {
  constructor(props) {
    super(props);
    this.state = { view: false };
  }


  render() {
    const {
      handleSubmit, pristine, reset, submitting,
    } = this.props;
    return (<div>
      { !this.state.view &&
      <div className="m-2">
        <form onSubmit={handleSubmit(data => ContactUs.send(data).then(response => this.setState({ view: true })))}>
          <Field
            className="form-control"
            name="name"
            component={renderField}
            type="text"
            id="name"
            label="Name"
          />
          <Field
            className="form-control"
            name="emailAddress"
            component={renderField}
            type="text"
            validate={email}
            label="Email address"
          />
          <Field
            className="form-control"
            name="phoneNumber"
            component={renderField}
            type="text"
            label="Phone"
          />
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
      }
      { this.state.view && <p> Thanks for your message , we will contact you shortly </p> }
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
