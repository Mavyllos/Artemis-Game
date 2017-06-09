'use strict';
angular
  .module('artemisApp')
  .factory('GameInfoService', GameInfoService)
  GameInfoService.$inject = ['$http', '$q']

  function GameInfoService($http, $q) {
    var service = {};
    var data = {}

    service.GetAllGames = GetAllGames

    return service

    function GetAllGames() {
      var userId = window.localStorage.getItem('userId')
      var games = $http.get(`https://artemis-api.herokuapp.com/games`)
      var game_user = $http.get(`https://artemis-api.herokuapp.com/game_user?user_id=${userId}`)
      var promise = $q.all([games, game_user]).then(result => {
        var gameArr = result[1]["data"]["result"].map(usersGames => {
          return result[0]["data"]["result"].filter(game => {
            return usersGames.game_id === game.id
          })[0]
        })
        console.log(gameArr)
        return gameArr
      })
      return promise
    }


  }
