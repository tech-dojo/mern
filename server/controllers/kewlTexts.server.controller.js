var mongoose = require('mongoose');
var KewlText = require('./../models/KewlText.js');
var errorHandler = require('./errors.server.controller');
var _ = require('lodash');
var figlet = require('figlet');

module.exports.list = function(req, res) {
  KewlText.find(function(err, data) {
    if (err) {
      return res.status(400).send({

  				message: errorHandler.getErrorMessage(err)
  			});
    } else {
      res.status(200).send(data);
    }
  });
};

module.exports.create = function(req, res) {
  var kewlText = new KewlText(req.body);
  kewlText.user = req.user;
  kewlText.save(function(err, data) {
    if (err) {
      return res.status(400).send({

  				message: errorHandler.getErrorMessage(err)
  			});
    } else {
      res.status(200).send(data);
    }
  });
};

module.exports.read = function(req, res) {
  res.json(req.kewlText);
};


exports.delete = function(req, res) {
	var kewlText = req.kewlText;
	kewlText.remove(function(err) {
		if (err) {
			return res.status(400).send();
		} else {
			res.json(kewlText);
		}
	});
};


module.exports.update = function(req, res) {
  var kewlText = req.kewlText;

  	kewlText = _.extend(kewlText, req.body);

  	kewlText.save(function(err) {
  		if (err) {
  			return res.status(400).send();
  		} else {
  			res.json(kewlText);
  		}
  	});
};

module.exports.getKewlText = function(req,res){
  var kewlText = req.kewlText;

  kewlText = _.extend(kewlText, req.body);

  var figlet = require('figlet');
 
  figlet('Hello World!!', function(err, data) {
      if (err) {
          console.log('Something went wrong...');
          console.dir(err);
          return res.status(400).send();
      } else {
        console.log(data);
        kewlText.figletText = data;
        res.json(kewlText)
      }
  });
};

exports.kewlTextByID = function(req, res, next, id) {
	KewlText.findById(id).populate('user', 'email').exec(function(err, kewlText) {
		if (err) return next(err);
		if (!kewlText) return next(new Error('Failed to load KewlText ' + id));
		req.kewlText = kewlText;
		next();
	});
};
