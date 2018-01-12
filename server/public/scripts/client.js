var myApp = angular.module('myApp', ['ngRoute']);

/// Routes ///
myApp.config(function($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('');
  console.log('myApp -- config');
  $routeProvider
    .when('/home', {
      templateUrl: '/views/templates/home.html',
      controller: 'LoginController as lc',
    })
    .when('/register', {
      templateUrl: '/views/templates/register.html',
      controller: 'LoginController as lc'
    })
    .when('/user', {
      templateUrl: '/views/templates/user.html',
      controller: 'UserController as uc',
      resolve: {
        getuser : function(UserService){
          return UserService.getuser();
        }
      }
    })
    .when('/info', {
      templateUrl: '/views/templates/info.html',
      controller: 'InfoController',
      resolve: {
        getuser : function(UserService){
          return UserService.getuser();
        }
      }
    })
    .when('/work',  {
      templateUrl: 'views/templates/work.html',
      controller: 'InfoController',
      resolve: {
        getuser: function(UserService){
          return UserService.getuser();
        }
      }
    })
    .when('/about-me', {
      templateUrl: 'views/templates/about-me.html',
      controller: 'InfoController',
      resolve: {
        getuser: function (UserService) {
          return UserService.getuser();
        }
      }
    })
    .when('/activism', {
      templateUrl: 'views/templates/activism.html',
      controller: 'InfoController',
      resolve: {
        getuser: function (UserService) {
          return UserService.getuser();
        }
      }
    })
    .when('/resume', {
      templateUrl: 'views/templates/resume.html',
      controller: 'InfoController',
      resolve: {
        getuser: function (UserService) {
          return UserService.getuser();
        }
      }
    })
    .when('/lets-connect', {
      templateUrl: 'views/templates/lets-connect.html',
      controller: 'InfoController',
      resolve: {
        getuser: function (UserService) {
          return UserService.getuser();
        }
      }
    })
    .when('/software-development', {
      templateUrl: 'views/templates/software-development.html',
      controller: 'InfoController',
      resolve: {
        getuser: function (UserService) {
          return UserService.getuser();
        }
      }
    })
    .otherwise({
      redirectTo: 'home'
    });
});
