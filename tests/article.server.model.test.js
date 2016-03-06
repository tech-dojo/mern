'use strict';

/**
 * Module dependencies.
 */
var should = require('should'),
	mongoose = require('mongoose'),
  User = require('./../server/models/User.js'),
	Article = require('./../server/models/Article.js');
mongoose.connect ('mongodb://localhost/reactdb-test');
/**
 * Globals
 */
var user, article;

/**
 * Unit tests
 */

console.log('Running Backend Tests');

describe('Article Model Unit Tests:', function() {
	beforeEach(function(done) {
		user = new User({
			firstName: 'TD',
			lastName: 'BD',
			email: 'abc@def.com',
			username: 'username',
			password: 'password'
		});

		user.save(function() {
			article = new Article({
				title: 'Article Title',
				content: 'Article Content',
				user: user
			});

			done();
		});
	});

	describe('Method Save', function() {
		it('should be able to save without problems', function(done) {
			return article.save(function(err) {
				should.not.exist(err);
				done();
			});
		});

		it('should be able to show an error when try to save without title', function(done) {
			article.title = '';

			return article.save(function(err) {
				should.exist(err);
				done();
			});
		});

		it('should be able to show an error when try to save without content', function(done) {
			article.content = '';
			return article.save(function(err) {
				should.exist(err);
				done();
			});
		});
	});

	afterEach(function(done) {
		Article.remove().exec(function() {
			User.remove().exec(done);
		});
	});
});
