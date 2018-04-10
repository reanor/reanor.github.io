var section = document.querySelector('section');

var requestURL = 'https://raw.githubusercontent.com/reanor/reanor.github.io/master/assignments/bikestore/data/events.json';
var request = new XMLHttpRequest();

request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
  var bikingEvents = request.response;
  showEvents(bikingEvents);
}

function showEvents(jsonObj) {
    
  var activities = jsonObj['events'];
      
  for (var i = 0; i < activities.length; i++)
    { 
        
    var myArticle = document.createElement('article');
    var myH3 = document.createElement('h3');
    var myPara1 = document.createElement('p');
            
    myH3.textContent = activities[i].name;
    myPara1.textContent = activities[i].description;
    activities[i].currentPopulation;
        
    myArticle.appendChild(myH3);
    myArticle.appendChild(myPara1);
    section.appendChild(myArticle);
    
  }
}


