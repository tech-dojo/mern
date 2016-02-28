import React from 'react';
import expect from 'expect';
import auth from './../../../app/services/Authentication';
import ArticleStore from './../../../app/stores/ArticleStore.jsx';
import Mongoose from 'mongoose';
Mongoose.connect('mongodb://localhost/reactdb-test');

function addArticle() {
  ArticleStore.addArticle(value, this.history);
}

describe('ArticleList', () => {
  const Article = { title:'Article Title', content:'Article Content' };
  it('should create an Article in Store', () => {
    ArticleStore.addArticle(Article);
  });
});
