// Get the select elements by id
var gender = document.getElementById("gender");
var realm = document.getElementById("realm");
var tribe = document.getElementById("tribe");
var outlook = document.getElementById("outlook");
var skillClass = document.getElementById("skill-class");

// Define an array of all possible skill classes
var allSkillClasses = ["--Select--", "Bard", "Berserk", "Ranger", "Sorcerer-Geistmagen", "Sorcerer-Keeper", "Sorcerer-Lector", "Sorcerer-Spruzarii", "Sorcerer-Trollock", "Sorcerer-Volva", "Stalker", "Trickster", "Valkyrie", "Warrior", "Maenad", "Light Infantry", "Heavy Infantry", "Light Cavalry", "Heavy Cavalry", "Marine", "Medic", "Officer", "Pirate", "Explorer", "Merchant", "Chosen", "Oracle"];
// Define a function that adds all the skill classes as options to the skill-class select element
function addAllSkillClassOptions() {
  // Clear the skill-class options
  skillClass.innerHTML = "";
  // Add each skill class as an option
  for (var i = 0; i < allSkillClasses.length; i++) {
    var option = document.createElement("option");
    option.value = allSkillClasses[i];
    option.text = allSkillClasses[i];
    skillClass.appendChild(option);
  }
}

// Add the initial "--Select--" option to the skill-class select element
function addInitialOption() {
  var initialOption = document.createElement("option");
  initialOption.value = "";
  initialOption.text = "--Select--";
  skillClass.appendChild(initialOption);
}

// Define a function that filters the skill class options based on the other select values
function filterSkillClassOptions() {
  // Get the current values of the other select elements
  var genderValue = gender.value;
  var realmValue = realm.value;
  var tribeValue = tribe.value;
  var outlookValue = outlook.value;

  var currentSkillClassValue = skillClass.value;
  var currentSkillClassOptionIsValid = false;
  
// Loop through each skill class option and check if it meets the conditions
  for (var i = 0; i < skillClass.options.length; i++) {
    var option = skillClass.options[i];
    var value = option.value;
    var show = true; // A flag to indicate if the option should be shown or hidden
    // Check the conditions for each skill class and set the flag accordingly
    switch (value) {
      case "Bard":
        show = outlookValue == "Religious" && (realmValue == "suebia" || realmValue == "sarmatae" || realmValue == "cellus");
        break;
      case "Berserk":
        show = outlookValue == "Religious" && (realmValue == "suebia" || realmValue == "sarmatae" || realmValue == "cellus") && genderValue == "male";
        break;
      case "Ranger":
        show = outlookValue == "Religious" && (realmValue == "suebia" || realmValue == "sarmatae" || realmValue == "cellus");
        break;
      case "Sorcerer-Geistmagen":
        show = outlookValue == "Traditional" && tribeValue == "Bocci";
        break;
      case "Sorcerer-Keeper":
        show = outlookValue == "Traditional" && tribeValue == "Ruticai";
        break;
      case "Sorcerer-Lector":
        show = outlookValue == "Traditional" && tribeValue == "Angavi";
        break;
      case "Sorcerer-Spruzarii":
        show = outlookValue == "Traditional" && tribeValue == "Sabines";
        break;
      case "Sorcerer-Trollock":
        show = outlookValue == "Traditional" && tribeValue == "Lugii";
        break;
      case 'Sorcerer-Volva':
        show = outlookValue =='Traditional' && tribeValue =='Lugii' && genderValue =='female';
        break;
      case 'Stalker':
        show = realmValue =='suebia' || realmValue =='sarmatae' || realmValue =='cellus';
        break;
      case 'Trickster':
        show = realmValue =='suebia' || realmValue =='sarmatae' || realmValue =='cellus';
        break;
      case 'Valkyrie':
        show = outlookValue =='Religious' && (realmValue =='suebia' || realmValue =='sarmatae' || realmValue =='cellus') && genderValue =='female';
        break;
      case 'Warrior':
        show = realmValue =='suebia' || realmValue =='sarmatae' || realmValue =='cellus';
        break;
		case 'Maenad':
        show = (realmValue.toLowerCase() == 'ionia' || realmValue.toLowerCase() == 'thracar' || realmValue.toLowerCase() == 'illatium') && genderValue.toLowerCase() == 'female' && outlookValue.toLowerCase() == 'religious';
        break;
      case 'Light Infantry':
        show = (realmValue.toLowerCase() == 'ionia' || realmValue.toLowerCase() == 'thracar' || realmValue.toLowerCase() == 'illatium') && genderValue.toLowerCase() == 'male';
        break;
      case 'Heavy Infantry':
        show = (realmValue.toLowerCase() == 'ionia' || realmValue.toLowerCase() == 'thracar' || realmValue.toLowerCase() == 'illatium') && genderValue.toLowerCase() == 'male';
        break;
      case 'Light Cavalry':
        show = (realmValue.toLowerCase() == 'ionia' || realmValue.toLowerCase() == 'thracar' || realmValue.toLowerCase() == 'illatium') && genderValue.toLowerCase() == 'male';
        break;
      case 'Heavy Cavalry':
        show = (realmValue.toLowerCase() == 'ionia' || realmValue.toLowerCase() == 'thracar' || realmValue.toLowerCase() == 'illatium') && genderValue.toLowerCase() == 'male';
        break;
      case 'Marine':
        show = (realmValue.toLowerCase() == 'ionia' || realmValue.toLowerCase() == 'thracar' || realmValue.toLowerCase() == 'illatium') && genderValue.toLowerCase() == 'male';
        break;
      case 'Medic':
        show = (realmValue.toLowerCase() == 'ionia' || realmValue.toLowerCase() == 'thracar' || realmValue.toLowerCase() == 'illatium') && genderValue.toLowerCase() == 'male';
        break;
      case 'Officer':
        show = (realmValue.toLowerCase() == 'ionia' || realmValue.toLowerCase() == 'thracar' || realmValue.toLowerCase() == 'illatium') && genderValue.toLowerCase() == 'male';
        break;
      case 'Pirate':
        show = realmValue.toLowerCase() == 'ionia' || realmValue.toLowerCase() == 'thracar' || realmValue.toLowerCase() == 'illatium';
        break;
      case "Explorer":
        show = realmValue.toLowerCase () =="ionia"|| realmValue.toLowerCase () =="thracar"|| realmValue.toLowerCase () =="illatium";
        break;
      case "Merchant":
        show = realmValue.toLowerCase () =="ionia"|| realmValue.toLowerCase () =="thracar"|| realmValue.toLowerCase () =="illatium";
        break;
      case "Chosen":
        show = (realmValue.toLowerCase () =="ionia"|| realmValue.toLowerCase () =="thracar"|| realmValue.toLowerCase () =="illatium")&&genderValue.toLowerCase () =="male"&&outlookValue.toLowerCase () =="religious";
        break;
      case "Oracle":
        show = (realmValue.toLowerCase () =="ionia"|| realmValue.toLowerCase () =="thracar"|| realmValue.toLowerCase () =="illatium")&&genderValue.toLowerCase () =="female"&&outlookValue.toLowerCase () =="religious";
    }
    // Show or hide the option based on the flag
    option.hidden = !show;
	
	 if (value === currentSkillClassValue && show) {
      currentSkillClassOptionIsValid = true;
  }
}
  if (!currentSkillClassOptionIsValid) {
    skillClass.value = ""; // Set the value to the initial "--Select--" option
  }
}
// Add event listeners to the other select elements to call the filter function when their values change
gender.addEventListener("change", filterSkillClassOptions);
realm.addEventListener("change", filterSkillClassOptions);
tribe.addEventListener("change", filterSkillClassOptions);
outlook.addEventListener("change", filterSkillClassOptions);

// Call the functions initially to set up the initial state of the select elements
addInitialOption();
addAllSkillClassOptions();
filterSkillClassOptions();
