//JSON data
const requestURL = "./json/data.json"
const cards = document.querySelector(".cards");

fetch(requestURL).then(function (response) {
    return response.json();
}).then(function(jsonObject) {
    console.table(jsonObject);  
    const business = jsonObject['companies'];
    business.forEach(displayProphets);
  });

  function displayProphets(business) {
    let card = document.createElement('section');
    let logo = document.createElement('img');
    let h2 = document.createElement('h2');
    let address = document.createElement('span');
    let phone = document.createElement('span');
    let membershipLevel = document.createElement('span');
    let website = document.createElement('a');

    
    h2.textContent = `${business.name} `;
    address.textContent = `${business.address}`
    website.textContent = `${business.website}`
    phone.textContent = `${business.phonenumber}`

    logo.setAttribute('src', business.logo);
    logo.setAttribute('alt', `${business.name} logo`);
    logo.setAttribute('loading', 'lazy');

    website.setAttribute("href", business.website);
    website.setAttribute("target", "_blank");

    card.appendChild(logo);
    card.appendChild(h2);
    card.appendChild(address)
    card.appendChild(phone)
    card.appendChild(website)

   
    document.querySelector('div.cards').appendChild(card);
  }

  

//////// Grid View Toggle Function ///////////
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector(".cards");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}
