var App = angular.module('App', [
'ngRoute', 'ngResource',
'controllers',
'services'
]);

App.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'views/read.html',
		controller: 'PessoaReadCtrl'
	})

	.when('/create', {
		templateUrl: 'views/create.html',
		controller: 'PessoaCreateCtrl'
	})

	.when('/edit/:id', {
		templateUrl: 'views/edit.html',
		controller: 'PessoaEditCtrl'
	})

});
