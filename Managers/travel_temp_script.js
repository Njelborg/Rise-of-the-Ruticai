 // global variables
const temperatureSelect = document.querySelector('#temperature');
const heatPenaltyInputs = document.querySelectorAll('[id^="nameInput"][id$="d"]');
const coldPenaltyInputs = document.querySelectorAll('[id^="nameInput"][id$="e"]');
const clothesRadios = Array.from({ length: 6 }, (_, i) => document.querySelectorAll(`[name="Clothes${i + 1}"]`));
const footgearRadios = Array.from({ length: 6 }, (_, i) => document.querySelectorAll(`[name="Footgear${i + 1}"]`));
const armorRadios = Array.from({ length: 6 }, (_, i) => document.querySelectorAll(`[name="Armor${i + 1}"]`));
const furCloakCheckboxes = Array.from({ length: 6 }, (_, i) => document.querySelector(`[name="fur cloak${i + 1}"]`));
const hatCheckboxes = Array.from({ length: 6 }, (_, i) => document.querySelector(`[name="Hat${i + 1}"]`));

var debug = true;
function echo(text) {
if (debug) { console.log(text);	
}}

var coldPenalty = 0;
var heatPenalty = 0;
var heatPenaltyCalc = [heatPenalty,heatPenalty,heatPenalty,heatPenalty,heatPenalty,heatPenalty];
var coldPenaltyCalc = [coldPenalty,coldPenalty,coldPenalty,coldPenalty,coldPenalty,coldPenalty];
var heatBonuses = [0,0,0,0,0,0];
var coldBonuses = [0,0,0,0,0,0];

console.log("Cold Penalty: " + coldPenaltyCalc)
console.log("Cold Bonus: " + coldBonuses)


function updatePenalties() {
  var temperature = temperatureSelect.value;
  switch (temperature) {
    case 'Fair':
	  heatPenalty = 0;
	  coldPenalty = 0;
      break;
    case 'Warm':
      heatPenalty = - 1;
	  coldPenalty = 0;
      break;
    case 'Hot':
      heatPenalty = - 2;
	  coldPenalty = 0;
      break;
    case 'Brutal':
      heatPenalty = - 4;
	  coldPenalty = 0;
      break;
    case 'Chilly':
      coldPenalty = - 1;
	  heatPenalty = 0;
      break;
    case 'Cold':
      coldPenalty = - 2;
	  heatPenalty = 0;
      break;
    case 'Frigid':
       coldPenalty = - 4;
	  heatPenalty = 0;
      break;
    case 'Deathly':
       coldPenalty = - 8;
	  heatPenalty = 0;
      break;
    default:
      break;
  }
  //set X-PenaltyCalc to the correct penalty
    for (let i = 0; i < coldPenaltyCalc.length; i++) {
    coldPenaltyCalc[i] = coldPenalty;
	for (let i = 0; i < heatPenaltyCalc.length; i++) {
    heatPenaltyCalc[i] = heatPenalty;
	}}

//reset bonuses
var heatBonuses = [0,0,0,0,0,0];
var coldBonuses = [0,0,0,0,0,0];

//add bonus modifiers

  clothesRadios.forEach((radios, index) => {
    radios.forEach(radio => {
      if (radio.checked) {
        switch (radio.value) {
          case 'Nude':
            coldBonuses[index] -= 1;
            break;
          case 'Silk':		  
            coldBonuses[index] -= 0;
            break;
          case 'Linen':
            coldBonuses[index] -= 0;
            break;
          case 'Wool':
            coldBonuses[index] += 1;
            break;
          default:
            break;
        }
      }
    });
  });
  

  footgearRadios.forEach((radios, index) => {
    radios.forEach(radio => {
      if (radio.checked) {
        switch (radio.value) {
          case 'Bearfoot':
            coldBonuses[index] -= 1;
            break;			
          case 'Shoes':
            coldBonuses[index] -= 0;
            break;
          case 'Boots':
            coldBonuses[index] += 1;
            break;
          default:
            break;
        }
      }
    });
  });

  armorRadios.forEach((radios, index) => {
    radios.forEach(radio => {
      if (radio.checked) {
        switch (radio.value) {
          case 'Leather Armor':
            coldBonuses[index] += 1;
            break;
          case 'Fur Armor':
            coldBonuses[index] += 2;
            break;
		  case 'No Warm Armor':
            coldBonuses[index] += 0;
            break;
          default:
            break;

		}
      }
    });

  });

  furCloakCheckboxes.forEach((checkbox, index) => {
    if (checkbox.checked) {
      coldBonuses[index] += 1;
    }
  });

  hatCheckboxes.forEach((checkbox, index) => {
    if (checkbox.checked) {
      heatBonuses[index] += 1;
    }
  });
  
//heat inputs

heatPenaltyInputs.forEach((input, index) => {
    let value = heatPenaltyCalc[index] + heatBonuses[index];
    input.value = Math.min(value, 0);
	});
//cold input values
coldPenaltyInputs.forEach((input, index) => {
if ((heatPenaltyCalc[index] + heatBonuses[index]) <0) {
		input.value = 0
	} else {
		let value = coldPenaltyCalc[index] + coldBonuses[index];
		input.value = Math.min(value, 0);
  }
});
}


temperatureSelect.addEventListener('change', updatePenalties);

clothesRadios.forEach(radios => {
  radios.forEach(radio => {
    radio.addEventListener('change', updatePenalties);
  });
});

footgearRadios.forEach(radios => {
  radios.forEach(radio => {
    radio.addEventListener('change', updatePenalties);
  });
});

armorRadios.forEach(radios => {
  radios.forEach(radio => {
    radio.addEventListener('change', updatePenalties);
  });
});

furCloakCheckboxes.forEach(checkbox => {
  checkbox.addEventListener('change', updatePenalties);
});

hatCheckboxes.forEach(checkbox => {
  checkbox.addEventListener('change', updatePenalties);
});

