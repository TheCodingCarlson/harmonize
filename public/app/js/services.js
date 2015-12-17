angular.module('HarmonyServices', ['ngResource'])
.factory('User', ['$resource', function($resource) {
	return $resource('/api/users/:id');
}])
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
}])
.factory('Alerts', [function() {
 var alerts = [];

 return {
   clear: function() {
     alerts = [];
   },
   add: function(type, msg) {
     alerts.push({type: type, msg: msg});
   },
   get: function() {
     return alerts;
   },
   remove: function(idx) {
     alerts.splice(idx, 1);
   }
 }
}]);