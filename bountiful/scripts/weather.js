const requestURL = "https://api.openweathermap.org/data/2.5/weather?q=Carlsbad&appid=4d5a5c61370f24e31f31cbdbbdc07ffa&units=metric";
const cards = document.querySelector(".cards");

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

