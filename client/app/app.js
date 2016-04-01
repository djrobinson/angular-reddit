angular
  .module('RedditApp', ['ngRoute','ngAnimate'])
  .config(config);

function config($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: './app/home.html',
      controller:  'PostCtrl',
      controllerAs: 'vm'
    });
}