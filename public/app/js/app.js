var app = angular.module('HarmonyApp', ['ngRoute']);

app.config([
	'$routeProvider', 
	'$locationProvider', 
	function($routeProvider, $locationProvider) {
		$routeProvider.when('/', {
			templateUrl: 'app/views/home.html'
		});


}]);