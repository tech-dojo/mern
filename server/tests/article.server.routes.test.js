'use strict';

var should = require('should'),
	request = require('supertest'),
	app = require('./../testserver.js'),
	mongoose = require('mongoose'),
	User = require('./../models/User.js'),
	Article = require('./../models/Article.js'),
	agent = request.agent(app);
/**
 * Globals
 */
var credentials, user, article;

/**
 * Article routes tests
 */

describe('Article CRUD tests', function() {
	beforeEach(function(done) {
		// Create user credentials
		credentials = {
			email: 'test@test.com',
			password: 'password123'
		};


		// Create a new user
		user = new User({
			firstName: 'Aq',
			lastName: 'Name',
			displayName: 'Full Name',
			email: 'test@test.com',
			username: "username",
			password: credentials.password,
			provider: 'local'
		});

		// Save a user to the test db and create new Article
		user.save(function() {

			article = new Article({
				title: 'Article Title',
				content: 'Article Content'
			});

			done();
		});
	});

	it('should be able to save Fooditem instance if logged in', function(done) {
		agent.post('/auth/signin')
			.send(credentials)
			.expect(200)
			.end(function(signinErr, signinRes) {
				// Handle signin error
				if (signinErr)
				done(signinErr);

				// Get the userId
				var userId = user.id;
console.log(userId);
				// Save a new Fooditem
				agent.post('/api/articles')
					.send(article)
					.expect(200)
					.end(function(fooditemSaveErr, fooditemSaveRes) {
						// Handle Fooditem save error

						if (fooditemSaveErr)
						done(fooditemSaveErr);

						// Get a list of Fooditems
						agent.get('/api/articles')
							.end(function(fooditemsGetErr, fooditemsGetRes) {
								// Handle Fooditem save error
								if (fooditemsGetErr) done(fooditemsGetErr);

								// Get Fooditems list
								var articles = fooditemsGetRes.body;
								// Set assertions
							//	console.log(articles[0]._id);

								(articles[0].user).should.equal(userId);
								(articles[0].title).should.match('Article Title');


								// Call the assertion callback
								done();
							});
					});
			});
	});

	afterEach(function(done) {
		 User.remove().exec();
//Article.remove().exec();
		done();
	});
});
