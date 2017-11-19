angular
	.module('ngCribs')
	.factory('AlegraFactory', function($http) {

		function getCribs() {
			return $http.get('data/data.json');
		}

		return {
			getCribs: getCribs
		}
	});