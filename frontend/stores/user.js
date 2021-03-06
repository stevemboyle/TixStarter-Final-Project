var Store = require('flux/utils').Store;
// var UserConstants = require('../constants/userConstants.js');
var AppDispatcher = require('../dispatcher/dispatcher.js');

var UserStore = new Store(AppDispatcher);

var _currentUser, _errors;

// TODO: Logged In Method

UserStore.__onDispatch = function(payload){
  switch(payload.actionType) {
    case "LOGIN":
      UserStore.login(payload.user);
      window.userId = payload.user.id;
      break;
    case "LOGOUT":
      UserStore.logout();
      window.userId = undefined;
      break;
    case "ERROR":
      UserStore.setErrors(payload.errors);
      break;
  }
  UserStore.__emitChange();
};

UserStore.login = function(user){
  // debugger;
  if (user['username']){
    _currentUser = user;
    _errors = null;
  }
};

UserStore.logout = function(){
  _currentUser = null;
  _errors = null;
};

UserStore.loggedIn = function(){
  if (typeof UserStore.currentUser() === 'undefined'){
    return false;
  } else {
    return true;
  }
};

UserStore.user = function(){
  return _currentUser;
};

UserStore.currentUser = function(){
  if (_currentUser){
    return $.extend({}, _currentUser);
    // TODO: What does this ^ mean?
  }
};

UserStore.currentUserEvents = function(){
  // debugger;
};

UserStore.setErrors = function(errors){
  _errors = errors;
};

UserStore.errors = function(){
  if (_errors){
    return [].slice.call(_errors);
  }
};

module.exports = UserStore;
