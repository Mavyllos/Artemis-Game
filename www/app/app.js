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
      abstract: false,
      url:'/login',
      templateUrl: 'app/login/login.html'
    })

    .state('register', {
      abstract: false,
      url:'/register',
      templateUrl: 'app/registration/registration.html'
    })

    .state('app.dashboard', {
      url: '/dashboard',
      views: {
        'mainContent': {
          templateUrl: 'app/dashboard/dashboard.html'
        }
      }
    })

    .state('app.mygames', {
      url: '/mygames',
      views: {
        'mainContent': {
          templateUrl: 'app/games/mygames.html'
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
          templateUrl: 'app/create/create-game.html'
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
    });

  $urlRouterProvider.otherwise('/app/dashboard');

});
