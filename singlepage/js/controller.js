var App = angular.module('controllers', []);

App.controller('PessoaReadCtrl', function($scope, PessoaService, $route){
	$scope.pessoas = [];
	PessoaService.read().then(function(data){
		$scope.pessoas = data.data;
		if(data.data.length == 0){
			$scope.notFound = true;
		}
	},function(data){
		console.log("data", data);
	});

	$scope.deletar = function(id){
		if (confirmDelete(true)) {
			PessoaService.delete(id).then(function(data){
				console.log(data);
				$route.reload();
			});	
		}
	}
	
	var confirmDelete = function(confirmation){
      return confirmation ? confirm('Você tem certeza que deseja deletar esta pessoa?') : true;
    };
	
});	

App.controller('PessoaCreateCtrl', function($scope, PessoaService, $location){
	$scope.cadastrar = function(nome,nascimento,cpf){
		var data = {
			nome: nome,
			nascimento: nascimento,
			cpf: cpf
		};

		PessoaService.create(data).then(function(data){
			$location.path('/');
		});	
	}
});	

App.controller('PessoaEditCtrl', function($scope, PessoaService, $routeParams, $location){
	var id = $routeParams.id;
	PessoaService.profile(id).then(function(data){
		$scope.item = data.data;
	})

	$scope.atualizar = function(item){
		console.log(item);
		PessoaService.update(item, item.id).then(function(data){
			$location.path('/');
		});
	}
});	
