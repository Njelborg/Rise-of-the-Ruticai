// Define a data object to store the options for the second select element
var data = {
  "cellus": ["Melee & Stealth", "Melee & Riding", "Stealth & Riding"],
  "croesios": ["Melee & Acting", "Melee & Social Skills", "Acting & Social Skills"],
  "illatium": ["Crafts & Melee", "Crafts & Stamina", "Melee & Stamina"],
  "ionia": ["Melee & Seamanship", "Melee & World Lore", "Seamanship & World Lore"],
  "libue": ["Acting & Climbing", "Acting & Stamina", "Climbing & Stamina"],
  "sarmatae": ["Missile & Riding", "Missile & Trickery", "Riding & Trickery"],
  "shim": ["Missile & Extra Language", "Missile & Social Skills", "Extra Language & Social Skills"],
  "suebia": ["Melee & Tracking", "Melee & Navigation", "Tracking & Navigation"],
  "thracar": ["Missile & Stamina", "Missile & Stealth", "Stamina & Stealth"]
};

// Get references to the select elements
var genderSelect = document.getElementById("gender");
var firstSelect = document.getElementById("realm");
var secondSelect = document.getElementById("realm-skill");

// Add a change event listener to the gender select element
genderSelect.addEventListener("change", function() {
  // Get the selected value of the gender select element
  var selectedGender = this.value;
  // If the selected value is male, enable the second select element and its options
  if (selectedGender == "male") {
    secondSelect.disabled = false;
    var options = secondSelect.options;
    for (var i = 0; i < options.length; i++) {
      options[i].disabled = false;
    }
    // Trigger the change event of the first select element to update the second select element
    firstSelect.dispatchEvent(new Event("change"));
  }
  // Otherwise, disable the second select element and its options, and set it to N/A
  else {
    secondSelect.disabled = true;
    secondSelect.innerHTML = "";
    var option = document.createElement("option");
    option.value = "N/A";
    option.text = "N/A";
    option.selected = true;
    secondSelect.appendChild(option);
  }
});

// Add a change event listener to the first select element
firstSelect.addEventListener("change", function() {
  // Get the selected value of the gender select element
  var selectedGender = genderSelect.value;
  // If the selected value is male, update the second select element based on the first select element
  if (selectedGender == "male") {
    // Clear the options of the second select element
    secondSelect.innerHTML = "";
    // Get the selected value of the first select element
    var selectedValue = this.value;
    // Get the corresponding options from the data object
    var options = data[selectedValue];
    // Add options to the second select element
    for (var i = 0; i < options.length; i++) {
      var option = document.createElement("option");
      option.value = options[i];
      option.text = options[i];
      secondSelect.appendChild(option);
    }
  }
});