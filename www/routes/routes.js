angular.module('starter')
  .config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'templates/principal.html',
        controller: 'PrincipalController as principal'
      })

  });