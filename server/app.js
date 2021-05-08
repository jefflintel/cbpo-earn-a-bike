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
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');

//app configuration
let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended ': true}));
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../dist/cbpo-earn-a-bike')));
app.use('/', express.static(path.join(__dirname, '../dist/cbpo-earn-a-bike')));

//variables

//server port
const port = process.env.PORT || 3000;

//database connection string
const conn = 'mongodb+srv://test-user-1:test@cluster0.3rxnz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

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
