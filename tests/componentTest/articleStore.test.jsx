"use strict";
let $ = require('jquery');
import ArticleStore from './../../app/stores/ArticleStore.jsx';
import React from 'react';
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';
import expectJSX from 'expect-jsx';
expect.extend(expectJSX);
import sinon from 'sinon';
// var spy = sinon.spy(
   describe ('Article Store Promise', () => {
     var fakeData = [{
         title: "Store Test Title",
         content: "Store Test content"
       }];

       before(function () {
        sinon.stub($, "ajax").yieldsTo("success", fakeData);
    });

    it("should $.ajax &amp; invoke callback", function (done) {
        ArticleStore.addArticle(fakeData, function (article) {
            expect(article.title).toEqual("Store Test Title");
            done();
        });
    });
    after(function () { $.ajax.restore(); });
});




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
