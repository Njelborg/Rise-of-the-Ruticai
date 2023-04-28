		  // Get the select elements by id
var outlook = document.getElementById("outlook");
var realm = document.getElementById("realm");
var favoriteDeity = document.getElementById("favorite-deity");

// Define an object that maps each realm to an array of deities
var deitiesByRealm = {
  cellus: ["--Select--", "UnaR", "Wotan", "Freya", "Herni", "The Horned Goddess", "BalthuR", "Erthi", "Hadr", "TyranaR"],
  croesios: ["--Select--", "Tiri & Tishtyra", "Mithra", "Hvar Ksata", "Bumbo", "Shango", "Baal", "Melqart", "Isis", "Nephtys"],
  illatium: ["--Select--", "Ephasos", "Athullos", "Violios", "Satanas", "Bacchus", "Milas", "Mertinas", "Epocchas", "Aphras"],
  ionia: ["--Select--", "Ephasos", "Athullos", "Violios", "Satanas", "Bacchus", "Milas", "Mertinas", "Epocchas", "Aphras"],
  libue: ["--Select--", "Tiri & Tishtyra", "Mithra", "Hvar Ksata", "Bumbo", "Shango", "Baal", "Melqart", "Isis", "Nephtys"],
  sarmatae: ["--Select--", "UnaR", "Wotan", "Freya", "Herni", "The Horned Goddess", "BalthuR", "Erthi", "Hadr", "TyranaR"],
  shim: ["--Select--", "Tiri & Tishtyra", "Mithra", "Hvar Ksata", "Bumbo", "Shango", "Baal", "Melqart", "Isis", "Nephtys"],
  suebia: ["--Select--", "UnaR", "Wotan", "Freya", "Herni", "The Horned Goddess", "BalthuR","Erthi","Hadr","TyranaR"],
  thracar: ["--Select--", "Ephasos","Athullos","Violios","Satanas","Bacchus","Milas","Mertinas","Epocchas","Aphras"]
};

// Define a function that updates the favorite deity options based on the realm value
function updateFavoriteDeityOptions() {
  // Get the current realm value
  var realmValue = realm.value;
  // Clear the favorite deity options
  favoriteDeity.innerHTML = "";
  // If the realm value is not empty and the favorite deity select is not disabled, add the corresponding deities as options
  if (realmValue && !favoriteDeity.disabled) {
    var deities = deitiesByRealm[realmValue];
    for (var i = 0; i < deities.length; i++) {
      var option = document.createElement("option");
      option.value = deities[i];
      option.text = deities[i];
      favoriteDeity.appendChild(option);
    }
  }
}

// Define a function that disables or enables the favorite deity select based on the outlook value
function disableOrEnableFavoriteDeity() {
  // Get the current outlook value
  var outlookValue = outlook.value;
  // If the outlook value is Traditional, disable the favorite deity select and clear its value
  if (outlookValue == 'Traditional') {
    favoriteDeity.disabled = true;
    favoriteDeity.value = "";
  }
  // Otherwise, enable the favorite deity select and update its options
  else {
    favoriteDeity.disabled = false;
    updateFavoriteDeityOptions();
  }
}

// Add event listeners to the outlook and realm select elements to call the functions when their values change
outlook.addEventListener("change" , disableOrEnableFavoriteDeity);
realm.addEventListener("change" , updateFavoriteDeityOptions);

// Call the functions initially to set up the initial state of the select elements
disableOrEnableFavoriteDeity();
updateFavoriteDeityOptions();
