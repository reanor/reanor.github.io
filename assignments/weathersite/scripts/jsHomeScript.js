var section = document.querySelector('section');

var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var request = new XMLHttpRequest();

request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
  var weatherTowns = request.response;
  showTowns(weatherTowns);
}

function showTowns(jsonObj) {
  var locations = jsonObj['towns'];
  locations.splice(2,1);
      
  for (var i = 0; i < locations.length; i++)
    { 
    var myArticle = document.createElement('article');
    var myH2 = document.createElement('h2');
    var myPara1 = document.createElement('p');
    var myPara2 = document.createElement('p');
    var myPara4 = document.createElement('p');
    var myPara5 = document.createElement('p');
    var myList = document.createElement('ul');
    /* var myPara3 = document.createElement('p'); */
        
    myH2.textContent = locations[i].name;
    myPara1.textContent = 'Year Founded: ' + locations[i].yearFounded;
    myPara2.textContent = 'Motto: ' + locations[i].motto;
    myPara4.textContent = 'Current Population: ' + locations[i].currentPopulation;
    myPara5.textContent = 'Average Rainfall: ' + locations[i].averageRainfall;
    /* myPara3.textContent = 'Events:'; */
        
    /*var events = locations[i].events;
    for (var j = 0; j < events.length; j++) {
      var listItem = document.createElement('li');
      listItem.textContent = events[j];
      myList.appendChild(listItem);
    }*/
        
    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara4);
    myArticle.appendChild(myPara5);
    section.appendChild(myArticle);
    /* myArticle.appendChild(myPara3); */
    /* myArticle.appendChild(myList); */
  }
}


