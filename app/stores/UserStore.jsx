"use strict";
let {get, post, del, put} = require("./RestAPI_Helper.js");

function UserStore() {
  let user = {},
    profileUpdateMsg = '',
    changeListeners = [];

  function triggerListeners() {
    changeListeners.forEach(function(listener) {
      listener();
    })
  };

  function fetchUser(id) {
    get(`/users/${id}`).then((data) => {
      user = data;
      triggerListeners();
    });
  }

  function editUser(user, id) {
    put(`/users/${id}`, user).then((data) => {
      user = data;
      profileUpdateMsg = 'Profile Updated Successfully';
      triggerListeners();
    })
  }

  function getUser() {
    return user;
  }
  function getProfileUpdateMsg() {
    return profileUpdateMsg;
  }
  function onChange(listener) {
    changeListeners.push(listener);
  }

  function removeChangeListener(listener) {
    var index = changeListeners.findIndex(i => i === listener);
    changeListeners.splice(index, 1);
  }

  return {
    fetchUser: fetchUser,
    editUser: editUser,
    getUser: getUser,
    getProfileUpdateMsg: getProfileUpdateMsg,
    onChange: onChange,
    removeChangeListener: removeChangeListener
  }
}

module.exports = new UserStore();
