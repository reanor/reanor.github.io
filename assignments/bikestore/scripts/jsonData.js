var section = document.querySelector('section');

var requestURL = 'https://reanor.github.io/biking/data/events.json';
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
    var myH2 = document.createElement('h2');
    var myPara1 = document.createElement('p');
            
    myH2.textContent = activities[i].name;
    myPara1.textContent = 'Event Description: ' + activities[i].description;
    activities[i].currentPopulation;
        
    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    section.appendChild(myArticle);
    
  }
}


