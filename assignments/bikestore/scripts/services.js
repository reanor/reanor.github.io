var requestURL = 'https://raw.githubusercontent.com/reanor/reanor.github.io/master/assignments/bikestore/data/services.json';
var request = new XMLHttpRequest();

request.open('GET', requestURL, true);
request.send();

request.onload = function() {
    var bikeService = JSON.parse(request.responseText);
    
    // TuneUps
    
    document.getElementById('tprice1').innerHTML = bikeService.services[0].tuneup1 + " -- " + bikeService.services[0].tprice1;
    
    document.getElementById('tprice2').innerHTML = bikeService.services[1].tuneup2 + " -- " + bikeService.services[1].tprice2;
    
    document.getElementById('tprice3').innerHTML = bikeService.services[2].tuneup3 + " -- " + bikeService.services[2].tprice3;
    
    document.getElementById('tprice4').innerHTML = bikeService.services[3].tuneup4 + " -- " + bikeService.services[3].tprice4;
    
    document.getElementById('tprice5').innerHTML = bikeService.services[4].tuneup5 + " -- " + bikeService.services[4].tprice5;
    
}

