"use strict";
let {get, post, del, put} = require("./RestAPI_Helper.js");
import auth from './../services/Authentication';

function ArticleStore() {

  let articleList = {},
    changeListeners = [],
    article = {},
    error = '',
    articleDeleted = 'false';

  function triggerListeners() {
    changeListeners.forEach(function(listener) {
      listener();
    })
  };
  function fetchArticleList() {
    get("/api/articles").then((data) => {
      articleList = data;
      triggerListeners();
    });
  }
  function fetchArticle(id) {
    get(`api/articles/${id}`).then((data) => {
      article = data;
      triggerListeners();
    });
  };
   
  function addArticle(article, history) {
    post("/api/articles", article).then((g) => {
      article._id = g._id;
      history.pushState(null, '/articles/' + g._id);
    }).catch((err) => {
      if (err.status == 401) {
        error = err.message;
        authCheck(history);
      }
    })
  }

  function editArticle(article, id, history) {

    put(`api/articles/${id}`, article).then((data) => {
      article = data;
      triggerListeners();
      history.pushState(null, '/articles/' + data._id);
    }).catch((err) => {
      if (err.status == 401) {
        error = err.message;
        authCheck(history);
      }
    })
  }

  function deleteArticle(id, history) {

    del(`api/articles/${id}`).then((g) => {
      articleDeleted = 'true';
      triggerListeners();
      history.pushState(null, '/articles');
    }).catch((err) => {
      if (err.status == 401) {
        error = err.message;
        authCheck(history);
      }
    })
  }

  function getArticleList() {
    return articleList;
  };

  function getArticle() {
    articleDeleted = 'false';
    return article;
  };

  function articleDeletionStatus() {
    return articleDeleted;
  };

  function onChange(listener) {
    changeListeners.push(listener);
  }

  function removeChangeListener(listener) {
    var index = changeListeners.findIndex(i => i === listener);
    changeListeners.splice(index, 1);
  }
  function authCheck(history) {
    auth.logout();
    history.pushState(null, '/signin', {session: false});
  }

  function getError() {
    return error;
  };

  return {
    onChange: onChange,
    removeChangeListener: removeChangeListener,
    fetchArticle: fetchArticle,
    getError: getError,
    addArticle: addArticle,
    editArticle: editArticle,
    getArticleList: getArticleList,
    getArticle: getArticle,
    deleteArticle: deleteArticle,
    fetchArticleList: fetchArticleList,
    articleDeletionStatus: articleDeletionStatus
  }
}

module.exports = new ArticleStore();
