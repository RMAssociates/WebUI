import React from 'react';
import GoogleMailAPI from './gmail';

export default function SendMail() {
  // You can use UTF-8 encoding for the subject using the method below.
  // You can also just use a plain string if you don't need anything fancy.

  const subject = 'Client contacted through Contact Us - Website';
  const utf8Subject = `=?utf-8?B?${Buffer.from(subject).toString('base64')}?=`;
  const messageParts = [
    'From: No reply <myleasidedentist@gmail.com>',
    'To: Admin Leaside <i@gmail.com>',
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
