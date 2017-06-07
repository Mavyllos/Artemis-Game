'use strict';
angular
  .module('artemisApp')
  .factory('UserService', UserService)
  UserService.$inject = ['$http']

  function UserService($http) {
    var service = {};

    service.getByUsername = getByUsername;
    service.Login = Login;
    service.Create = Create;

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
          window.localStorage['userId'] = user.id
           window.localStorage.getItem('userId')
          response = {success: true}
        } else {
          response = {success: false, message: 'Wrong username or password'}
        }
        callback(response)
      })
    }

    function Create(newUser) {
      return $http.post(`https://artemis-api.herokuapp.com/users`, newUser)
      .then(handleSuccess, handleError('Error creating user'))
      .then(console.log(newUser))
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
