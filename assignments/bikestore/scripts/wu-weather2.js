var requestURL = 'https://api.wunderground.com/api/997fe3bcd9e7ea6b/conditions/forecast/q/OR/Springfield.json';
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
    
    document.getElementById('wunderDesc').innerHTML = 'Made possible by: '+ franklinWeather.current_observation.image.title;
    
    var elem1 = document.createElement("img");
    elem1.setAttribute("alt", "logo");
    document.getElementById("wunder").appendChild(elem1);
    elem1.src = franklinWeather.current_observation.image.url;
    
    document.getElementById("wunderLink").innerHTML = franklinWeather.current_observation.image.link;
    
}

