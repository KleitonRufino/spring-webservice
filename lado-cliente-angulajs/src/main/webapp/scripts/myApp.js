(function() {
	function config($routeProvider) {
		$routeProvider.when('/', {
			templateUrl : 'views/read.html',
			controllerAs : 'cr',
			controller : 'PessoaReadController'
		}). when('/create',{
			templateUrl : 'views/create.html',
			controllerAs : 'cc',
			controller : 'PessoaReadController'
		}). when('/edit/:id',{
			templateUrl : 'views/edit.html',
			controllerAs : 'ce',
			controller : 'PessoaEditController'
		});
	}

	angular.module("myApp", [ 'ngRoute', ]).config(config);
})();