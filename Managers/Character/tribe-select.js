		// Define a data object to store the options for the third select element
var tribeData = {
  "suebia": ["Ruticai", "Rugii", "Sabines", "Lugii", "Erevir", "Havessetts", "Cinucci", "Rus", "Francues", "Angavi", "Bwyngavi", "Bocci", "Averni", "Eruni"],
  "thracar": ["Obuli", "Ghaeti", "Empire", "Tylani", "Breuki", "Sotioi", "Dracoi", "Bacancci", "Bitiq Nishid"],
  "ionia": ["Lakonae", "Atiikae", "Boeoti", "Argoli", "Phoki", "Tesselae", "Makkadae", "Euboeoi", "Itikae", "Deloki", "Naxonae", "Ketani", "Gyolidae", "Lokriti"],
  "cellus": ["Boii", "Sequebri", "Volcae", "Nervaci", "Aedubri", "Helvetani", "Cait", "Fortriu", "Korvanti", "Brigandes", "Demitorix", "Iccitani", "Turdetorix", "Aquitani", "Cantuii", "Lusitani", "Arevaci", "Vangiones","Melliselia"],
  "sarmatae": ["Palmagate","Durhae","Samuli","Roxotani","Ugyeki","Cimmerian","Vandal","Prusi","Lithuthi","Latvi","Galindian","Dniepr","Polushi","Sicae","Croati","Pomeri","Morov","Czechae","Obo Trites","Imperial Vevuti","Slovaki","Vistuli","Bohemae"],
  "illatium": ["Novus","Tarchuna","Lyrunus","Felathri","Samnus","Ventecci","Aucai","Brutii","Frentani","Lucani","Marrucini","Umbri","Altucci","Senolni","Churbes","Syracus","Tara","Igioli","Bulari","Corci"]
  // Add the rest of the options here
};

// Get references to the select elements
var firstSelect = document.getElementById("realm");
var thirdSelect = document.getElementById("tribe");

// Add a change event listener to the first select element
firstSelect.addEventListener("change", function() {
  // Clear the options of the third select element
  thirdSelect.innerHTML = "";
  // Get the selected value of the first select element
  var selectedValue = this.value;
  // Get the corresponding options from the tribeData object
  var options = tribeData[selectedValue];
  // Add options to the third select element
  for (var i = 0; i < options.length; i++) {
    var option = document.createElement("option");
    option.value = options[i];
    option.text = options[i];
    thirdSelect.appendChild(option);
  }
});
