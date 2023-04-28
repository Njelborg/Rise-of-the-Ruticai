function genderChange() {
  var gender = document.getElementById("gender").value;
  
  if (gender == "female") {
    // enable the female skills selects
    document.getElementById("female-skill-1").disabled = false;
    
    // set the default values for the female skills selects
    document.getElementById("female-skill-1").value = "";
    document.getElementById("female-skill-2").value = "";
    document.getElementById("female-skill-3").value = "";
    
  } else {
    // disable the female skills selects
    document.getElementById("female-skill-1").disabled = true;
    document.getElementById("female-skill-2").disabled = true;
    document.getElementById("female-skill-3").disabled = true;
    
    // clear the values for the female skills selects
    document.getElementById("female-skill-1").value = "";
    document.getElementById("female-skill-2").value = "";
    document.getElementById("female-skill-3").value = "";
    
  }
}
// Get the select elements by their ids
var femaleSkill1 = document.getElementById("female-skill-1");
var femaleSkill2 = document.getElementById("female-skill-2");
var femaleSkill3 = document.getElementById("female-skill-3");

// Add an onchange event listener to the femaleSkill1 element
femaleSkill1.onchange = function() {
  // If the value of femaleSkill1 is not empty, enable femaleSkill2
  if (this.value != "") {
    femaleSkill2.disabled = false;
    // Clear the options of femaleSkill2
    femaleSkill2.innerHTML = "";
    // Loop through the options of femaleSkill1
    for (var i = 0; i < femaleSkill1.options.length; i++) {
      // Get the current option
      var option = femaleSkill1.options[i];
      // If the option is not selected, copy it to femaleSkill2
      if (!option.selected) {
        // Create a new option element
        var newOption = document.createElement("option");
        // Copy the value and text of the option
        newOption.value = option.value;
        newOption.text = option.text;
        // Append the new option to femaleSkill2
        femaleSkill2.appendChild(newOption);
      }
    }
  } else {
    // Otherwise, disable femaleSkill2 and femaleSkill3
    femaleSkill2.disabled = true;
    femaleSkill3.disabled = true;
  }
};

// Add an onchange event listener to the femaleSkill2 element
femaleSkill2.onchange = function() {
  // If the value of femaleSkill2 is not empty, enable femaleSkill3
  if (this.value != "") {
    femaleSkill3.disabled = false;
    // Clear the options of femaleSkill3
    femaleSkill3.innerHTML = "";
    // Loop through the options of femaleSkill2
    for (var i = 0; i < femaleSkill2.options.length; i++) {
      // Get the current option
      var option = femaleSkill2.options[i];
      // If the option is not selected, copy it to femaleSkill3
      if (!option.selected) {
        // Create a new option element
        var newOption = document.createElement("option");
        // Copy the value and text of the option
        newOption.value = option.value;
        newOption.text = option.text;
        // Append the new option to femaleSkill3
        femaleSkill3.appendChild(newOption);
      }
    }
  } else {
    // Otherwise, disable femaleSkill3
    femaleSkill3.disabled = true;
  }
};
