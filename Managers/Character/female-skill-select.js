function genderChange() {
  var gender = document.getElementById("gender").value;
  
  if (gender == "female") {
    // enable the female skills selects
    document.getElementById("female-skill-1").disabled = false;
    document.getElementById("female-skill-2").disabled = false;
    document.getElementById("female-skill-3").disabled = false;
    
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