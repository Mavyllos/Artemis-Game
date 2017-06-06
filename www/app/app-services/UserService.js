'use strict';
angular
  .module('app')
  .factory('UserService', UserService)
  UserService.$inject = ['$http']

  function UserService($http) {
    var service = {};

    function Create(user) {
      return $http.post(`https://artemis-api.herokuapp.com/${user.username}`, user)
      .then(handleSuccess, handleError('Error getting user by username'))
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
