// drink count
let drinkCount = Number(window.localStorage.getItem("drinksMade"));
document.getElementById('drink-total').textContent = drinkCount;


// Last Modified Date
let lastMod = new Date(document.lastModified);
let currentCopy = new Date().getFullYear();

let modifiedDate = document.querySelector(".last-modified");
modifiedDate.innerHTML = lastMod.toLocaleString();