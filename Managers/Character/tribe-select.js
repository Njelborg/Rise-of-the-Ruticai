		// Define a data object to store the options for the third select element
var tribeData = {
  "--Select--": ["--Select--"],
  "suebia": ["--Select--", "Ruticai", "Rugii", "Sabines", "Lugii", "Erevir", "Havessetts", "Cinucci", "Rus", "Francues", "Angavi", "Bwyngavi", "Bocci", "Averni", "Eruni"],
  "thracar": ["--Select--", "Obuli", "Ghaeti", "Empire", "Tylani", "Breuki", "Sotioi", "Dracoi", "Bacancci", "Bitiq Nishid"],
  "ionia": ["--Select--", "Lakonae", "Atiikae", "Boeoti", "Argoli", "Phoki", "Tesselae", "Makkadae", "Euboeoi", "Itikae", "Deloki", "Naxonae", "Ketani", "Gyolidae", "Lokriti"],
  "cellus": ["--Select--", "Boii", "Sequebri", "Volcae", "Nervaci", "Aedubri", "Helvetani", "Cait", "Fortriu", "Korvanti", "Brigandes", "Demitorix", "Iccitani", "Turdetorix", "Aquitani", "Cantuii", "Lusitani", "Arevaci", "Vangiones","Melliselia"],
  "sarmatae": ["--Select--", "Palmagate","Durhae","Samuli","Roxotani","Ugyeki","Cimmerian","Vandal","Prusi","Lithuthi","Latvi","Galindian","Dniepr","Polushi","Sicae","Croati","Pomeri","Morov","Czechae","Obo Trites","Imperial Vevuti","Slovaki","Vistuli","Bohemae"],
  "illatium": ["--Select--", "Novus","Tarchuna","Lyrunus","Felathri","Samnus","Ventecci","Aucai","Brutii","Frentani","Lucani","Marrucini","Umbri","Altucci","Senolni","Churbes","Syracus","Tara","Igioli","Bulari","Corci"],
  "shim": ["--Select--"],
  "libue": ["--Select--"],
  "croesios": ["--Select--"],
  
  // Add the rest of the options here
};

// Get references to the select elements
var realmSelect = document.getElementById("realm");
var tribeSelect = document.getElementById("tribe");

// Add a change event listener to the first select element
realmSelect.addEventListener("change", function() {
  // Clear the options of the third select element
  tribeSelect.innerHTML = "";
  // Get the selected value of the first select element
  var selectedValue = this.value;
  // Get the corresponding options from the tribeData object
  var options = tribeData[selectedValue];
  // Add options to the third select element
  
  for (var i = 0; i < options.length; i++) { console.log("options:", options);
    var option = document.createElement("option");
    option.value = options[i];
    option.text = options[i];
    tribeSelect.appendChild(option);
  }
});
