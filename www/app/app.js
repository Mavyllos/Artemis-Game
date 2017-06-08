angular.module('artemisApp', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider){

  $ionicConfigProvider.tabs.position('top');

  $stateProvider

    .state('app', {
      abstract: true,
      url: '/app',
      templateUrl: "app/layout/menu-layout.html"
    })

    .state('login', {
      url:'/',
      templateUrl: './app/login/login.html',
      controller: 'loginCtrl',
      controllerAs: '$ctrl'
    })

    .state('register', {
      url:'/register',
      templateUrl: 'app/registration/registration.html',
      controller: 'registrationCtrl',
      controllerAs: '$ctrl'
    })

    .state('app.dashboard', {
      url: '/dashboard',
      views: {
        'mainContent': {
          templateUrl: 'app/dashboard/dashboard.html'
        }
      }
    })

    .state('app.games', {
      url: '/games',
      views: {
        'mainContent': {
          templateUrl: 'app/games/games.html'
        }
      }
    })

    .state('app.game-detail', {
      url: '/games/:id',
      views: {
        'mainContent': {
          templateUrl: 'app/games/game-detail.html'
        }
      }
    })

    .state('app.create-game', {
      url: '/create',
      views: {
        'mainContent': {
          templateUrl: 'app/create/create-game.html',
          controller: 'createGameCtrl',
          controllerAs: '$ctrl'
        }
      }
    })

    .state('app.invites', {
      url: '/game-invite/:id',
      views: {
        'mainContent': {
          templateUrl: 'app/invites/game-invites.html'
        }
      }
    })

    .state('app.questions', {
      url: '/questions/:id',
      views: {
        'mainContent': {
          templateUrl: 'app/clues/questions.html'
        }
      }
    })

    .state('app.clues', {
      url: '/clues/:id',
      views: {
        'mainContent': {
          templateUrl: 'app/clues/clues.html'
        }
      }
    });

  $urlRouterProvider.otherwise('/app/dashboard');

});
