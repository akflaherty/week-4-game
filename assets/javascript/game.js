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

	// generate target number
	targetPts = getRandomInt(targetMin, targetMax);
	// update display
	displayData(targetPts, score, wins, losses);
	// generate crystal numbers
	valuesArray = getRandomArray(crystalMin, crystalMax, numberOfCrystals);

	// user clicks on crystal
	$('.crystal').on('click', function() {
		// get which crystal
		var crystalIndex = Number($(this).attr('value'));
		// get value
		var crystalValue = valuesArray[crystalIndex];
		// update score
		score = score + crystalValue;
		// update display
		displayData(targetPts, score, wins, losses);
		// compare score
		var result = scoreChecker(score, targetPts);
		// use result to decide next step;
		if (result === 'won') {
			$('#resultMessage').text("You've won!");
			resetBoard();
			// displayData(targetPts, score, wins, losses);
		} else if (result === 'lost') {
			$('#resultMessage').text("You've lost.");
			resetBoard();
			// displayData(targetPts, score, wins, losses);
		}
	})

	// generate random number between two values
	function getRandomInt(min, max) {
		return Math.floor(Math.random()*(max-min+1)+min)
	}

	// update display
	function displayData(goal, total, countWon, countLost) {
		$('#targetDisp').text(goal);
		$('#scoreDisp').text(total);
		$('#winDisp').text(countWon);
		$('#lossDisp').text(countLost);
	}

	function getRandomArray(max, min, arrayLength) {
		var returnArray =[];
		for (var i = 0; i < arrayLength; i++) {
			returnArray[i] = getRandomInt(min, max);
		}
		return returnArray
	}
	
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
		displayData(targetPts, score, wins, losses);
	}
})