'use strict';
angular
  .module('artemisApp')
  .factory('UserService', UserService)
  UserService.$inject = ['$http']

  function UserService($http) {
    var service = {};

    service.getByUsername = getByUsername;
    service.Login = Login;

    return service;

    function getByUsername(username) {
      return $http.get(`https://artemis-api.herokuapp.com/users/?user_name=${username}`)
      .then(handleSuccess, handleError('Error getting user by username'))
    }

    function Login(username, password, callback) {
      var response
      getByUsername(username)
      .then(function (user) {
        user = user.result[0]
        if (user !== null && user.password === password) {
          response = {success: true}
        } else {
          response = {success: false, message: 'Wrong username or password'}
        }
        callback(response)
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
