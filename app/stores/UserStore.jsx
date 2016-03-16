'use strict';
import restApi from "./RestAPI_Helper.js";

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
    restApi.get(`/users/${id}`).then((data) => {
      user = data;
      triggerListeners();
    });
  }

  function editUser(user, id) {
    restApi.put(`/users/${id}`, user).then((data) => {
      user = data;
      localStorage.username = data.username;
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
    profileUpdateMsg= '';
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
