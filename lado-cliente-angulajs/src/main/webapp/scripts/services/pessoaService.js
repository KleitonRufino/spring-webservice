(function() {
	'use strict';
	angular.module('myApp').service('PessoaService', PessoaService);
	PessoaService.$inject = [ '$http','$log' ];
	function PessoaService($http, $log) {
		var someValue = 1;
		var service = {
			someMethod : someMethod,
			getRead: getRead,
			getCreate: getCreate,
			getDelete: getDelete,
			getEdit: getEdit,
			getProfile: getProfile,
		};
		return service;

		function someMethod() {
			return someValue + 10;
		}
		
		function getRead(){
			 return $http.get('http://localhost:8080/lado-servidor/pessoa/')
	            .then(getReadComplete)
	            .catch(getReadFailed);

	        function getReadComplete(response) {
	        	$log.info('XHR Sucess for getRead.'+ response.data);
	            return response.data;
	        }

	        function getReadFailed(error) {
	            $log.error('XHR Failed for getRead.' + error.data);
	        }
		}
		
		function getCreate(item){
			 return $http.post('http://localhost:8080/lado-servidor/pessoa/', item)
	            .then(getCreateComplete)
	            .catch(getCreateFailed);

	        function getCreateComplete(response) {
	        	$log.info('XHR Sucess for getCreate.'+ response.data);
	            return response.data;
	        }

	        function getCreateFailed(error) {
	            $log.error('XHR Failed for getCreate.' + error.data);
	        }
		}
	

		function getDelete(id){
			 return $http.delete('http://localhost:8080/lado-servidor/pessoa/' + id)
	            .then(getDeleteComplete)
	            .catch(getDeleteFailed);

	        function getDeleteComplete(response) {
	        	$log.info('XHR Sucess for getDelete.'+ response.data);
	            return response.data;
	        }

	        function getDeleteFailed(error) {
	            $log.error('XHR Failed for getDelete.' + error.data);
	        }
		}
		
		function getEdit(item, id){
			 return $http.put('http://localhost:8080/lado-servidor/pessoa/' + id, item)
	            .then(getEditComplete)
	            .catch(getEditFailed);

	        function getEditComplete(response) {
	        	$log.info('XHR Sucess for getEdit.'+ response.data);
	            return response.data;
	        }

	        function getEditFailed(error) {
	            $log.error('XHR Failed for getEdit.' + error.data);
	        }
		}
		
		
		function getProfile(id){
			 return $http.get('http://localhost:8080/lado-servidor/pessoa/' + id)
	            .then(getProfileComplete)
	            .catch(getProfileFailed);

	        function getProfileComplete(response) {
	        	$log.info('XHR Sucess for getProfile.'+ response.data);
	            return response.data;
	        }

	        function getProfileFailed(error) {
	            $log.error('XHR Failed for getProfile.' + error.data);
	        }
		}
		
	}
})();