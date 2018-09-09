
class ContactUs {
  static send(message) {
    return fetch('http://35.190.171.119:86/api/email', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(message),
    }).then(response => console.log(response))
      .catch(error => error.json());
  }
}


export default ContactUs;

