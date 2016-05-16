'use strict';

var express = require('express');
var favorites = require('../../mock/favorites.json')
var router = express.Router();

router.get('/favorites', function(req,res){
  res.json({favorites: favorites});
});

//TODO: add POST route to add favorite

//TODO: add PUT route to update existing entries

//TODO: add DELETE route to delete entries

module.exports = router;