const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

app.get('/shout', (req, res) => {
  let name = req.query.name;
  let upperCaseName = name.toUpperCase();
  res.send(upperCaseName);
});

app.get('/fullName', (req, res) => {
  let firstName = req.query.firstName;
  let lastName = req.query.lastName;
  let fullName = `${firstName} ${lastName}`;
  res.send(fullName);
});

app.get('/date', (req, res) => {
  let month = req.query.month;
  let year = req.query.year;
  let formattedDate = `${month}, ${year}`;
  res.send(formattedDate);
});

app.get('/greet', (req, res) => {
  let name = req.query.name;
  let greetingMessage = 'Namaste ' + name + '!';
  res.send(greetingMessage);
});

app.get('/address', (req, res) => {
  let street = req.query.street;
  let city = req.query.city;
  let state = req.query.state;
  let formattedAddress = `${street}, ${city} , ${state}`;
  res.send(formattedAddress);
});

app.get('/email', (req, res) => {
  let username = req.query.username;
  let domain = req.query.domain;
  let formattedEmail = username + '@' + domain;
  res.send(formattedEmail);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
