'use strict';

const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
app.set('socketIo', io);

const port = 8000;

app.use(bodyParser.json());

app.use((err, req, res, next) => {
  console.error(err);
  // body-parser will set this to 400 if the json is in error
  if (err.status === 400)
    return res.status(err.status).send('Invalid Json format!');

  return next(err);
});

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

require('./app/routes')(app, {});

http.listen(port, () => {
  console.log('We are live on ' + port);
});
