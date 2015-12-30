'use strict';
require("babel/register");

var mongoose = require ('mongoose');
var express = require ('express');

var uri = process.env.MONGOLAB_URI || 'mongodb://localhost/reactdb';
var db = mongoose.connect(uri,function(){
	require('./seeds.js');
});

require('./models/Article.js');
require('./models/User.js');
var app = require('./express.js')(db);

// Bootstrap passport config
require('./passport')();

app.listen(app.get('port'), function(){
  console.log('Node App is Running on port', app.get('port'));
})

module.exports = app;
