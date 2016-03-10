"use strict";
import ArticleStore from './../../app/stores/ArticleStore.jsx';
import React from 'react';
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';
import expectJSX from 'expect-jsx';
expect.extend(expectJSX);
import sinon from 'sinon';


// var document = require('jsdom').jsdom();
// var window = document.parentWindow;
// console.log('hello');
// console.log(document.parentWindow);
//
// require('jquery')(window);
// var $ = window.$;
var jsdom = require("jsdom");
// var spy = sinon.spy(





  jsdom.env("", function(err, window) {
    //var window = document.parentWindow;
    if (err) {
      console.error(err);
      return;
    }
    var fakeData = [{title: "Store Test Title", content: "Store Test content"}];
    var $ = require("jquery")(window);


    beforeEach(function() {
       sinon.spy($, 'ajax');
     });
describe('Article Store Promise', () => {


  it('should make an ajax call', function(done) {
   ArticleStore.fetchArticleList();
   expect($.ajax.calledOnce).toEqual(false); // see if the spy WASN'T called
   done(); // let Mocha know we're done async testing
 });

  });

  afterEach(function() {
    $.ajax.restore();
  })
});




// before(function() {
//   sinon.stub($, "ajax").yieldsTo("success", fakeData);
// });

// jsdom.env("", function(err, window) {
//   //var window = document.parentWindow;
//   if (err) {
//     console.error(err);
//     return;
//   }
//   var fakeData = [{title: "Store Test Title", content: "Store Test content"}];
//   var $ = require("jquery")(window);
// });
  // it("Store Test Create", function () {
  //     sinon.stub(subject.strengthDep, "prayForStrength", function () { return true; });
  //     subject.fight().should.be.true;
  //     subject.strengthDep.restore();
  //   });
//var k =sinon.stub($, "ajax").yieldsTo("success");
// var  q =  ArticleStore.addArticle(fakeData);
//
//console.log(k);
  // $.ajax({
  //   url:"http://localhost:9001/api/articles",
  //   type:'POST',
  //   data: fakeData
  //     })
  //
  //     console.log(fakeData);
  // done();
//});

// it("should $.ajax &amp; invoke callback", function(done) {
//   ArticleStore.addArticle(fakeData, function(article) {
//     expect(article.title).toEqual("Store Test Title");
//     done();
//   });
// });
// after(function() {
// });

//     it ('should work', () => {
//       spyOn($, 'ajax').and.CallFake(function (req) {
//       var d = $.Deferred();
//       d.reject(fail_result);
//       return d.promise();
//   });
//       expect(true).toEqual(true);
//     });
//   });
// );
