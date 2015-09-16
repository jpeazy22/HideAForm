angular.module("myApp", []);

angular.module("myApp").controller('mainController', ['$scope', function($scope){

		$scope.fillerForm = false;
		$scope.formMessage = "You unhid the form."
		$scope.hideForm = true;


		$scope.buttonClick = function($event){
			$scope.fillerForm = true;
			$scope.hideForm = false;

			// console.log($formMessage);
		};
		// $scope.hideForm = function($event){
		// 	$scope.hideForm = false;
		// 	// console.log($formMessage);
		// };

	}]);