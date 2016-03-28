(function() {
	'use strict';
	angular.module('myApp').controller('PessoaEditController', PessoaEditController);
	PessoaEditController.$inject = [ 'PessoaService', '$log', '$location', '$routeParams' ];
	function PessoaEditController(PessoaService, $log, $location, $routeParams) {
		var vm = this;
		var id = $routeParams.id;
		vm.item;
		vm.getEdit = getEdit;
		
		PessoaService.getProfile(id).then(function(data){
			vm.item = data;
		})

		
		function getEdit(item) {
			return PessoaService.getEdit(item,id).then(function(data) {
				$log.info('Controller' + data);
				$location.path('/');
			});
			
		}
	}

})();