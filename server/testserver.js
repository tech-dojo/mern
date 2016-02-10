'use strict';
require("babel/register");

var mongoose = require ('mongoose');
var express = require ('express');

var uri = process.env.MONGOLAB_URI || 'mongodb://localhost/reactdb-test';
var db = mongoose.connect(uri,function(){

});

require('./models/Article.js');
require('./models/User.js');
var app = require('./express.js')(db);

// Bootstrap passport config
require('./passport')();

app.listen(app.get('port'), function(){
})
exports = module.exports = app;
