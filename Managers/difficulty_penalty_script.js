
//global variables
const difficultyPenaltyInputs = document.querySelectorAll('[id^="nameInput"][id$="f"]');
const percipitationSelect = document.querySelector('#precipitation');
const roughTerrainCheckbox = document.querySelector('#Rough_Terrain');
const jogCheckbox = document.querySelector('#jog');
const tripNumberSelect = document.querySelector('#tripNumberSelect');

const mountedSelect = Array.from({ length: 6 }, (_, i) => document.querySelectorAll(`#mountedSelect${i + 1}`));
const travelerCheckbox = Array.from({ length: 6 }, (_, i) => document.querySelectorAll(`#traveler${i + 1}`));
const fatigueSelect = Array.from({ length: 6 }, (_, i) => document.querySelectorAll(`#fatigue_level${i + 1}`));

var percipitationPenalty

console.log(travelerCheckbox);


function updateDifficulty() {
	  var percipitation = percipitationSelect.value;
  switch (percipitation) {
	case 'none':
	  percipitationPenalty = 0;
      break;
	case 'drizzle':
	  percipitationPenalty = -1;
      break;
    case 'rain-snow':
      percipitationPenalty = -2;
      break;
    case 'thunderstorm-heavy-snow':
      percipitationPenalty = -3;
      break;
    case 'hail':
      percipitationPenalty = -4;
      break;    
    default:
      break;	
}

var difficultyMods = percipitationPenalty - (tripNumberSelect.value * 2 - 2)

    if (roughTerrainCheckbox.checked) {
      difficultyMods -= 2;
	}
	if (jogCheckbox.checked) {
      difficultyMods -= 2;
	}
console.log("difficultyMods is " + difficultyMods);

var difficulty = [difficultyMods,difficultyMods,difficultyMods,difficultyMods,difficultyMods,difficultyMods]
console.log("difficulty is " + difficulty);



	travelerCheckbox.forEach((selectNodeList, index) => {
	selectNodeList.forEach(checkbox => {
    if (checkbox.checked) {
      difficulty[index] += 2;
    }
  });
 });



	mountedSelect.forEach((selectNodeList, index) => {
	selectNodeList.forEach(select => {
        switch (select.value) {
          case 'None':
            difficulty[index] += 0;
            break;
          case 'driver':
            difficulty[index] += 2;
            break;
		  case 'passenger':
            difficulty[index] += 4;
            break;
		  case 'officer':
            difficulty[index] += 3;
            break;
		  case 'crew':
            difficulty[index] += 1;
            break;
          default:
            break;
}
});
});

mountedSelect.forEach((nodeList, index) => {
  console.log(`NodeList ${index}:`);
  nodeList.forEach((element) => {
    console.log(element.value);
  });
  });


	fatigueSelect.forEach((selectNodeList, index) => {
	selectNodeList.forEach(select => {

        switch (select.value) {
          case '0':
            difficulty[index] += 0;
            break;
          case '1':
            difficulty[index] -= 1;
            break;
		  case '2':
            difficulty[index] -= 2;
            break;
		  case '3':
            difficulty[index] -= 3;
            break;
		  case '4':
            difficulty[index] -= 4;
            break;
          default:
            break;
}
});
});
 
difficultyPenaltyInputs.forEach((input, index) => {
    input.value = difficulty[index];
	});
}

percipitationSelect.addEventListener('change', updateDifficulty);
roughTerrainCheckbox.addEventListener('change', updateDifficulty);
jogCheckbox.addEventListener('change', updateDifficulty);
tripNumberSelect.addEventListener('change', updateDifficulty);


mountedSelect.forEach(selectNodeList => {
  selectNodeList.forEach(select => {
    select.addEventListener('change', updateDifficulty);
  });
});


travelerCheckbox.forEach(checkboxNodeList => {
  checkboxNodeList.forEach(checkbox => {
    checkbox.addEventListener('change', updateDifficulty);
  });
});

fatigueSelect.forEach(selectNodeList => {
  selectNodeList.forEach(select => {
    select.addEventListener('change', updateDifficulty);
  });
});
