"use strict";
import restApi from "./RestAPI_Helper.js";
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
    restApi.get("/api/articles").then((data) => {
      articleList = data;
      triggerListeners();
    });
  }
  function fetchArticle(id) {
    restApi.get(`api/articles/${id}`).then((data) => {
      article = data;
      triggerListeners();
    });
  };

  function addArticle(article, router) {
    restApi.post("/api/articles", article).then((g) => {
      article._id = g._id;
      router.push('/articles/' + g._id);
    }).catch((err) => {
      if (err.status == 401) {
        error = err.message;
        authCheck(router);
      }
    })
  }

  function editArticle(article, id, router) {
    restApi.put(`api/articles/${id}`, article).then((data) => {
      article = data;
      triggerListeners();
      router.push('/articles/' + data._id);
    }).catch((err) => {
      if (err.status == 401) {
        error = err.message;
        authCheck(router);
      }
    })
  }

  function deleteArticle(id, router) {

    restApi.del(`api/articles/${id}`).then((g) => {
      articleDeleted = 'true';
      triggerListeners();
      router.push('/articles');
    }).catch((err) => {
      if (err.status == 401) {
        error = err.message;
        authCheck(router);
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
  function authCheck(router) {
    auth.logout();
  router.push('/signin');
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
