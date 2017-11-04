$(document).ready(function() {
	var targetPts = 0;
	var valuesArray = [];
	var numberOfCrystals = 4;

	// min and max values
	var targetMin = 19;
	var targetMax = 120;
	var crystalMin = 1;
	var crystalMax = 12;

	// score tracking
	var score = 0;
	var wins = 0;
	var losses = 0;

	// generate random number between two values
	function getRandomInt(min, max) {
		return Math.floor(Math.random()*(max-min+1)+min)
	}
	// generate target number
	targetPts = getRandomInt(targetMin, targetMax);

	function getRandomArray(max, min, arrayLength) {
		var returnArray =[];
		for (var i = 0; i < arrayLength; i++) {
			returnArray[i] = getRandomInt(min, max);
		}
		return returnArray
	}
	// generate crystal numbers
	valuesArray = getRandomArray(crystalMin, crystalMax, numberOfCrystals);

	// user clicks on crystal
	$('.crystalImg').on('click', function() {
		// get which crystal
		// get value
		// update score
		// compare score
		// update display
	})
	// function to compare score to target
	function scoreChecker(value1, value2) {
		if (value1 === value2) {
			// win
			wins = wins + 1;
			return 'won'
		} else if (value1 > value2) {
			// loss
			losses = losses + 1;
			return 'lost'
		} else {
			// neither win nor loss
			return 'continue'
		}
	}

	// reset
	function resetBoard() {
		score = 0;
		valuesArray = getRandomArray(crystalMin, crystalMax, numberOfCrystals);
		targetPts = getRandomInt(targetMin,targetMax);
		// update display
	}
})