angular.module('HarmonyServices', ['ngResource'])
.factory('Auth', ['$window', function($window) {
	return {
		saveToken: function(token) {
			$window.localStorage['secretairplane-token'] = token;
		},
		getToken: function() {
			return $window.localStorage['secretairplane-token'];
		},
		removeToken: function() {
			$window.localStorage.removeItem('secretairplane-token');
		},
		isLoggedIn: function() {
			var token = this.getToken();
			return token ? true : false
		}
	};
}])
.factory('AuthInterceptor', ['Auth', function(Auth) {
	return {
		request: function(config) {
			var token = Auth.getToken();

			if(token) {
				config.headers.Authorization = 'Bearer ' +token;
			}
			return config;
		}
	};
}]);