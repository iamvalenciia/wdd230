
const toggleMenu = function () {
    document.querySelector("#primaryNav").classList.toggle("open")
    document.querySelector("#hamburgerBtn").classList.toggle("open")

}

const x = document.querySelector("#hamburgerBtn")
x.onclick = toggleMenu;


const t = new Date();
const date = ('0' + t.getDate()).slice(-2);
const day = t.getDay();
const month = ('0' + (t.getMonth() + 1)).slice(-2);
const year = t.getFullYear();
const hours = ('0' + t.getHours()).slice(-2);
const minutes = ('0' + t.getMinutes()).slice(-2);
const seconds = ('0' + t.getSeconds()).slice(-2);
const time = `${date}/${month}/${year} ${hours}:${minutes}:${seconds}`;


document.getElementById("the_time").innerHTML = ("Last Updated:    "+time);
document.getElementById("the_time_footer").innerHTML = ("Last Updated:    "+time);
document.getElementById("year").innerHTML = (`&copy${year}`);



const dayOfWeek = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
let todayWord = 'another message';

switch (day) {
    case 0:
        todayWord = dayOfWeek[0];
            break
    case 1:
        todayWord = dayOfWeek[1];
            break
    case 2:
        todayWord = dayOfWeek[2];
            break
    case 3:
        todayWord = dayOfWeek[3];
            break
    case 4:
        todayWord = dayOfWeek[4];
            break
    case 5:
        todayWord = dayOfWeek[5];
            break
    case 6:
        todayWord = dayOfWeek[6];
            break
}

document.querySelector("#time_nowEvent").innerHTML = (`Join us for the grand openning of the Networking Shack, Today ${todayWord} at 7pm`);

if (todayWord == 'Monday'){
    document.querySelector('#invitation').textContent = '🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.';
}
else if (todayWord == 'Tuesday'){
    document.querySelector('#invitation').textContent = '🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.';
}
else {
    document.querySelector('#invitation').textContent = 'An announcement will appear here soon..';
}