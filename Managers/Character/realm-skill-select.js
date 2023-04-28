// Define a data object to store the options for the second select element
var data = {
  "--Select--": ["--Select--"],
  "cellus": ["--Select--", "Stealth", "Riding"],
  "croesios": ["--Select--", "Acting", "Social Skills"],
  "illatium": ["--Select--", "Crafts", "Stamina"],
  "ionia": ["--Select--", "Seamanship", "World Lore"],
  "libue": ["--Select--", "Climbing", "Stamina"],
  "sarmatae": ["--Select--", "Riding", "Trickery"],
  "shim": ["--Select--", "Extra Language", "Social Skills"],
  "suebia": ["--Select--", "Tracking", "Navigation"],
  "thracar": ["--Select--", "Stamina", "Stealth"]
};

// Get references to the select elements
var genderSelect = document.getElementById("gender");
var realmSelect = document.getElementById("realm");
var realmSkill1Select = document.getElementById("realm-skill-1");
var realmSkill2Select = document.getElementById("realm-skill-2");

// Add a change event listener to the gender select element
genderSelect.addEventListener("change", function() {
  // Get the selected value of the gender select element
  var selectedGender = this.value;
  // If the selected value is male, enable the second select element and its options
  if (selectedGender == "male") {
    realmSkill1Select.disabled = false;
    realmSkill2Select.disabled = false;
    var options1 = realmSkill1Select.options;
    var options2 = realmSkill2Select.options;
    for (var i = 0; i < options1.length; i++) {
      options1[i].disabled = false;
    }
    for (var i = 0; i < options2.length; i++) {
      options2[i].disabled = false;
    }
    // Trigger the change event of the first select element to update the second select element
    realmSelect.dispatchEvent(new Event("change"));
  }
  // Otherwise, disable the second select elements and their options, and set them to N/A
  else {
    realmSkill1Select.disabled = true;
    realmSkill1Select.innerHTML = "";
    var option1 = document.createElement("option");
    option1.value = "N/A";
    option1.text = "N/A";
    option1.selected = true;
    realmSkill1Select.appendChild(option1);
    realmSkill2Select.disabled = true;
    realmSkill2Select.innerHTML = "";
    var option2 = document.createElement("option");
    option2.value = "N/A";
    option2.text = "N/A";
    option2.selected = true;
    realmSkill2Select.appendChild(option2);
  }
});

// Add a change event listener to the realm select element
realmSelect.addEventListener("change", function() {
  // Get the selected value of the gender select element
  var selectedGender = genderSelect.value;
  // If the selected value is male, update the select elements based on the first select element
  if (selectedGender == "male") {
    // Clear the options of the realm skill select elements
    realmSkill1Select.innerHTML = "";
    realmSkill2Select.innerHTML = "";
    // Get the selected value of the realm select element
    var selectedValue = this.value;
    // Get the corresponding options from the data object
    var options = data[selectedValue];

    // Add options to the realm skill 2 select element
    for (var i = 0; i < options.length; i++) {
      var option = document.createElement("option");
      option.value = options[i];
      option.text = options[i];
      realmSkill2Select.appendChild(option);
    }
    // Set the value of the realm skill 1 select element based on the realm
// Set the value and options of the realm skill 1 select element based on the realm
if (selectedValue == "cellus" || selectedValue == "croesios" || selectedValue == "illatium" || selectedValue == "ionia" || selectedValue == "suebia") {
  realmSkill1Select.innerHTML = "";
  var option1 = document.createElement("option");
  option1.value = "Melee";
  option1.text = "Melee";
  option1.selected = true;
  realmSkill1Select.appendChild(option1);
} else {
  realmSkill1Select.innerHTML = "";
  var option1 = document.createElement("option");
  option1.value = "Missile";
  option1.text = "Missile";
  option1.selected = true;
  realmSkill1Select.appendChild(option1);
}

  }
});

// Trigger the change event of the gender select element to initialize the realm skill select elements
genderSelect.dispatchEvent(new Event("change"));
