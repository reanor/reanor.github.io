var tempF = 73;
var speed = 10;
var chillfactor = parseFloat(35.74 + (0.6215 * tempF) - (35.75 * (Math.pow(speed, 0.16))) + (0.4275 * tempF * (Math.pow(speed, 0.16))));
document.getElementById("chill").innerHTML = Math.round(chillfactor) + "&deg;F";