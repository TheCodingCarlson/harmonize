angular.module('HarmonyCtrls',['HarmonyServices', 'ui.bootstrap'])
.controller('HarmonyCtrl', ['$scope', function($scope) {
	
}])
.controller('CompCtrl', ['$scope','Auth', '$http', function($scope, Auth, $http) {

	//set true/false values for ng-show/hide
	$scope.begin = true;
	$scope.reset = false;
	$scope.favorite = false;

	$scope.getInitialValue = function() {
		var count = 0;
		console.log(count);

		//get value from initial inputs and set them as vars
		var note = teoria.note($scope.note);
		var quality = $scope.chordQuality;

		if (note && quality) {

		//set initial state
		$scope.chordProgression = [];
		$scope.chordProgressionNotes = [];
		$scope.chordOne = note.chord(quality).name;
		$scope.begin = false;
		$scope.chordProgression.push($scope.chordOne);

		//MAJOR CHORDS
		var majorChords = [
			{"chord": note.chord(quality).name, 
			"notes": note.chord(quality).simple()},

			{"chord": teoria.interval(note, 'M2').chord('m').name, 
			"notes": teoria.interval(note, 'M2').chord('m').simple()},

			{"chord": teoria.interval(note, 'M3').chord('m').name,
			"notes": teoria.interval(note, 'M3').chord('m').simple()},

			{"chord": teoria.interval(note, 'P4').chord('M').name,
			"notes": teoria.interval(note, 'P4').chord('M').simple()},

			{"chord": teoria.interval(note, 'P5').chord('M').name,
			"notes": teoria.interval(note, 'P5').chord('M').simple()},

			{"chord": teoria.interval(note, 'M6').chord('m').name,
			"notes": teoria.interval(note, 'M6').chord('m').simple()}
			];

		//MINOR CHORDS
		var minorChords = [
			{"chord": note.chord(quality).name, 
			"notes": note.chord(quality).simple()},

			{"chord": teoria.interval(note, 'M2').chord('dim').name, 
			"notes": teoria.interval(note, 'M2').chord('dim').simple()},

			{"chord": teoria.interval(note, 'm3').chord('M').name,
			"notes": teoria.interval(note, 'm3').chord('M').simple()},

			{"chord": teoria.interval(note, 'P4').chord('m').name,
			"notes": teoria.interval(note, 'P4').chord('m').simple()},

			{"chord": teoria.interval(note, 'P5').chord('m').name,
			"notes": teoria.interval(note, 'P5').chord('m').simple()},

			{"chord": teoria.interval(note, 'm6').chord('M').name,
			"notes": teoria.interval(note, 'm6').chord('M').simple()},

			{"chord": teoria.interval(note, 'm7').chord('M').name,
			"notes": teoria.interval(note, 'm7').chord('M').simple()}
			];

		//set initial options based on quality value
		if(quality === 'M' && count === 0) {
			$scope.chordOptions = [
				{chord: majorChords[1].chord},
				{chord: majorChords[3].chord},
				{chord: majorChords[4].chord},
				{chord: majorChords[5].chord}
			];
		} else if (quality === 'm' && count === 0) {
			$scope.chordOptions = [
				{chord: minorChords[3].chord},
				{chord: minorChords[4].chord},
				{chord: minorChords[5].chord},
				{chord: minorChords[6].chord}
			];
		}

		//get the other 3 chords after initial chord is chosen and set
		$scope.getChords = function() {
			if($scope.chordName) {
				count += 1;

				//MAJOR CHORD TREE

				if ($scope.chordName === majorChords[1].chord && count === 1) {
					$scope.chordTwo = $scope.chordName;
					$scope.chordProgression.push($scope.chordTwo);
					$scope.chordName = '';
					$scope.chordOptions = [
						{chord: majorChords[2].chord},
						{chord: majorChords[3].chord}
					];

				} else if ($scope.chordName === majorChords[3].chord && count === 1) {
					$scope.chordTwo = $scope.chordName;
					$scope.chordProgression.push($scope.chordTwo);
					$scope.chordName = '';
					$scope.chordOptions = [
						{chord: majorChords[0].chord},
						{chord: majorChords[4].chord},
						{chord: majorChords[5].chord}
					];

				} else if ($scope.chordName === majorChords[4].chord && count === 1) {
					$scope.chordTwo = $scope.chordName;
					$scope.chordProgression.push($scope.chordTwo);
					$scope.chordName = '';
					$scope.chordOptions = [
						{chord: majorChords[0].chord},
						{chord: majorChords[3].chord},
						{chord: majorChords[5].chord}
					];

				} else if ($scope.chordName === majorChords[5].chord && count === 1) {
					$scope.chordTwo = $scope.chordName;
					$scope.chordProgression.push($scope.chordTwo);
					$scope.chordName = '';
					$scope.chordOptions = [
						{chord: majorChords[1].chord},
						{chord: majorChords[3].chord}
					];

				} else if ($scope.chordTwo === majorChords[1].chord && $scope.chordName === majorChords[2].chord && count === 2) {
					$scope.chordThree = $scope.chordName;
					$scope.chordProgression.push($scope.chordThree);
					$scope.chordName = '';
					$scope.chordOptions = [
						{chord: majorChords[3].chord},
						{chord: majorChords[4].chord}
					];

				} else if ($scope.chordTwo === majorChords[1].chord && $scope.chordName === majorChords[3].chord && count === 2) {
					$scope.chordThree = $scope.chordName;
					$scope.chordProgression.push($scope.chordThree);
					$scope.chordName = '';
					$scope.chordOptions = [
						{chord: majorChords[4].chord}
					];

				} else if ($scope.chordTwo === majorChords[1].chord && $scope.chordThree === majorChords[3].chord && count === 3) {
					$scope.chordFour = $scope.chordName;
					$scope.chordProgression.push($scope.chordFour);
					$scope.chordName = '';

				} else if ($scope.chordTwo === majorChords[1].chord && $scope.chordThree === majorChords[2].chord && count === 3) {
					$scope.chordFour = $scope.chordName;
					$scope.chordProgression.push($scope.chordFour);
					$scope.chordName = '';
					$scope.chordOptions = [
						{chord: majorChords[3].chord},
						{chord: majorChords[4].chord}
					];

				} else if ($scope.chordTwo === majorChords[3].chord && $scope.chordName === majorChords[0].chord && count === 2) {
					$scope.chordThree = $scope.chordName;
					$scope.chordProgression.push($scope.chordThree);
					$scope.chordName = '';
					$scope.chordOptions = [
						{chord: majorChords[3].chord},
						{chord: majorChords[4].chord}
					];

				}  else if ($scope.chordTwo === majorChords[3].chord && $scope.chordName === majorChords[4].chord && count === 2) {
					$scope.chordThree = $scope.chordName;
					$scope.chordProgression.push($scope.chordThree);
					$scope.chordName = '';
					$scope.chordOptions = [
						{chord: majorChords[0].chord}
					];

				} else if ($scope.chordTwo === majorChords[3].chord && $scope.chordName === majorChords[5].chord && count === 2) {
					$scope.chordThree = $scope.chordName;
					$scope.chordProgression.push($scope.chordThree);
					$scope.chordName = '';
					$scope.chordOptions = [
						{chord: majorChords[4].chord}
					];

				} else if ($scope.chordTwo === majorChords[3].chord && $scope.chordThree === majorChords[0].chord && count === 3) {
					$scope.chordFour = $scope.chordName;
					$scope.chordProgression.push($scope.chordFour);
					$scope.chordName = '';
					
				} else if ($scope.chordTwo === majorChords[3].chord && $scope.chordThree === majorChords[4].chord && count === 3) {
					$scope.chordFour = $scope.chordName;
					$scope.chordProgression.push($scope.chordFour);
					$scope.chordName = '';
					
				} else if ($scope.chordTwo === majorChords[3].chord && $scope.chordThree === majorChords[5].chord && count === 3) {
					$scope.chordFour = $scope.chordName;
					$scope.chordProgression.push($scope.chordFour);
					$scope.chordName = '';
					
				} else if ($scope.chordTwo === majorChords[4].chord && $scope.chordName === majorChords[0].chord && count === 2) {
					$scope.chordThree = $scope.chordName;
					$scope.chordProgression.push($scope.chordThree);
					$scope.chordName = '';
					$scope.chordOptions = [
						{chord: majorChords[4].chord}
					];

				} else if ($scope.chordTwo === majorChords[4].chord && $scope.chordName === majorChords[3].chord && count === 2) {
					$scope.chordThree = $scope.chordName;
					$scope.chordProgression.push($scope.chordThree);
					$scope.chordName = '';
					$scope.chordOptions = [
						{chord: majorChords[4].chord}
					];

				} else if ($scope.chordTwo === majorChords[4].chord && $scope.chordName === majorChords[5].chord && count === 2) {
					$scope.chordThree = $scope.chordName;
					$scope.chordProgression.push($scope.chordThree);
					$scope.chordName = '';
					$scope.chordOptions = [
						{chord: majorChords[4].chord}
					];

				} else if ($scope.chordTwo === majorChords[4].chord && $scope.chordThree === majorChords[0].chord && count === 3) {
					$scope.chordFour = $scope.chordName;
					$scope.chordProgression.push($scope.chordFour);
					$scope.chordName = '';
					
				} else if ($scope.chordTwo === majorChords[4].chord && $scope.chordThree === majorChords[3].chord && count === 3) {
					$scope.chordFour = $scope.chordName;
					$scope.chordProgression.push($scope.chordFour);
					$scope.chordName = '';
					
				} else if ($scope.chordTwo === majorChords[4].chord && $scope.chordThree === majorChords[5].chord && count === 3) {
					$scope.chordFour = $scope.chordName;
					$scope.chordProgression.push($scope.chordFour);
					$scope.chordName = '';
					
				} else if ($scope.chordTwo === majorChords[5].chord && $scope.chordName === majorChords[1].chord && count === 2) {
					$scope.chordThree = $scope.chordName;
					$scope.chordProgression.push($scope.chordThree);
					$scope.chordName = '';
					$scope.chordOptions = [
						{chord: majorChords[4].chord}
					];

				} else if ($scope.chordTwo === majorChords[5].chord && $scope.chordName === majorChords[3].chord && count === 2) {
					$scope.chordThree = $scope.chordName;
					$scope.chordProgression.push($scope.chordThree);
					$scope.chordName = '';
					$scope.chordOptions = [
						{chord: majorChords[4].chord}
					];

				} else if ($scope.chordTwo === majorChords[5].chord && $scope.chordThree === majorChords[1].chord && count === 3) {
					$scope.chordFour = $scope.chordName;
					$scope.chordProgression.push($scope.chordFour);
					$scope.chordName = '';
					
				} else if ($scope.chordTwo === majorChords[5].chord && $scope.chordThree === majorChords[3].chord && count === 3) {
					$scope.chordFour = $scope.chordName;
					$scope.chordProgression.push($scope.chordFour);
					$scope.chordName = '';


				//MINOR CHORD TREE
				} else if ($scope.chordName === minorChords[3].chord && count === 1) {
					$scope.chordTwo = $scope.chordName;
					$scope.chordProgression.push($scope.chordTwo);
					$scope.chordName = '';
					$scope.chordOptions = [
						{chord: minorChords[0].chord},
						{chord: minorChords[4].chord},
						{chord: minorChords[6].chord}
					];

				} else if ($scope.chordName === minorChords[4].chord && count === 1) {
					$scope.chordTwo = $scope.chordName;
					$scope.chordProgression.push($scope.chordTwo);
					$scope.chordName = '';
					$scope.chordOptions = [
						{chord: minorChords[2].chord},
						{chord: minorChords[3].chord}
					];

				} else if ($scope.chordName === minorChords[5].chord && count === 1) {
					$scope.chordTwo = $scope.chordName;
					$scope.chordProgression.push($scope.chordTwo);
					$scope.chordName = '';
					$scope.chordOptions = [
						{chord: minorChords[2].chord},
						{chord: minorChords[4].chord}
					];

				} else if ($scope.chordName === minorChords[6].chord && count === 1) {
					$scope.chordTwo = $scope.chordName;
					$scope.chordProgression.push($scope.chordTwo);
					$scope.chordName = '';
					$scope.chordOptions = [
						{chord: minorChords[2].chord},
						{chord: minorChords[5].chord}
					];

				} else if ($scope.chordTwo === minorChords[3].chord && $scope.chordName === minorChords[0].chord && count === 2) {
					$scope.chordThree = $scope.chordName;
					$scope.chordProgression.push($scope.chordThree);
					$scope.chordName = '';
					$scope.chordOptions = [
						{chord: minorChords[0].chord},
						{chord: minorChords[3].chord}
					];

				} else if ($scope.chordTwo === minorChords[3].chord && $scope.chordName === minorChords[4].chord && count === 2) {
					$scope.chordThree = $scope.chordName;
					$scope.chordProgression.push($scope.chordThree);
					$scope.chordName = '';
					$scope.chordOptions = [
						{chord: minorChords[0].chord}
					];

				} else if ($scope.chordTwo === minorChords[3].chord && $scope.chordName === minorChords[6].chord && count === 2) {
					$scope.chordThree = $scope.chordName;
					$scope.chordProgression.push($scope.chordThree);
					$scope.chordName = '';
					$scope.chordOptions = [
						{chord: minorChords[2].chord}
					];

				} else if ($scope.chordTwo === minorChords[3].chord && $scope.chordThree === minorChords[0].chord && count === 3) {
					$scope.chordFour = $scope.chordName;
					$scope.chordProgression.push($scope.chordFour);
					$scope.chordName = '';
					
				} else if ($scope.chordTwo === minorChords[3].chord && $scope.chordThree === minorChords[4].chord && count === 3) {
					$scope.chordFour = $scope.chordName;
					$scope.chordProgression.push($scope.chordFour);
					$scope.chordName = '';
					
				} else if ($scope.chordTwo === minorChords[3].chord && $scope.chordThree === minorChords[6].chord && count === 3) {
					$scope.chordFour = $scope.chordName;
					$scope.chordProgression.push($scope.chordFour);
					$scope.chordName = '';
					
				} else if ($scope.chordTwo === minorChords[4].chord && $scope.chordName === minorChords[2].chord && count === 2) {
					$scope.chordThree = $scope.chordName;
					$scope.chordProgression.push($scope.chordThree);
					$scope.chordName = '';
					$scope.chordOptions = [
						{chord: minorChords[1].chord}
					];

				} else if ($scope.chordTwo === minorChords[4].chord && $scope.chordName === minorChords[3].chord && count === 2) {
					$scope.chordThree = $scope.chordName;
					$scope.chordProgression.push($scope.chordThree);
					$scope.chordName = '';
					$scope.chordOptions = [
						{chord: minorChords[6].chord}
					];

				} else if ($scope.chordTwo === minorChords[4].chord && $scope.chordThree === minorChords[2].chord && count === 3) {
					$scope.chordFour = $scope.chordName;
					$scope.chordProgression.push($scope.chordFour);
					$scope.chordName = '';
					
				} else if ($scope.chordTwo === minorChords[4].chord && $scope.chordThree === minorChords[3].chord && count === 3) {
					$scope.chordFour = $scope.chordName;
					$scope.chordProgression.push($scope.chordFour);
					$scope.chordName = '';
					
				} else if ($scope.chordTwo === minorChords[5].chord && $scope.chordName === minorChords[2].chord && count === 2) {
					$scope.chordThree = $scope.chordName;
					$scope.chordProgression.push($scope.chordThree);
					$scope.chordName = '';
					$scope.chordOptions = [
						{chord: minorChords[3].chord}
					];

				} else if ($scope.chordTwo === minorChords[5].chord && $scope.chordName === minorChords[4].chord && count === 2) {
					$scope.chordThree = $scope.chordName;
					$scope.chordProgression.push($scope.chordThree);
					$scope.chordName = '';
					$scope.chordOptions = [
						{chord: minorChords[0].chord},
						{chord: minorChords[1].chord}
					];

				} else if ($scope.chordTwo === minorChords[5].chord && $scope.chordThree === minorChords[2].chord && count === 3) {
					$scope.chordFour = $scope.chordName;
					$scope.chordProgression.push($scope.chordFour);
					$scope.chordName = '';
					
				} else if ($scope.chordTwo === minorChords[5].chord && $scope.chordThree === minorChords[4].chord && count === 3) {
					$scope.chordFour = $scope.chordName;
					$scope.chordProgression.push($scope.chordFour);
					$scope.chordName = '';
					
				} else if ($scope.chordTwo === minorChords[6].chord && $scope.chordName === minorChords[2].chord && count === 2) {
					$scope.chordThree = $scope.chordName;
					$scope.chordProgression.push($scope.chordThree);
					$scope.chordName = '';
					$scope.chordOptions = [
						{chord: minorChords[1].chord}
					];

				} else if ($scope.chordTwo === minorChords[6].chord && $scope.chordName === minorChords[5].chord && count === 2) {
					$scope.chordThree = $scope.chordName;
					$scope.chordProgression.push($scope.chordThree);
					$scope.chordName = '';
					$scope.chordOptions = [
						{chord: minorChords[4].chord}
					];

				} else if ($scope.chordTwo === minorChords[6].chord && $scope.chordThree === minorChords[2].chord && count === 3) {
					$scope.chordFour = $scope.chordName;
					$scope.chordProgression.push($scope.chordFour);
					$scope.chordName = '';
					
				} else if ($scope.chordTwo === minorChords[6].chord && $scope.chordThree === minorChords[5].chord && count === 3) {
					$scope.chordFour = $scope.chordName;
					$scope.chordProgression.push($scope.chordFour);
					$scope.chordName = '';
					
				}

				$scope.addFavorite = function() { 
					var user = Auth.currentUser();
					$http.post('/api/users/' + user.id, 
					{progression: $scope.chordProgression})
					.then(
						function succes(res) {
							console.log('success');
						}, function error(res) {
							console.log(res);

						});
					}
				}

			if ($scope.chordProgression.length === 4) {
				$scope.reset = true;
				if (Auth.isLoggedIn() === true) {
					$scope.favorite = true;
				}
			}
		}
		}	
	}

	$scope.resetPage = function() {
		$scope.begin = true;
		$scope.reset = false;
		$scope.favorite = false;
		$scope.chordName = undefined;
		var note = undefined;
		var quality = undefined;
		count = 0;
		$scope.chordProgression = undefined;
		$scope.chordOne = undefined;
		$scope.chordTwo = undefined;
		$scope.chordThree = undefined;
		$scope.chordFour = undefined;

		$('#favorite').prop('disabled', false);
		
	}

	$('#favorite').on('click', function() {
		$(this).prop('disabled', true); 
	});
}])
.controller('LoginCtrl', [
  '$scope',
  '$http',
  '$location',
  'Auth',
  'Alerts',
  function($scope, $http, $location, Auth, Alerts) {
    $scope.user = {
      email: '',
      password: ''
    };
    $scope.actionName = 'Login';
    $scope.showName = false;
    $scope.userAction = function() {
      $http.post('/api/auth', $scope.user).then(function(res) {
      	if(res.data.token) {
       	 	Auth.saveToken(res.data.token);
        	$location.path('/');
        	Alerts.add('success', 'You have logged in!');
    	} else {
    		Alerts.add('danger', 'User Not Found!');
    		console.log('error');
    	}
      }, function(res) {
        console.log(res.data);
      });
    };
}])
.controller('SignupCtrl', [
  '$scope',
  '$http',
  '$location',
  'Auth',
  'Alerts',
  function($scope, $http, $location, Auth, Alerts) {
    $scope.user = {
      email: '',
      password: ''
    };
    $scope.actionName = 'SignUp';
    $scope.showName = true;
    $scope.userAction = function() {
    	console.log($scope.user);
      $http.post('/api/users', $scope.user).then(function (res) {
        $http.post('/api/auth', $scope.user).then(function (res) {
           Auth.saveToken(res.data.token);
          $location.path('/');
        }, function success(res) {
            console.log(res.data);
            Alerts.add('success', 'Congrats! You Are Signed Up!');
        });
      }, function error(res) {
          console.log(res.data);
          Alerts.add('danger', 'Uh Oh, Something Went Wrong!');
      });
  	}
}])
.controller('ProfileCtrl', [
	'$scope',
	'$location',
	'Auth',
	'$http',
	'User',
	function($scope, $location, Auth, $http, User) {
	var user = Auth.currentUser();
	$scope.name = user.name;

	User.get({id: user.id}, function success(data) {
		$scope.userProgressions = data.progressions;
		console.log(data);
	}, function error(data) {
		console.log(data);
	});
	
	$scope.deleteProgression = function(index) {
		$scope.userProgressions.splice(index, 1);
		user.progressions = $scope.userProgressions;		
		$http.put('/api/users/' + user.id, 
		{progressions: user.progressions})
		.then(
			function succes(res) {
				console.log('success');
			}, function error(res) {
				console.log(res);

			});
	}
}])
.controller('NavBarCtrl', [
	'$scope',
	'Auth',
	'Alerts',
	function($scope, Auth, Alerts) {
		$scope.logout = function() {
			Auth.logout();
			Alerts.add('success', 'You Have Successfully Logged Out!');
		}
}])
.controller('AlertCtrl', ['$scope', 'Alerts', function($scope, Alerts){
    $scope.alerts = Alerts.get();
    $scope.closeAlert = function(idx){
        Alerts.remove(idx);
    }
}]);