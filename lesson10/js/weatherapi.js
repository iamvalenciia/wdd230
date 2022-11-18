
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const requestURL = 'https://api.openweathermap.org/data/2.5/weather?q=Fairbanks&lat=57&lon=-2.15&appid={699d050162036d9d63a2bbc35cc6712f}&units=imperial';
const cards = document.querySelector('.cards');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    
});