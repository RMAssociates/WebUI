import React from 'react';
import GoogleMailAPI from './gmail';
// import google from 'googleapis';


// const oauth2Client = new window.gapi.auth.OAuth2(
//   '1082762806394-0bgde7ak01dvlo0jmvlnls9g74ol4fpq.apps.googleusercontent.com',
//   'kpl2Zm-ZFSlcAg2MgJ_V_EnF',
//   'http://localhost:3000',
// );

// // set auth as a global default
// window.gapi.options({
//   auth: oauth2Client,
// });

// const scopes = [
//   'https://mail.google.com/',
//   'https://www.googleapis.com/auth/gmail.modify',
//   'https://www.googleapis.com/auth/gmail.compose',
//   'https://www.googleapis.com/auth/gmail.send',
// ];

// const url = oauth2Client.generateAuthUrl({
//   // 'online' (default) or 'offline' (gets refresh_token)
//   access_type: 'offline',
//   // If you only need one scope you can pass it as a string
//   scope: scopes,
// });

// const gmail = window.gapi.gmail({
//   version: 'v1',
//   auth: 'oauth2Client',
// });
// const clientId = '1082762806394-0bgde7ak01dvlo0jmvlnls9g74ol4fpq.apps.googleusercontent.com';
// const apiKey = 'AIzaSyAuCDJMoWoR6DoVJBbu4BhCvkJWsvAmZ10';
// const scopes =
//   'https://www.googleapis.com/auth/gmail.readonly ' +
//   'https://www.googleapis.com/auth/gmail.send';

// function handleAuthResult(authResult) {
//   if (authResult && !authResult.error) {
//     window.gapi.client.load('gmail', 'v1');
//   } else {
//     // $('#authorize-button').removeClass('hidden');
//     // $('#authorize-button').on('click', () => {
//     //   handleAuthClick();
//     // });
//   }
// }
// function handleAuthClick() {
//   window.gapi.auth.authorize({
//     client_id: clientId,
//     scope: scopes,
//     immediate: false,
//   }, handleAuthResult);
//   return false;
// }
// function loadGmailApi() {
//   window.gapi.client.load('gmail', 'v1');
// }
// function checkAuth() {
//   window.gapi.auth.authorize({
//     client_id: clientId,
//     scope: scopes,
//     immediate: true,
//   }, handleAuthResult);
// }

// export function handleClientLoad() {
//   window.gapi.client.setApiKey(apiKey);
//   window.setTimeout(checkAuth, 1);
// }

export default function SendMail() {
  // You can use UTF-8 encoding for the subject using the method below.
  // You can also just use a plain string if you don't need anything fancy.

  const subject = 'Client contacted through Contact Us - Website';
  const utf8Subject = `=?utf-8?B?${Buffer.from(subject).toString('base64')}?=`;
  const messageParts = [
    'From: No reply <myleasidedentist@gmail.com>',
    'To: Admin Leaside <rozina.methani@gmail.com>',
    'Content-Type: text/html; charset=utf-8',
    'MIME-Version: 1.0',
    `Subject: ${subject}`,
    '',
    'This is a message just to say hello again.',
  ];
  const message = messageParts.join('\n');

  // The body needs to be base64url encoded.
  const encodedMessage = Buffer.from(message)
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');

  GoogleMailAPI.send(message);
  // const res = window.gapi.client.gmail.users.messages.send({
  //   userId: 'me',
  //   requestBody: {
  //     raw: encodedMessage,
  //   },
  // });
  // console.log(res.data);
  // return res.data;
}
