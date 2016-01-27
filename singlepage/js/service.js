var App = angular.module('services', []);

App.factory('PessoaService', function($http){
	return {
		read: function(){
			return $http.get('http://localhost:8080/lado-servidor/pessoa/findAll');
		},
		create: function(item){
			return $http.post('http://localhost:8080/lado-servidor/pessoa/insert', item);
		},
		profile: function(id){
			return $http.get('http://localhost:8080/lado-servidor/pessoa/'+id);	
		},
		update: function(item, id){
			return $http.put('http://localhost:8080/lado-servidor/pessoa/update', item);	
		},
		delete: function(id){
			return $http.delete('http://localhost:8080/lado-servidor/pessoa/delete/'+id);
		}
	}
})