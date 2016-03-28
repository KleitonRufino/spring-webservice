(function() {
	'use strict';
	angular.module('myApp').controller('PessoaReadController', PessoaReadController);
	PessoaReadController.$inject = [ 'PessoaService', '$log', '$route' ];
	function PessoaReadController(PessoaService, $log, $route) {
		var vm = this;
		vm.getDelete = getDelete;
		
		vm.myData;

		activate();

		function activate() {
			return getRead().then(function() {
				$log.info('Activated getRead View');
			});
		}

		function getRead() {
			return PessoaService.getRead().then(function(data) {
				vm.myData = data;
				$log.info('Controller' + data);
				return vm.myData;
			});
		}

		function getDelete(id) {
			if(getConfirmDelete(true)){
				return PessoaService.getDelete(id).then(function(data) {
					$log.info('Controller' + data);
					$route.reload();
				});
			}
		}
		
		function getConfirmDelete(confirmation){
			 return confirmation ? confirm('Você tem certeza que deseja deletar esta pessoa?') : true;
		}
	}

})();