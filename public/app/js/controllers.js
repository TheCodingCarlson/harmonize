angular.module('HarmonyCtrls',[])
.controller('HarmonyCtrl', ['$scope', function($scope) {
	$scope.test = "This is a Test";
	 var c = teoria.note('c4');
	 $scope.cMin7 = c.chord('min7').simple();
}])
.controller('CompCtrl', ['$scope', function($scope) {
	var count = 0;
	$scope.begin = true;
	$scope.getInitialValue = function() {
		
		var note = teoria.note($scope.note);
		var quality = $scope.chordQuality;

		$scope.chordOne = note.chord(quality).name;
		$scope.begin = false;

		// $scope.chordNotes = {
		// 	rootChord: note.chord(quality).simple(),
		// 	minorSecond: teoria.interval(note, 'M2').chord('m').simple(),
		// 	minorThird: teoria.interval(note, 'M3').chord('m').simple(),
		// 	majorFourth: teoria.interval(note, 'P4').chord('M').simple(),
		// 	majorFifth: teoria.interval(note, 'P5').chord('M').simple(),
		// 	minorSixth: teoria.interval(note, 'M6').chord('m').simple(),
		// 	diminishedSeventh: teoria.interval(note, 'M7').chord('dim').simple()
		// }

		$scope.chords = {
			rootChord: note.chord(quality).name,
			minorSecond: teoria.interval(note, 'M2').chord('m').name,
			minorThird: teoria.interval(note, 'M3').chord('m').name,
			majorFourth: teoria.interval(note, 'P4').chord('M').name,
			majorFifth: teoria.interval(note, 'P5').chord('M').name,
			minorSixth: teoria.interval(note, 'M6').chord('m').name,
			diminishedSeventh: teoria.interval(note, 'M7').chord('dim').name
		}

		if(count === 0 && quality === 'M') {
			$scope.chordOptions = [
				{chord: $scope.chords.minorSecond, num: 1},
				{chord: $scope.chords.majorFourth, num: 2},
				{chord: $scope.chords.majorFifth, num: 3},
				{chord: $scope.chords.minorSixth, num: 4}
				];
		} 

		$scope.getChords = function() {

			if (count < 4) {
				count += 1;
				chordNum = parseInt($scope.chordNumber);

				console.log("Count is: " + count);
				console.log("Chord Number is: " + chordNum);
				
				//for ii chord
				if (count === 1 && chordNum === 1) {
					$scope.chordTwo = $scope.chords.minorSecond;
					$scope.chordOptions = [
						{chord: $scope.chords.minorThird, num: 1},
						{chord: $scope.chords.majorFourth, num: 2}
					];

				} else if (count === 2 && chordNum === 1) {
					$scope.chordThree = $scope.chords.minorThird;
					$scope.chordOptions = [
						{chord: $scope.chords.majorFourth, num: 1},
						{chord: $scope.chords.majorFifth, num: 2}
					];

				} else if (count === 2 && chordNum === 2) {
					$scope.chordThree = $scope.chords.majorFourth;
					$scope.chordFour = $scope.chords.majorFifth;
					return;

				} else if (count === 3 && chordNum === 1) {
					$scope.chordFour = $scope.chords.majorFourth;
					return;
					

				} else if (count === 3 && chordNum === 2) {
					$scope.chordFour = $scope.chords.majorFifth;
					return;
					
				//for IV chord
				} 

				// else if (count === 1 && chordNum === 2) {
				// 	$scope.chordTwo = $scope.chords.majorFourth;
				// 	$scope.chordOptions = [
				// 		{chord: $scope.chords.rootChord, num: 1},
				// 		{chord: $scope.chords.majorFifth, num: 2},
				// 		{chord: $scope.chords.minorSixth, num: 3}
				// 	];

				// }

				// } else if (count === 2 && chordNum === 2) {
				// 	$scope.chordThree = $scope.chords.rootChord;
				// 	$scope.chordOptions = [
				// 	{chord: $scope.chords.majorFourth, num: 1},
				// 	{chord: $scope.chords.majorFifth, num: 2}
				// 	];
				// }


				// else if (count === 1 && chordNum === 3) {
				// 	$scope.chordTwo = $scope.chords.majorFifth;
				// 	$scope.chordOptions = [
				// 		{chord: $scope.chords.rootChord, num: 1},
				// 		{chord: $scope.chords.majorFourth, num: 2},
				// 		{chord: $scope.chords.minorSixth, num: 3}
				// 	];

				// } else if (count === 1 && chordNum === 4) {
				// 	$scope.chordTwo = $scope.chords.minorSixth;
				// 	$scope.chordOptions = [
				// 		{chord: $scope.chords.minorSecond, num: 1},
				// 		{chord: $scope.chords.majorFourth, num: 2}
				// 	];

				// }

			} else {
				return;
			}

		}

	}


}]);