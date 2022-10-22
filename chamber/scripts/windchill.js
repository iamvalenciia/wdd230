//windSpeed    id
//windChill  id



let weather = parseFloat(document.querySelector('#weather').textContent);
let speed = parseFloat(document.querySelector('#windSpeed').textContent);


let valueMph = speed / 1.6;
let valueFarenh = (weather * 9/5 + 32)


if  (valueFarenh<=50 && valueMph>3) {
    let windChill = 35.74 + (0.6215*valueFarenh) - (35.75*valueMph**0.16) + (0.4275*valueFarenh*valueMph**0.16);
    document.querySelector('#windChill').textContent = `${windChill.toFixed(1)}°F`;
} else {
    document.querySelector('#windChill').textContent = `N/A`;
};
