
class ContactUs {
  static send(message) {
    return fetch('http://myleasidedentist.com:86/api/email', {
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

