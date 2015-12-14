angular.module('HarmonyCtrls',[])
.controller('HarmonyCtrl', ['$scope', function($scope) {
	$scope.test = "This is a Test";
	 var c = teoria.note('c4');
	 $scope.cMin7 = c.chord('min7').simple();
}])
.controller('CompCtrl', ['$scope', function($scope) {
	$scope.count = 0;
	$scope.getValue = function() {
		
		var note = teoria.note($scope.note);
		var quality = $scope.chordQuality;

		$scope.count += 1;
		$scope.chordOne = note.chord(quality).name;

		$scope.chordNotes = {
			rootChord: note.chord(quality).simple(),
			minorSecond: teoria.interval(note, 'M2').chord('m').simple(),
			minorThird: teoria.interval(note, 'M3').chord('m').simple(),
			majorFourth: teoria.interval(note, 'P4').chord('M').simple(),
			majorFifth: teoria.interval(note, 'P5').chord('M').simple(),
			minorSixth: teoria.interval(note, 'M6').chord('m').simple(),
			diminishedSeventh: teoria.interval(note, 'M7').chord('dim').simple()
		}

		$scope.chords = {
			rootChord: note.chord(quality).name,
			minorSecond: teoria.interval(note, 'M2').chord('m').name,
			minorThird: teoria.interval(note, 'M3').chord('m').name,
			majorFourth: teoria.interval(note, 'P4').chord('M').name,
			majorFifth: teoria.interval(note, 'P5').chord('M').name,
			minorSixth: teoria.interval(note, 'M6').chord('m').name,
			diminishedSeventh: teoria.interval(note, 'M7').chord('dim').name
		}
	
		if($scope.count === 1 && quality === 'M') {
			$scope.chordOptions = [$scope.chords.minorSecond,
								$scope.chords.minorThird,
								$scope.chords.majorFourth,
								$scope.chords.majorFifth,
								$scope.chords.minorSixth
								];

		}

		console.log($scope.chords.rootChord);
		// console.log(minorSecond);
		// console.log(minorThird);
		// console.log(majorFourth);
		// console.log(majorFifth);
		// console.log(minorSixth);
		// console.log(diminishedSeventh);
	}


}]);