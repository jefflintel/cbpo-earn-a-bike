/* ====================================
* title: app.js
* authors: Sarah Kovar, Jeff Lintel, Clayton Stacy
* date: 04/19/2021
* description: basic app setup
======================================*/

//require statements

const express = require('express');
const http = require('http');
const morgan = require('morgan');
const path = require('path');
const mongoose = require('mongoose');

//app configuration
let app = express();
app.use(express.json());
app.use(express.urlencoded({'extended ': true}));
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../dist/cbpo-earn-a-bike')));
app.use('/', express.static(path.join(__dirname, '../dist/cbpo-earn-a-bike')));

//variables

//server port
const port = process.env.PORT || 3000;

//database connection string
const conn = 'mongodb+srv://cbpo-admin:bikes1BIKES@cluster0.3rxnz.mongodb.net/cbpo-dev-db?retryWrites=true&w=majority'

//db connection string
mongoose.connect(conn, {
  promiseLibrary: require('bluebird'),
  useUnifiedTopology: true,
  useNewUrlParser: true
}).then(() => {
  console.debug(`Connection to the database instance was successful`);
}).catch(err => {
  console.log(`MongoDB Error: ${err.message}`);
})

//apis
/*
app.use('/api/security-questions', securityQuestionApi);
app.use('/api/users', UsersApi);
app.use('/api/session', SessionApi);
app.use('/api/roles', RoleApi);
*/

//create and start server
http.createServer(app).listen(port, function() {
  console.log(`application started and listening on port: ${port}`);
});
