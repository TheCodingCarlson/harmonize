var app = angular.module('HarmonyApp', ['HarmonyServices','HarmonyCtrls', 'ngRoute']);

app.config([
	'$routeProvider', 
	'$locationProvider', 
	function($routeProvider, $locationProvider) {
	$routeProvider.when('/', {
		templateUrl: 'app/views/home.html',
		controller: 'HarmonyCtrl'
	})
	.when('/compose', {
		templateUrl:'app/views/compose.html',
		controller: 'CompCtrl'
	})
	.when('/howto', {
		templateUrl: 'app/views/howTo.html'
	})
	.when('/about', {
		templateUrl: 'app/views/about.html'
	})
	.when('/login', {
		templateUrl: 'app/views/auth.html'
	})
	.when('/signup', {
		templateUrl: 'app/views/auth.html'
	})
	.otherwise({
		templateUrl: 'app/views/error.html'
	});

	$locationProvider.html5Mode(true);
}])
.config(['$httpProvider', function($httpProvider) {
  $httpProvider.interceptors.push('AuthInterceptor');
}])
.run(['$rootScope', 'Auth', '$route', function($rootScope, Auth, $route) {

	$rootScope.logout = function() {
    	Auth.removeToken();
	    $route.reload();
 	};

	$rootScope.isLoggedIn = function() {
    	return Auth.isLoggedIn.apply(Auth);
  	}
}]);