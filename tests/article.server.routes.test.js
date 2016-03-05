'use strict';

var should = require('should'),
  request = require('supertest'),
  app = require('./../server/server.js'),
  mongoose = require('mongoose'),
  User = require('./../server/models/User.js'),
  Article = require('./../server/models/Article.js'),
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
      firstName: 'Mahfuz',
      lastName: 'Aftab',
      displayName: 'Full Name',
      username: 'username',
      email: credentials.email,
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

  it('should be able to save article instance if logged in', function(done) {
    agent.post('/auth/signin')
      .send(credentials)
      .expect(200)
      .end(function(signinErr, signinRes) {
        // Handle signin error
        if (signinErr)
          done(signinErr);

        // Get the userId
        var userId = user.id;
        // Save a new Article
        agent.post('/api/articles')
          .send(article)
          .expect(200)
          .end(function(articleSaveErr, articleSaveRes) {
            // Handle Article save error

            if (articleSaveErr)
              done(articleSaveErr);

            // Get a list of Articles
            agent.get('/api/articles')
              .end(function(articlesGetErr, articlesGetRes) {
                // Handle Article save error
                if (articlesGetErr) done(articlesGetErr);

                // Get Articles list
                var articles = articlesGetRes.body;
                // Set assertions

                (articles[0].user).should.equal(userId);
                (articles[0].title).should.match('Article Title');


                // Call the assertion callback
                done();
              });
          });
      });
  });

  it('should not be able to save article instance if not logged in', function(done) {
    agent.post('/api/articles')
      .send(article)
      .expect(401)
      .end(function(articleSaveErr, articleSaveRes) {
        // Call the assertion callback
        done(articleSaveErr);
      });
  });

  it('should not be able to save article instance if no title is provided', function(done) {
    // Invalidate title field
    article.title = '';

    agent.post('/auth/signin')
      .send(credentials)
      .expect(200)
      .end(function(signinErr, signinRes) {
        // Handle signin error
        if (signinErr) done(signinErr);

        // Get the userId
        var userId = user.id;

        // Save a new Article
        agent.post('/api/articles')
          .send(article)
          .expect(400)
          .end(function(articleSaveErr, articleSaveRes) {
            // Set message assertion
            (articleSaveRes.body.message).should.match('Title required');

            // Handle Article save error
            done(articleSaveErr);
          });
      });
  });

  it('should not be able to save article instance if no content is provided', function(done) {
    // Invalidate title field
    article.content = '';

    agent.post('/auth/signin')
      .send(credentials)
      .expect(200)
      .end(function(signinErr, signinRes) {
        // Handle signin error
        if (signinErr) done(signinErr);

        // Get the userId
        var userId = user.id;

        // Save a new Article
        agent.post('/api/articles')
          .send(article)
          .expect(400)
          .end(function(articleSaveErr, articleSaveRes) {
            // Set message assertion
            (articleSaveRes.body.message).should.match('Content required');

            // Handle Article save error
            done(articleSaveErr);
          });
      });
  });

  it('should be able to update article instance if signed in', function(done) {
    agent.post('/auth/signin')
      .send(credentials)
      .expect(200)
      .end(function(signinErr, signinRes) {
        // Handle signin error
        if (signinErr) done(signinErr);

        // Get the userId
        var userId = user.id;

        // Save a new Article
        agent.post('/api/articles')
          .send(article)
          .expect(200)
          .end(function(articleSaveErr, articleSaveRes) {
            // Handle Article save error
            if (articleSaveErr) done(articleSaveErr);

            // Update Article title
            article.title = 'This is Article Title';

            // Update existing Article
            agent.put('/articles/edit/api/articles/' + articleSaveRes.body._id)
              .send(article)
              .expect(200)
              .end(function(articleUpdateErr, articleUpdateRes) {
                // Handle Article update error
                if (articleUpdateErr) done(articleUpdateErr);

                // Set assertions
                (articleUpdateRes.body._id).should.equal(articleSaveRes.body._id);
                (articleUpdateRes.body.title).should.match('This is Article Title');

                // Call the assertion callback
                done();
              });
          });
      });
  });

  it('should be able to update article instance if signed in', function(done) {
    agent.post('/auth/signin')
      .send(credentials)
      .expect(200)
      .end(function(signinErr, signinRes) {
        // Handle signin error
        if (signinErr) done(signinErr);

        // Get the userId
        var userId = user.id;

        // Save a new Article
        agent.post('/api/articles')
          .send(article)
          .expect(200)
          .end(function(articleSaveErr, articleSaveRes) {
            // Handle Article save error
            if (articleSaveErr) done(articleSaveErr);

            // Update Article title
            article.content = 'This is Article Content.';

            // Update existing Article
            agent.put('/articles/edit/api/articles/' + articleSaveRes.body._id)
              .send(article)
              .expect(200)
              .end(function(articleUpdateErr, articleUpdateRes) {
                // Handle Article update error
                if (articleUpdateErr) done(articleUpdateErr);

                // Set assertions
                (articleUpdateRes.body._id).should.equal(articleSaveRes.body._id);
                (articleUpdateRes.body.content).should.match('This is Article Content.');

                // Call the assertion callback
                done();
              });
          });
      });
  });

  it('should be able to get a list of articles if not signed in', function(done) {
    // Create new article model instance
    var articleObj = new Article(article);

    // Save the article
    articleObj.save(function() {
      // Request articles
      agent.get('/api/articles')
        .end(function(req, res) {
          // Set assertion
          res.body.should.be.instanceof(Array).and.have.lengthOf(1);
          // Call the assertion callback
          done();
        });

    });
  });

  it('should be able to get a single article if not signed in', function(done) {
    // Create new article model instance
    var articleObj = new Article(article);

    // Save the article
    articleObj.save(function() {
      request(app).get('/articles/api/articles/' + articleObj._id)
        .end(function(req, res) {
          // Set assertion
          res.body.should.be.an.instanceOf(Object).and.have.property('title', article.title);

          // Call the assertion callback
          done();
        });
    });
  });

  it('should be able to delete an article if signed in', function(done) {
    agent.post('/auth/signin')
      .send(credentials)
      .expect(200)
      .end(function(signinErr, signinRes) {
        // Handle signin error
        if (signinErr) done(signinErr);

        // Get the userId
        var userId = user.id;

        // Save a new article
        agent.post('/api/articles')
          .send(article)
          .expect(200)
          .end(function(articleSaveErr, articleSaveRes) {
            // Handle article save error
            if (articleSaveErr) done(articleSaveErr);

            // Delete an existing article
            agent.delete('/articles/api/articles/' + articleSaveRes.body._id)
              .send(article)
              .expect(200)
              .end(function(articleDeleteErr, articleDeleteRes) {
                // Handle article error error
                if (articleDeleteErr) done(articleDeleteErr);

                // Set assertions
                (articleDeleteRes.body._id).should.equal(articleSaveRes.body._id);

                // Call the assertion callback
                done();
              });
          });
      });
  });

  afterEach(function(done) {
    User.remove().exec();
    Article.remove().exec();
    done();
  });
});
