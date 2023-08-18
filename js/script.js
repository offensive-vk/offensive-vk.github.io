//Global JavaScript File for domain 'offensive-vk.github.io/' that contains all the js functions and modules.
//DO NOT EDIT or REPRODUCE THIS FILE..  

var btn = document.querySelector('#checkbox');
var text = document.querySelectorAll('p');
var body = document.body;
var isLightTheme = true;

btn.addEventListener('click', function () {
    if (isLightTheme) {
        body.style.backgroundColor = "#fefefe";
        body.style.color = "";
        text.forEach(function (p) {
            p.style.color = "#000";
        });
    } else {
        body.style.backgroundColor = "#000";
        body.style.color = "";
        text.forEach(function (p) {
            p.style.color = "";
        });
    }

    isLightTheme = !isLightTheme;
});

// Text Animations
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let interval = null;
document.querySelector(".brand").onmouseover = event => {
    let iteration = 0;
    clearInterval(interval);
    interval = setInterval(() => {
        event.target.innerText = event.target.innerText
            .split("")
            .map((letter, index) => {
                if (index < iteration) {
                    return event.target.dataset.value[index];
                }
                return letters[Math.floor(Math.random() * 26)]
            })
            .join("");
        if (iteration >= event.target.dataset.value.length) {
            clearInterval(interval);
        }
        iteration += 1 / 3;
    }, 30);
}

// Clock
const display = () => {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let amOrPm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    if (hours < 10) {
        hours = '0' + hours;
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if(seconds < 10){
        seconds = '0' + seconds;
    }
    const current = hours+" : "+minutes+" : "+seconds;
    document.querySelector(".clock").innerHTML = current+" "+amOrPm;
}
const start = () => {
    setInterval(display, 1000);
}
document.addEventListener("DOMContentLoaded", start);


// Navbar- Links
for (const eachLink of document.getElementsByClassName("link")) {
    eachLink.onmousemove = (e) => {
        const decimal = e.clientX / eachLink.offsetWidth;

        const basePercent = 80,
            percentRange = 20,
            adjustablePercent = percentRange * decimal;

        const lightBluePercent = basePercent + adjustablePercent;

        eachLink.style.setProperty("--light-blue-percent", `${lightBluePercent}%`)
    };
}