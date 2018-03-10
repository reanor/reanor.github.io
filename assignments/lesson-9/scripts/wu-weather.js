var requestURL = 'https://api.wunderground.com/api/997fe3bcd9e7ea6b/conditions/forecast/q/MN/Franklin.json';
var request = new XMLHttpRequest();

request.open('GET', requestURL, true);
request.send();

request.onload = function() {
    var franklinWeather = JSON.parse(request.responseText);
        
    document.getElementById('currentW').innerHTML = 'Current Weather: ' + franklinWeather.current_observation.weather;
    

    document.getElementById('currentT').innerHTML =  'Current Temperature : ' +franklinWeather.current_observation.temp_f + '&#x2109';
    
 
    document.getElementById('windMph').innerHTML =  'WindSpeed: ' +franklinWeather.current_observation.wind_mph + 'Mph';
    
    document.getElementById('forecastDesc').innerHTML = 'Forecast: '+ franklinWeather.forecast.txt_forecast.forecastday[0].fcttext;
    
    var elem = document.createElement("img");
    elem.setAttribute("alt", "weather");
    document.getElementById("imageW").appendChild(elem);
    elem.src = franklinWeather.current_observation.icon_url;
}

