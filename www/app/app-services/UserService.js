'use strict';
angular
  .module('artemisApp')
  .factory('UserService', UserService)
  UserService.$inject = ['$http']

  function UserService($http) {
    var service = {};

    service.GetByUsername = getByUserName;
    service.Login = Login;

    return service;

    function GetByUsername(user) {
      return $http.post(`https://artemis-api.herokuapp.com/${user.username}`, user)
      .then(handleSuccess, handleError('Error getting user by username'))
    }

    function login(username, password) {
      var response
      getByUserName(username)
      .then(function (user) {
        if (user !== null && user.password === password) {
          response = {sucess: true}
        } else {
          response = {sucess: false, message: 'Wrong username or password'}
        }
      })
    }

  function handleSuccess(res) {
    return res.data;
  }


  function handleError(error) {
    return function () {
      return {sucess: false, message: error}
    }
}
}
