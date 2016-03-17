"use strict";
import UserStore from './../../app/stores/UserStore.jsx';
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

  var user = {
    email: "abc@def.com",
    password: "password"
  };

  describe('User Store', () => {

    beforeEach(function() {
      sinon.spy(UserStore, "fetchUser");
      sinon.spy(restApi, "get");
      sinon.stub($, "ajax").returns(user);
    })

    afterEach(function() {
      UserStore.fetchUser.restore();
      restApi.get.restore();
      $.ajax.restore();
    })

    it('fetchUser should return user and RestApi get should be called once', function(done) {

      UserStore.fetchUser();

      expect(restApi.get.calledOnce).to.be.true;
      expect($.ajax.defaultBehavior.returnValue).to.equal(user);

      done(); // let Mocha know we're done async testing
    });

  });

  describe('User Store', () => {

    beforeEach(function() {
      sinon.spy(UserStore, "editUser");
      sinon.spy(restApi, "put");
      sinon.stub($, "ajax").returns(user);
    })

    afterEach(function() {
      UserStore.editUser.restore();
      restApi.put.restore();
      $.ajax.restore();
    })

    it('EditUser should return fakeData and RestApi put should be called once', function(done) {

      UserStore.editUser();

      expect(restApi.put.calledOnce).to.be.true;
      expect($.ajax.defaultBehavior.returnValue).to.equal(user);

      done(); // let Mocha know we're done async testing
    });

  });

});
