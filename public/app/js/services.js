angular.module('HarmonyServices', ['ngResource'])
.factory('Auth', ['$window', function($window) {
	return {
		saveToken: function(token) {
			$window.localStorage['secretharm-token'] = token;
		},
		getToken: function() {
			return $window.localStorage['secretharm-token'];
		},
		removeToken: function() {
			$window.localStorage.removeItem('secretharm-token');
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