angular.module('HarmonyCtrls',['HarmonyServices'])
.controller('HarmonyCtrl', ['$scope', function($scope) {

}])
.controller('CompCtrl', ['$scope','Auth', function($scope, Auth) {
	var count = 0;
	$scope.begin = true;
	$scope.reset = false;
	$scope.favorite = false;

	$scope.getInitialValue = function() {
		//get value from initial inputs and set them as vars
		var note = teoria.note($scope.note);
		var quality = $scope.chordQuality;

		//chords
		var I = {
			"name": "majorRoot",
			"chord": note.chord(quality).name, 
			"notes": note.chord(quality).simple()}

		var i = {
			"name": "minorRoot",
			"chord": note.chord(quality).name, 
			"notes": note.chord(quality).simple()}

		var iiDim = {
			"name": "diminishedSecond",
			"chord": teoria.interval(note, 'M2').chord('dim').name, 
			"notes": teoria.interval(note, 'M2').chord('dim').simple()}

		var ii = {
			"name": "minorSecond",
			"chord": teoria.interval(note, 'M2').chord('m').name, 
			"notes": teoria.interval(note, 'M2').chord('m').simple()}

		var III = {
			"name": "majorThird",
			"chord": teoria.interval(note, 'm3').chord('M').name,
			"notes": teoria.interval(note, 'm3').chord('M').simple()}

		var iii = {
			"name": "minorThird",
			"chord": teoria.interval(note, 'M3').chord('m').name,
			"notes": teoria.interval(note, 'M3').chord('m').simple()}

		var IV = {
			"name": "majorFourth",
			"chord": teoria.interval(note, 'P4').chord('M').name,
			"notes": teoria.interval(note, 'P4').chord('M').simple()}

		var iv = {
			"name": "minorFourth",
			"chord": teoria.interval(note, 'P4').chord('m').name,
			"notes": teoria.interval(note, 'P4').chord('m').simple()}

		var V = {
			"name": "majorFifth",
			"chord": teoria.interval(note, 'P5').chord('M').name,
			"notes": teoria.interval(note, 'P5').chord('M').simple()}

		var v = {
			"name": "minorFifth",
			"chord": teoria.interval(note, 'P5').chord('m').name,
			"notes": teoria.interval(note, 'P5').chord('m').simple()}

		var VI = {
			"name": "majorSixth",
			"chord": teoria.interval(note, 'm6').chord('M').name,
			"notes": teoria.interval(note, 'm6').chord('M').simple()}
		
		var vi = {
			"name": "minorSixth",
			"chord": teoria.interval(note, 'M6').chord('m').name,
			"notes": teoria.interval(note, 'M6').chord('m').simple()}

		var VII = {
			"name": "majorSeventh",
			"chord": teoria.interval(note, 'm7').chord('M').name,
			"notes": teoria.interval(note, 'm7').chord('M').simple()}

		var relations = {
			I: {
				"goesTo": [
					{
						ii: {
							"goesTo": [
								{
									iii: {
										"goesTo": [
											{
												IV: {
													"goesTo": null
												}
											},
											{
												V: {
													"goesTo": null
												}
											}
										]
									}
								},
								{
									IV: {
										"goesTo": [
											{
												V: {
													"goesTo": null
												}
											}
										]
									}
								}
							]
						}
					},
					{
						IV: {
							"goesTo": [
								{
									I: {
										"goesTo": [
											{

											}
										]
								},
								{
									V: {
										"goesTo":
									}

								}
								}
							]
						}
					},
					{
						V: {
							"goesTo":
						}
					},
					{
						vi: {
							"goesTo":
						}
					}

				]
			} 
		}

		//set initial state
		$scope.chordOne = note.chord(quality).name;
		$scope.chordOneNotes = note.chord(quality).simple();
		$scope.begin = false;
		$scope.chordProgression = [];
		$scope.chordProgression.push($scope.chordOne);

		//set initial options based on quality value
		if(quality === 'M' && count === 0) {
			$scope.chordOptions = [ii.chord, IV.chord, V.chord, vi.chord];
		}
	}

	$scope.getChords = function() {
		count += 1;
		if ($scope.chordName) {
			if (count === 1) {
				//run getChordTwo function
			} else if (count === 2) {
				//run getChrodThree function
			} else if (count === 3) {
				//run getChordFour function
			} else {
				return;
			}
		}
	}

		


			

		

			
			
	

	$scope.resetPage = function() {
		$scope.begin = true;
		$scope.reset = false;
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