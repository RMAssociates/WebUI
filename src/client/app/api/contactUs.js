
class ContactUs {
  static send(message) {
    return fetch('https://www.myleasidedentist.ca:8443/api/email', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(message),
    }).then(response => true)
      .catch(error => false);
  }
}


export default ContactUs;

