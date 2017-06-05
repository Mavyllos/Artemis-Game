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

    .state('dashboard', {
      abstract: true,
      url: '/dashboard',
      templateUrl: 'app/dashboard/dashboard.html'
  })

    .state('app', {
      abstract: true,
      url: '/app',
      templateUrl: "app/layout/menu-layout.html"
    });

  $urlRouterProvider.otherwise('/app/dashboard');

});
