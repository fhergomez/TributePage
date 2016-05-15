'use strict';

var express = require('express');

var app = express();

app.use('/', express.static('public'));

var router = express.Router();

router.get('/tributes', function(req,res){
  res.json({todos: {}});
  });
});

app.use('/api', router);

app.listen(3000, function() {
  console.log('Your app is running on port 3000!');
});