angular.module('HarmonyCtrls',['HarmonyServices'])
.controller('HarmonyCtrl', ['$scope', function($scope) {
	// $scope.successAlert = function() {
	// 	var message = '<strong> Well done!</strong>  You  have successfully signed in!';
	// 	Flash.create('success', message);
	// }
}])
.controller('CompCtrl', ['$scope', function($scope) {
	var count = 0;
	$scope.begin = true;
	$scope.reset = false;
	$scope.getInitialValue = function() {
		
		var note = teoria.note($scope.note);
		var quality = $scope.chordQuality;

		$scope.chordOne = note.chord(quality).name;
		$scope.chordOneNotes = note.chord(quality).simple();
		$scope.begin = false;
		$scope.chordProgression = [];
		$scope.chordProgression.push($scope.chordOne);

		var majorChords = [
			{"name": "rootChord",
			"chord": note.chord(quality).name, 
			"notes": note.chord(quality).simple()},

			{"name": "minorSecond",
			"chord": teoria.interval(note, 'M2').chord('m').name, 
			"notes": teoria.interval(note, 'M2').chord('m').simple()},

			{"name": "minorThird",
			"chord": teoria.interval(note, 'M3').chord('m').name,
			"notes": teoria.interval(note, 'M3').chord('m').simple()},

			{"name": "majorFourth",
			"chord": teoria.interval(note, 'P4').chord('M').name,
			"notes": teoria.interval(note, 'P4').chord('M').simple()},

			{"name": "majorFifth",
			"chord": teoria.interval(note, 'P5').chord('M').name,
			"notes": teoria.interval(note, 'P5').chord('M').simple()},

			{"name": "minorSixth",
			"chord": teoria.interval(note, 'M6').chord('m').name,
			"notes": teoria.interval(note, 'M6').chord('m').simple()}
			];

		var minorChords = [
			{"name": "rootChord",
			"chord": note.chord(quality).name, 
			"notes": note.chord(quality).simple()},

			{"name": "diminishedSecond",
			"chord": teoria.interval(note, 'M2').chord('dim').name, 
			"notes": teoria.interval(note, 'M2').chord('dim').simple()},

			{"name": "majorThird",
			"chord": teoria.interval(note, 'm3').chord('M').name,
			"notes": teoria.interval(note, 'm3').chord('M').simple()},

			{"name": "minorFourth",
			"chord": teoria.interval(note, 'P4').chord('m').name,
			"notes": teoria.interval(note, 'P4').chord('m').simple()},

			{"name": "minorFifth",
			"chord": teoria.interval(note, 'P5').chord('m').name,
			"notes": teoria.interval(note, 'P5').chord('m').simple()},

			{"name": "majorSixth",
			"chord": teoria.interval(note, 'm6').chord('M').name,
			"notes": teoria.interval(note, 'm6').chord('M').simple()},

			{"name": "majorSeventh",
			"chord": teoria.interval(note, 'm7').chord('M').name,
			"notes": teoria.interval(note, 'm7').chord('M').simple()}
			];

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

		$scope.getChords = function() {
			if($scope.chordName) {
				count += 1;
				console.log(count);

				//major chord tree
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
					


				//minor chord tree
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
			}

			if (count === 3) {
				$scope.reset = true;

			}
		}	
	}

	$scope.resetPage = function() {
		$scope.begin = true;
		$scope.chordName = undefined;
		note = undefined;
		quality = undefined;
		count = 0;
		$scope.chordProgression = undefined;
		$scope.chordOne = undefined;
		$scope.chordTwo = undefined;
		$scope.chordThree = undefined;
		$scope.chordFour = undefined;
	}



}])
.controller('LoginCtrl', [
  '$scope',
  '$http',
  '$location',
  'Auth',
  function($scope, $http, $location, Auth) {
    $scope.user = {
      email: '',
      password: ''
    };
    $scope.actionName = 'Login';
    $scope.userAction = function() {
      $http.post('/api/auth', $scope.user).then(function(res) {
        Auth.saveToken(res.data.token);
        $location.path('/');
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
  function($scope, $http, $location, Auth) {
    $scope.user = {
      email: '',
      password: ''
    };
    $scope.actionName = 'SignUp';
    $scope.userAction = function() {
    	console.log($scope.user);
      $http.post('/api/users', $scope.user).then(function (res) {
        $http.post('/api/auth', $scope.user).then(function (res) {
            Auth.saveToken(res.data.token);
           console.log('hi');
          $location.path('/');
        }, function (res) {
            console.log(res.data);
        });
      }, function (res) {
          console.log(res.data);
      });
  	}
}])
.controller('ProfileCtrl', [
	'$scope',
	'$location',
	'Auth', 
	function($scope, $location, Auth) {
	$scope.user = Auth.currentUser();
	console.log($scope.user.progressions);

}])
.controller('NavBarCtrl', [
	'$scope',
	'Auth',
	function($scope, Auth) {
		$scope.logout = function() {
			Auth.logout();
		}
}]);