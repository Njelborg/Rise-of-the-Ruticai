//global variables


const characterNameInputs = document.querySelectorAll('[id^="nameInput"][id$="a"]');
const staminaInputs = document.querySelectorAll('[id^="nameInput"][id$="b"]');
const msInputsPenaltyInputs = document.querySelectorAll('[id^="nameInput"][id$="c"]');

var dataLog = document.getElementById("dataLog");
var tripNumber = document.querySelector(`select[id=tripNumberSelect`)

function roll3d6() {
    var total = 0;
    for (var i = 0; i < 3; i++) {
        total += Math.floor(Math.random() * 6) + 1;
    }
    return total;
}

function takeTrip() {
var totalBonus = [0,0,0,0,0,0]
allPassed = true;
console.log(dataLog);
heatPenaltyInputs.forEach((input, index) => {
	totalBonus[index] += parseInt(input.value) || 0;
})
coldPenaltyInputs.forEach((input, index) => {
	totalBonus[index] += parseInt(input.value) || 0;
})
difficultyPenaltyInputs.forEach((input, index) => {
	totalBonus[index] += parseInt(input.value) || 0;
})
staminaInputs.forEach((input, index) => {
	totalBonus[index] += parseInt(input.value) || 0;
})
msInputsPenaltyInputs.forEach((input, index) => {
	totalBonus[index] += parseInt(input.value) || 0;
})
totalBonus.forEach((element, index) => {
  console.log(`"totalbonus is " + Element ${index}: ${element}`
  );
});
//identify trip in datalog
dataLog.value += `Trip Number ${tripNumber.value}\n`;

//increase fatigue and failed trip logic
for (let i = 0; i < 6; i++) {
	console.log(characterNameInputs[i].value)
	if (characterNameInputs[i].value) {
	if ((roll3d6() + totalBonus[i]) < 15) {
		dataLog.value += characterNameInputs[i].value + " failed\n";
		let fatigueLevelSelect = document.querySelector(`select[id=fatigue_level${i+1}]`);
		fatigueLevelSelect.value = parseInt(fatigueLevelSelect.value) + 1;
		allPassed = false;
}}
}
//all passed logic.
if (allPassed) {
    dataLog.value += "Traveled Well\n";
}
//trip number logic	
	tripNumber.value = parseInt(tripNumber.value) + 1;
	
updateDifficulty();
}
/* for (let i = 1; i <= 6; i++) {
	if (roll3d6
}


    // Calculate the target number based on the trip number
    const targetNumber = 15;

    if (result > targetNumber) {
      passCount++;
    } else {
      dataLog.value += `${nameInput.value} failed trip ${tripNumber}\n`;
    }
    nonBlankNameInputsPassCount++;
  }

  if (nonBlankNameInputsPassCount === passCount && nonBlankNameInputsPassCount > 0) {
    dataLog.value += `Travelled well on trip ${tripNumber}\n`;
  }
});
const takeTripButton = document.querySelector('#take-trip-button');
const resetTripButton = document.querySelector('#resetTripButton');
const tripNumberSelect = document.querySelector('#tripNumberSelect');

takeTripButton.addEventListener('click', () => {
  const currentTripNumber = parseInt(tripNumberSelect.value);
  if (currentTripNumber < 6) {
    tripNumberSelect.value = currentTripNumber + 1;
  }
});

resetTripButton.addEventListener('click', () => {
  tripNumberSelect.value = '1';*/
