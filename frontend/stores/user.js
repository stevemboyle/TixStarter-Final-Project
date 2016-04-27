var Store = require('flux/utils').Store;
// var UserConstants = require('../constants/userConstants.js');
var AppDispatcher = require('../dispatcher/dispatcher.js');

var UserStore = new Store(AppDispatcher);

var _currentUser, _errors;

UserStore.__onDispatch = function(payload){
  switch(payload.actionType) {
    case "LOGIN":
      UserStore.login(payload.user);
      break;
    case "LOGOUT":
      UserStore.logout();
      break;
    case "ERROR":
      UserStore.setErrors(payload.errors);
      break;
  }
  UserStore.__emitChange();
};

UserStore.login = function(user){
  _currentUser = user;
  _errors = null;
  debugger;
};

UserStore.logout = function(){
  _currentUser = null;
  _errors = null;
};

UserStore.currentUser = function(){
  if (_currentUser){
    return $.extend({}, _currentUser);
    // TODO: What does this ^ mean?
  }
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
