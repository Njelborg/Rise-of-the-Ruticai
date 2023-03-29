

// global variables
var month = document.getElementById("month");
var day = document.getElementById("day");
var realm = document.getElementById("realm");

var predictButton = document.getElementById("predict-button");
var output = document.getElementById("output");
var textbox = document.getElementById("textbox");
var specialWeather = ["Fog", "Drizzle", "Rain", "Thunderstorm"];
var monthValue;
var dayValue;
var realmValue;
var wind;
var windSeed; 
var wind_result;   
function predict_suebia_wind(month) {
			var winter_windy_prob = [
				{name: "Light Air",        probweight: 500},
				{name: "Light Breeze",     probweight: 3000},
				{name: "Gentle Breeze",    probweight: 7000},
				{name: "Moderate Breeze",  probweight: 9000},				
				{name: "Fresh Breeze",     probweight: 9500},	
				{name: "Strong Breeze",    probweight: 9800},	
				{name: "Near Gale",   	  probweight: 9900},	
				{name: "Gale",   		  probweight: 9950},	
				{name: "Strong Gale",      probweight: 9980},	
				{name: "Storm",        	  probweight: 9990},	
				{name: "Violent Storm",    probweight: 9995},	
				{name: "Hurricane Force",  probweight: 10000},	
			]
			var summer_windy_prob = [
				{name: "Calm",        		probweight: 500},
				{name: "Light Air",      	probweight: 3000},
				{name: "Light Breeze",   	probweight: 7000},
				{name: "Gentle Breeze",  	probweight: 9000},				
				{name: "Moderate Breeze",    probweight: 9500},	
				{name: "Fresh Breeze",    	probweight: 9800},	
				{name: "Strong Breeze",   	probweight: 9900},	
				{name: "Near Gale",   		probweight: 9950},	
				{name: "Gale",      			probweight: 9980},	
				{name: "Strong Gale",        probweight: 9990},	
				{name: "Storm",    			probweight: 9995},	
				{name: "Violent Storm", 	 	probweight: 10000},	
			]
        if (["May", "June", "July", "August", "September", "October"].includes(month)) {
            wind = { summer_windy_prob
                   }
        } else { wind = winter_windy_prob
               }

console.table(wind);
		 windSeed = getRandomInt(10000);
	

	echo("windseed " + windSeed);
	wind_result = wind[0].name;
	
	wind.forEach((current_element, index, array) => {
		if(windSeed > current_element.probweight) {
			wind_result = wind[index+1].name;
			echo("probweight " + current_element.probweight);
			echo(" am at least " + wind_result);
		} else {
			echo("probeweight " + current_element.probweight);
			echo(" i remain " + wind_result);
		}
	});
	

    
    }
         
	   
	   
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}



function getRandomElement(array) {
  return array[getRandomInt(array.length)];
}
var debug = true;

function echo(text) {
if (debug) { console.log(text);	
}}

function predictWeather() {
    var daytimeTemp;
    var nighttimeTemp;
    var special;
    var randomNum = getRandomInt(100);
	realmValue = realm.value;
	dayValue = day.value;
	monthValue = month.value;
//calculating day time temp   
   if (realmValue === "Suebia" && monthValue === "November") {
      if (randomNum < 20) {
      daytimeTemp = "Fair";
	  echo("less than 20");
      } else if (randomNum < 80) {
      daytimeTemp = "Chilly";
      echo("less 80");
	  } else {
      daytimeTemp = "Cold";
	  echo("other ");
	  } 
echo("day time : " + daytimeTemp);

//calculating night time temp
    randomNum = getRandomInt(100); 
     if (randomNum < 20) {
      nighttimeTemp = "Frigid";
      } else if (randomNum < 40) {
      nighttimeTemp = "Cold";
      } else {
      nighttimeTemp = "Chilly";
      }
echo("night time : " + nighttimeTemp);

// calculating special weather
// calculate wind


predict_suebia_wind(monthValue);
 randomNum = getRandomInt(100); 
    if (randomNum < 30) {
      special = getRandomElement(specialWeather);

      if (
        (special === "Drizzle" || special === "Rain") &&
        (nighttimeTemp === "Cold" || nighttimeTemp === "Frigid")
      ) {
        special = "Snow";
      }


      if (
        special === "Thunderstorm" &&
        (nighttimeTemp === "Cold" || nighttimeTemp === "Frigid")
      ) {
        special = "Blizzard";
      }
    } else {
      special = "None";
    }
echo("special random seed : " + randomNum);
echo("special : " + special);

    var weatherString =
      "Month: " +
      monthValue +
      "\nDay: " +
      dayValue +
      "\nDaytime Temperature: " +
      daytimeTemp +
      "\nNighttime Temperature: " +
      nighttimeTemp +
      "\nSpecial Weather: " +
      special +
      "\nWind: " +
      wind_result;

    output.textContent = weatherString;
    textbox.value = weatherString;
  } else {
    output.textContent =
      "Sorry, selected realm and month combination not available yet.";
    textbox.value = "";
  }

}
