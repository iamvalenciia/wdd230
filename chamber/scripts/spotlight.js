const URL = "./json/data.json"
const spotlight = document.querySelector(".Spotlight");

fetch(URL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const companies = jsonObject["companies"];
    for (let j = 0; j < 30; j++) {
      displaySpotlight(companies[randomIntFromInterval(0, companies.length - 1)]);
    }
  });

  let i = 0;

  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  let complist = [];

function displaySpotlight(company) {

  if (complist.includes(company.name)) {

  } else {

    if ((`${company.level}` == "Platinum" || `${company.level}` == "Platinum") && i < 3) {

      complist.push(company.name);

      i = i + 1;

      let card = document.createElement("div");
      let h2 = document.createElement("h2");
      let logo = document.createElement("img");
      let phone = document.createElement("p");
      let url = document.createElement("a");
  
      h2.textContent = `${company.name}`;
      phone.textContent = `${company.phonenumber}`;
      url.textContent = `${company.websiteName}`;
      url.setAttribute("target","_blank")
      url.setAttribute("href", `${company.websiteLink}`);
  
      logo.setAttribute("src", company.image);
      logo.setAttribute("alt", `${company.name} logo`);
      logo.setAttribute("width", "70%")

      
    
      card.appendChild(h2);
      card.appendChild(logo);
      card.appendChild(url);
      card.appendChild(phone);

      card.style.textAlign = "center";
      card.style.paddingBottom = "20px";
      card.style.border = "2px solid #ffb703";
      card.style.fontSize = "1rem";
      card.style.color = "white";
      card.style.textDecorationLine = "none";
      card.style.boxShadow = "5px 5px 5px 5px #ffb703"
      card.style.display = "block";
      card.style.marginTop = "20px";
      

      url.style.backgroundColor = "#eee";
      url.style.padding = "5px";
      url.style.margin = "10px";

      h2.style.margin = "10px";
      logo.style.margin = "10px";
  
      document.querySelector(".Spotlight").appendChild(card);

      if (i == 3) {
          card.setAttribute("class", "div1");
      }

    }

    }





}