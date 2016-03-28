(function() {
	'use strict';
	angular.module('myApp').controller('PessoaCreateController', PessoaCreateController);
	PessoaCreateController.$inject = [ 'PessoaService', '$log', '$location' ];
	function PessoaCreateController(PessoaService, $log, $location) {
		var vm = this;
		vm.getCreate = getCreate;
		
		function getCreate(nome, nascimento, cpf) {
			var pessoa = {
					nome: nome,
					nascimento: nascimento,
					cpf: cpf
				};
			
			return PessoaService.getCreate(pessoa).then(function(data) {
				$log.info('Controller' + data);
				$location.path('/');
			});
		}
	}

})();