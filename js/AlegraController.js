angular
	.module('ngCribs')
	.controller('AlegraController', function($scope, AlegraFactory) {

		$scope.cribs;
		$scope.playerOrder = 'name';

		$scope.newListing = {};

		$scope.addCrib = function(newListing) {
			$scope.cribs.push(newListing);
			$scope.newListing = {};
		}

		$scope.editCrib = function(crib) {
			$scope.editListing = true;
			$scope.existingListing = crib;
		}

		$scope.saveCribEdit = function() {
			$scope.existingListing = {};
			$scope.editListing = false;
		}

		$scope.deleteCrib = function(listing) {
			var index = $scope.cribs.indexOf(listing);
			$scope.cribs.splice(index, 1);
			$scope.existingListing = {};
			$scope.editListing = false;
		}

		AlegraFactory.getCribs().success(function(data) {
			$scope.cribs = data;
		}).error(function(error) {
			console.log(error);
		});
		
		
		

  
  
  });
  
 