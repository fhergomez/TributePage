'use strict';

var express = require('express');
var router = require('./api');

var app = express();

app.use('/', express.static('public'));

app.use('/api', router);

app.listen(3000, function() {
  console.log('Your app is running on port 3000!');
});