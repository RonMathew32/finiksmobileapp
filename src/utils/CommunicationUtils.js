import React from 'react';
import { Linking, Platform } from 'react-native';

export const makePhoneCall = (phoneNumber) => {
  const url = `tel:${phoneNumber}`;
  openLink(url, 'Phone app');
};

export const sendEmail = (emailAddress, emailSubject, message) => {
  const url = `mailto:${emailAddress}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(message)}`;
  openLink(url, 'Email app');
};

export const openMessageApp = (phoneNumber, message) => {
  let url = '';
  if (Platform.OS === 'android') {
    url = `sms:${phoneNumber}?body=${encodeURIComponent(message)}`;
  } else if (Platform.OS === 'ios') {
    url = `sms:${phoneNumber}&body=${encodeURIComponent(message)}`;
  }
  openLink(url, 'Message app');
};

const openLink = (url, appName) => {
  Linking.openURL(url)
    .then(() => console.log(`${appName} opened`))
    .catch((err) => console.error(`Error opening ${appName.toLowerCase()}:`, err));
};
