angular.module('HarmonyServices', ['ngResource'])
.factory('Auth', ['$window', '$location', function($window, $location) {
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
		},
		currentUser: function() {
      		if (this.isLoggedIn()) {
        		var token = this.getToken();
        		try {
          			var payload = JSON.parse($window.atob(token.split('.')[1]));
          			return payload;
        		} catch(err) {
          			return false;
        		}	
      		}
    	},
    	logout: function() {
    		this.removeToken();
	    	$location.path('/');
 		},
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