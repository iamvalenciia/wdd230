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
    let address = document.createElement('p');
    let phone = document.createElement('p');
    let membershipLevel = document.createElement('sp');
    let website = document.createElement('a');

    
    h2.textContent = `${business.name} `;
    address.textContent = `${business.address}`
    website.textContent = `${business.websiteName}`
    phone.textContent = `${business.phonenumber}`

    logo.setAttribute('src', business.image);
    logo.setAttribute('alt', `${business.name} logo`);
    logo.setAttribute('loading', 'lazy');

    website.setAttribute("href", business.websiteLink);
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
  console.log('click in grid');
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
  console.log('Showing a list');
}
