
class GoogleMailAPI {
  static send(message) {
    return fetch('https://www.googleapis.com/upload/gmail/v1/users/me/messages/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'message/rfc822',
        Authorization: `Bearer ${GoogleMailAPI.getToken()}`,
        credentials: 'include',
      },
      body: message,
    }).then(response => console.log(response))
      .catch(error => error.json());
  }

  static formUrlEncoded(obj) {
    return Object.keys(obj).map(k => `${encodeURIComponent(k)}=${encodeURIComponent(obj[k])}`).join('&');
  }

  static getToken() {
    return fetch('https://www.googleapis.com/oauth2/v4/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        credentials: 'include',
      },
      body: GoogleMailAPI.formUrlEncoded({
        client_secret: 'kpl2Zm-ZFSlcAg2MgJ_V_EnF',
        grant_type: 'authorization_code',
        client_id: '1082762806394-0bgde7ak01dvlo0jmvlnls9g74ol4fpq.apps.googleusercontent.com',
        redirect_uri: 'https://myleasidedentist.com/oauth2callback',
        code: '4/OAApTOqjtcWnE_zOxvyMw9QQYwzi6YbqI4GN_6lQsqcWMiY3peCpNyvvPJ34J2Va3_PLiKTB2WC98-Zyv5Cqhzo#',
      }),
    }).then((response) => { console.log(response); return response; })
      .catch(error => error.json());
  }
}


export default GoogleMailAPI;
