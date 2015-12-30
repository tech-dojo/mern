var mongoose = require('mongoose');
var Article = require('./../models/Article.js');
var _ = require('lodash');

module.exports.list = function(req, res) {
  Article.find(function(error, data) {
    if (error) {} else {
      res.send(data);
    }
  });
};

module.exports.create = function(req, res) {
  console.log(req.body);
  var article = new Article(req.body);
  article.user = req.user;
  article.save(function(err, data) {
    if (err) {
      res.status(501).send();
    } else {
      res.status(200).send(data);
    }
  });
};

module.exports.read = function(req, res) {
  res.json(req.article);
};


exports.delete = function(req, res) {
	var article = req.article;

	article.remove(function(err) {
		if (err) {
			return res.status(400).send();
		} else {
			res.json(article);
		}
	});
};


module.exports.update = function(req, res) {
  var article = req.article;

  	article = _.extend(article, req.body);

  	article.save(function(err) {
  		if (err) {
  			return res.status(400).send();
  		} else {
  			res.json(article);
  		}
  	});
};

exports.articleByID = function(req, res, next, id) {
	Article.findById(id).populate('user', 'email').exec(function(err, article) {
		if (err) return next(err);
		if (!article) return next(new Error('Failed to load article ' + id));
		req.article = article;
		next();
	});
};
