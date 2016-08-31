"use strict";
let {get, post, del, put} = require("./RestAPI_Helper.js");
import auth from './../services/Authentication';

function KewlTextStore() {

  let kewlTextList = {},
    changeListeners = [],
    kewlText = {},
    error = '',
    kewlTextDeleted = 'false';

  function triggerListeners() {
    changeListeners.forEach(function(listener) {
      listener();
    })
  };
  function fetchKewlTextList() {
    get("/api/kewlTexts").then((data) => {
      kewlTextList = data;
      triggerListeners();
    });
  }
  function fetchKewlText(id) {
    get(`api/kewlTexts/${id}`).then((data) => {
      kewlText = data;
      triggerListeners();
    });
  };

  function addKewlText(kewlText, history) {
    post("/api/kewlTexts", kewlText).then((g) => {
      kewlText._id = g._id;
      history.pushState(null, '/kewlTexts/' + g._id);
    }).catch((err) => {
      if (err.status == 401) {
        error = err.message;
        authCheck(history);
      }
    })
  }
  
  function renderKewlText(textToRender) {
      post("/api/kewlTexts/renderText", textToRender).then((g) => {
        kewlText._id = g._id;
        history.pushState(null, '/kewlTexts/' + g._id);
      }).catch((err) => {
        if (err.status == 401) {
          error = err.message;
          authCheck(history);
        }
      })
    }

  function editKewlText(kewlText, id, history) {

    put(`api/kewlTexts/${id}`, kewlText).then((data) => {
      kewlText = data;
      triggerListeners();
      history.pushState(null, '/kewlTexts/' + data._id);
    }).catch((err) => {
      if (err.status == 401) {
        error = err.message;
        authCheck(history);
      }
    })
  }

  function deleteKewlText(id, history) {

    del(`api/kewlTexts/${id}`).then((g) => {
      kewlTextDeleted = 'true';
      triggerListeners();
      history.pushState(null, '/kewlTexts');
    }).catch((err) => {
      if (err.status == 401) {
        error = err.message;
        authCheck(history);
      }
    })
  }

  function getKewlTextList() {
    return kewlTextList;
  };

  function getKewlText() {
    kewlTextDeleted = 'false';
    return kewlText;
  };

  function KewlTextDeletionStatus() {
    return kewlTextDeleted;
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
    fetchKewlText: fetchKewlText,
    getError: getError,
    addKewlText: addKewlText,
    editKewlText: editKewlText,
    getKewlTextList: getKewlTextList,
    getKewlText: getKewlText,
    deleteKewlText: deleteKewlText,
    renderKewlText: renderKewlText,
    fetchKewlTextList: fetchKewlTextList,
    KewlTextDeletionStatus: KewlTextDeletionStatus
  }
}

module.exports = new KewlTextStore();
