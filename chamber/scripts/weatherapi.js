
const currentTemp = document.querySelector('#weather');
const currentSpeed = document.querySelector('#windSpeed')
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const requestURL = 'https://api.openweathermap.org/data/2.5/weather?q=Propicia&appid=4d5a5c61370f24e31f31cbdbbdc07ffa&units=metric';
const cards = document.querySelector('.cards');

async function apiFetch() {
    try {
      const response = await fetch(requestURL);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
        // displayResults(data);
        displayResults(data)

      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
    
}
  
apiFetch();


function  displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
    currentSpeed.innerHTML = weatherData.wind.speed
  
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
  
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;


    // calculate the wind child.
    let weather = parseFloat(document.querySelector('#weather').textContent);
    let speed = parseFloat(document.querySelector('#windSpeed').textContent);

    console.log(weatherData.main.temp.toFixed(0))


    let valueMph = speed / 1.6;
    let valueFarenh = (weather * 9/5 + 32)



    if  (valueFarenh<=50 && valueMph>3) {
        let windChill = 35.74 + (0.6215*valueFarenh) - (35.75*valueMph**0.16) + (0.4275*valueFarenh*valueMph**0.16);
        document.querySelector('#windChill').textContent = `${windChill.toFixed(1)}°F`;
    } else {
        document.querySelector('#windChill').textContent = `N/A`;
    };
}
