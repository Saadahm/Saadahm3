const express = require("express");
const session = require('express-session');
const fs = require('fs');

const port = 3500;
const app = express();

let emails = [];

app.use(express.static('public'));
app.use(session({
  secret: 'my-secret',
  resave: true,
  saveUninitialized: true,
  cookie: {
    httpOnly: false
  }
}));

app.get('/', function (req, res) {
  if (req.query.newEmail) emails.push(req.query.newEmail);
  const formattedemails = emails.map((email)=> `<dd>${email}</dd>`).join(' ');
  const template = fs.readFileSync('./index.html', 'utf8');
  const view = template.replace('$registered$', formattedemails);
  res.send(view);
});
app.get('/', function (req, res) {
  if (req.query.newname) emails.push(req.query.newname);
  const formattedemails = emails.map((email)=> `<dd>${email}</dd>`).join(' ');
  const template = fs.readFileSync('./index.html', 'utf8');
  const view = template.replace('$registered$', formattedemails);
  res.send(view);
});
app.use(express.static(__dirname +"/public"));
app.listen(port, () => console.log(`The server is listening at http://localhost:${port}`));

