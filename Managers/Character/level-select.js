// a function to create a new select element with the given id, name and options
function createSelect(id, name, options) {
  var select = document.createElement("select");
  select.id = id;
  select.name = name;
  
  // create an empty option
  var emptyOption = document.createElement("option");
  emptyOption.value = "";
  emptyOption.text = "--Select Option--";
  select.appendChild(emptyOption);
  
  // loop through the options and create option elements
  for (var i = 0; i < options.length; i++) {
    var option = document.createElement("option");
    option.value = options[i];
    option.text = options[i];
    select.appendChild(option);
  }
  
  return select;
}

// a function to handle the reward change event
function rewardChange(level) {
  // get the reward value for the given level
  var reward = document.getElementById("level" + level + "-reward").value;
  
  // get the option div for the given level
  var optionDiv = document.getElementById("level" + level + "-option");
  
  // clear the option div
  optionDiv.innerHTML = "";
  
  // check if the reward is not empty
  if (reward != "") {
    // create a new select element based on the reward type
    var optionSelect;
    
    if (reward == "Skill") {
      // create a skill select with the following options
      var skillOptions = ["Acrobatics", "Acting", "Alchemy", "Climbing", "Craft", "Foraging", "Fortitude", "Healing", "Mechanics", "Melee", "Missile", "Music", "Navigation", "Religion", "Riding", "Rune Lore", "Seamanship", "Social Skills", "Stamina", "Stealth", "Swimming", "Tracking", "Tricery", "World Lore"];
      optionSelect = createSelect("level" + level + "-skill", "level" + level + "-skill", skillOptions);
      
    } else if (reward == "Attribute") {
      // create an attribute select with the following options
      var attributeOptions = ["STR", "DEX", "CON", "WIL", "INT", "CHA"];
      optionSelect = createSelect("level" + level + "-attribute", "level" + level + "-attribute", attributeOptions);
      
    } else if (reward == "Talent") {
      // create a talent select with the following options
      var talentOptions = ["Marked", "Rhythm", "Athlete", "Focused", "Fighter", "Aquatic", "Steady Hands", "Skirmisher", "Empathic"];
      optionSelect = createSelect("level" + level + "-talent", "level" + level + "-talent", talentOptions);
      
      // TODO: add logic to remove selected talents from higher levels
    }
    
    // append the new select element to the option div
    optionDiv.appendChild(optionSelect);
    
  }
}