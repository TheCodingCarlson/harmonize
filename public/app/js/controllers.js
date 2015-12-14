angular.module('HarmonyCtrls',[])
.controller('HarmonyCtrl', ['$scope', function($scope) {
	$scope.test = "This is a Test";
	 var c = teoria.note('c4');

	 $scope.cMin7 = c.chord('min7').simple();
}])
.controller('CompCtrl', ['$scope', function($scope) {
	// var note = $scope.note;
	// var chord = $scope.chordQuality;

}]);