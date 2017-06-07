'user strict';
angular
  .module('artemisApp')
  .factory('GameInfoService', GameInfoService)
  GameInfoService.$inject = ['$http', '$q']

  function GameInfoService($http, $q) {
    var service = {};
    var userId = window.localStorage.getItem('userId');
    var data = [];

    service.GetAllGames = GetAllGames

    return service

    function GetAllGames() {
      var userId = window.localStorage.getItem('userId')
       var games = $http.get(`https://artemis-api.herokuapp.com/games`)
       var game_user = $http.get(`https://artemis-api.herokuapp.com/game_user?user_id=${userId}`)
       $q.all([games, game_user]).then(result => {
         console.log(result)
       })
    }


  }
