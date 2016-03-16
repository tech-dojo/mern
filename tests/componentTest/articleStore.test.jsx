"use strict";
import ArticleStore from './../../app/stores/ArticleStore.jsx';
import restApi from "./../../app/stores/RestAPI_Helper.js";
import sinon from 'sinon';
import chai from 'chai';
var expect = chai.expect;
var jsdom = require("jsdom");

jsdom.env("", function(err, window) {
  if (err) {
    console.error(err);
    return;
  }

  var $ = require("jquery")(window);

  var fakeDataArray = [
    {
      title: "Store Test Title1",
      content: "Store Test content1"
    }, {
      title: "Store Test Title2",
      content: "Store Test content2"
    }, {
      title: "Store Test Title3",
      content: "Store Test content3"
    }
  ];

  var fakeData = {
    title: "Store Test Title1",
    content: "Store Test content1"
  };

  describe('Article Store', () => {

    beforeEach(function() {
      sinon.spy(ArticleStore, "fetchArticleList");
      sinon.spy(restApi, "get");
      sinon.stub($, "ajax").returns(fakeDataArray);
    })

    afterEach(function() {
      ArticleStore.fetchArticleList.restore();
      restApi.get.restore();
      $.ajax.restore();
    })

    it('FetchArticleList should return fakeDataArray and RestApi get should be called once', function(done) {

      ArticleStore.fetchArticleList();

      expect(restApi.get.calledOnce).to.be.true;
      expect($.ajax.defaultBehavior.returnValue).to.equal(fakeDataArray);

      done(); // let Mocha know we're done async testing
    });

  });

  describe('Article Store', () => {

    beforeEach(function() {
      sinon.spy(ArticleStore, "fetchArticle");
      sinon.spy(restApi, "get");
      sinon.stub($, "ajax").returns(fakeData);
    })

    afterEach(function() {
      ArticleStore.fetchArticle.restore();
      restApi.get.restore();
      $.ajax.restore();
    })

    it('FetchArticle should return fakeData and RestApi get should be called once', function(done) {

      ArticleStore.fetchArticle();

      expect(restApi.get.calledOnce).to.be.true;
      expect($.ajax.defaultBehavior.returnValue).to.equal(fakeData);

      done(); // let Mocha know we're done async testing
    });

  });

  describe('Article Store', () => {

    beforeEach(function() {
      sinon.spy(ArticleStore, "addArticle");
      sinon.spy(restApi, "post");
      sinon.stub($, "ajax").returns(fakeData);
    })

    afterEach(function() {
      ArticleStore.addArticle.restore();
      restApi.post.restore();
      $.ajax.restore();
    })

    it('AddArticle should return fakeData and RestApi post should be called once', function(done) {

      ArticleStore.addArticle();

      expect(restApi.post.calledOnce).to.be.true;
      expect($.ajax.defaultBehavior.returnValue).to.equal(fakeData);

      done(); // let Mocha know we're done async testing
    });

  });

  describe('Article Store', () => {

    beforeEach(function() {
      sinon.spy(ArticleStore, "editArticle");
      sinon.spy(restApi, "put");
      sinon.stub($, "ajax").returns(fakeData);
    })

    afterEach(function() {
      ArticleStore.editArticle.restore();
      restApi.put.restore();
      $.ajax.restore();
    })

    it('editArticle should return fakeData and RestApi put should be called once', function(done) {

      ArticleStore.editArticle();

      expect(restApi.put.calledOnce).to.be.true;
      expect($.ajax.defaultBehavior.returnValue).to.equal(fakeData);

      done(); // let Mocha know we're done async testing
    });

  });

  describe('Article Store', () => {

    beforeEach(function() {
      sinon.spy(ArticleStore, "deleteArticle");
      sinon.spy(restApi, "del");
      sinon.spy($, "ajax");
    })

    afterEach(function() {
      ArticleStore.deleteArticle.restore();
      restApi.del.restore();
      $.ajax.restore();
    })

    it('AddArticle should return fakeData and RestApi post should be called once', function(done) {

      ArticleStore.deleteArticle();

      expect(restApi.del.calledOnce).to.be.true;

      done(); // let Mocha know we're done async testing
    });

  });

});
