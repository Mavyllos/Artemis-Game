
angular
  .module('artemisApp')
  .factory('InviteService', InviteService)
  InviteService.$inject = ['$http', '$q']

  function InviteService($http, $q) {

    var service = {};

    service.GetInvites = GetInvites

    return service

    function GetInvites() {
      var userId = window.localStorage.getItem('userId');
      var gameInvites = $http.get(`https://artemis-api.herokuapp.com/game_invite?user_id=${userId}`)
      var games = $http.get(`https://artemis-api.herokuapp.com/games`)
      var promise = $q.all([gameInvites, games]).then(result => {
        var invitesArr = result[0]["data"]["result"].map(invite => {
          console.log(invite)
          invite.gameInfo = result[1]["data"]["result"].filter(game => {
            return invite.game_id === game.id
          })[0]
          return invite;
        })
        return invitesArr
      })
      return promise
  }
}
