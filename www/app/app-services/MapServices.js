'use strict'
angular
  .module('artemisApp')
  .factory('MapService', MapService)
  MapService.$inject = ['$http', '$q']

  function MapService($http, $q) {
    var service = {};

    service.Check = Check;

    return service;




    function Check(game_id, question_id) {
      var key = 'key=AIzaSyCiCYfdcXWF0z_Zmb1JFqJORxubR2-sjLs';

      var target = {
        lat: 47.601518,
        long: -122.334297
      }

      var phone = {
        lat: 47.598951,
        long: -122.333802
      }

      game_id = 2;
      question_id = 1;

      var targetCoords = $http.get(`https://artemis-api.herokuapp.com/questions/?game_id=${game_id}&id=${question_id}`)
      var playerData = phone;

      $q.all([targetCoords, playerData])
        .then(function(results){
          console.log(results)
        })

      // $http.get(`https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${phone.lat},${phone.long}&destinations=${target.lat},${target.long}&key=${key}`)
      // .then()
      //
      //
      // return $http.get(`https://artemis-api.herokuapp.com/users/?user_name=${username}`)
      // .then()
      // .catch(err => {
      //   return {sucess: false, message: err}
      // })
    }
}
