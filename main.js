angular.module("myApp", []);

angular.module("myApp")
	.controller('mainController', ['$scope', function($scope){

		$scope.fillerForm = false;
		$scope.formMessage = "You un-hid the form."
		$scope.hideForm = true;
		$scope.userName = " Mary Mary"
		$scope.favBook = "Javascript for dummies"
		$scope.favJs = "What's a JS Library?"
		$scope.bio = "Lorem ipsum Laborum cupidatat reprehenderit Ut eiusmod Ut do eu veniam sunt nulla in labore dolore sint nostrud reprehenderit voluptate ex laboris sunt exercitation adipisicing velit minim dolor nisi velit aliqua veniam tempor enim in ut qui ullamco consectetur."
		// $scope.showInfo = false;
		// $scope.profileName = "Scott Smeester is weird"


		$scope.display = function(){
			$scope.showInfo = true;
			// console.log($scope.showInfo);
			// $scope.profileName = $scope.userName
		};

		$scope.buttonClick = function($event){
			$scope.fillerForm = !$scope.fillerForm;
			$scope.hideForm = !$scope.hideForm;
		};
	}]);