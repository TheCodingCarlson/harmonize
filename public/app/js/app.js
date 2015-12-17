var app = angular.module('HarmonyApp', ['HarmonyServices','HarmonyCtrls', 'ngRoute', 'ui.bootstrap']);

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
		templateUrl: 'app/views/auth.html',
		controller: 'LoginCtrl'
	})
	.when('/signup', {
		templateUrl: 'app/views/auth.html',
		controller: 'SignupCtrl'
	})
	.when('/profile', {
		templateUrl: 'app/views/profile.html',
		controller: 'ProfileCtrl'
	})
	.otherwise({
		templateUrl: 'app/views/error.html'
	});

	$locationProvider.html5Mode(true);
}])
.config(['$httpProvider', function($httpProvider) {
  $httpProvider.interceptors.push('AuthInterceptor');
}])
.run(['$rootScope', 'Auth', '$route', '$location', function($rootScope, Auth, $route, $location) {
	$rootScope.isLoggedIn = function() {
    	return Auth.isLoggedIn.apply(Auth);
  	}
}]);