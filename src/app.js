'use strict';

var express = require('express');

var app = express();

var router = express.Router();

app.use('/', express.static('public'));

app.get('/api/tributes', function(req,res){
  res.send('these are Mexico great tributes');
});

app.listen(3000, function() {
  console.log('Your app is running on port 3000!');
});