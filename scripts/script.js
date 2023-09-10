/*

* @author: Vedansh Khandelwal
* @lang: JavaScript (ES6+), TypeScript
* @description: Private Development and Testing Website.
* @root: true.
* @copyright: Copyright (c) by Respected Authors. All rights reserved.
* @year: 2023

*/

const root = document.documentElement;
const head = document.head;
const body = document.body;

var header = document.querySelector("header");
var btn = document.querySelector('#checkbox');
var text = document.querySelectorAll('p');
var footer = document.querySelector("footer");

var isLightTheme = true;
btn.addEventListener('click', function () {
    if (isLightTheme) {
        body.style.backgroundColor = "#f5f5f5";
        body.style.color = "";
        footer.style.color = "#000";
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

document.addEventListener('DOMContentLoaded', async () => {
    const paragraphElement = document.getElementById('typewriter-paragraph');
    paragraphElement.setAttribute('align', 'justify');
    const text = `Coding has become an essential skill in today's world. With the increasing use of technology, software engineers and developers are in high demand. They create applications and programs that make our lives easier, more efficient, and more productive. However, with great power comes great responsibility. As we rely more on technology, we must also take steps to ensure that our information is secure. Cybersecurity is the practice of protecting computers, servers, mobile devices, electronic systems, networks, and data from digital attacks, theft, or damage. Without proper cybersecurity measures, sensitive information such as personal data, financial information, and business secrets can be compromised. Coding and cybersecurity go hand in hand. A skilled programmer can create secure and reliable systems that protect against digital threats. As a result, companies and organizations are always on the lookout for individuals with expertise in coding and cybersecurity. Moreover, coding is not just limited to professionals. With online coding resources and coding bootcamps, anyone can learn to code. This empowers individuals to create their own applications and websites, start their own businesses, and contribute to the tech industry.`;

    // Split the text into words
    const words = text.split(' ');

    async function applyWordAnimation() {
        for (let i = 0; i < words.length; i++) {
            const word = words[i];
            const spanElement = document.createElement('span');
            spanElement.className = 'animated-word';
            spanElement.textContent = word + ' ';
            paragraphElement.appendChild(spanElement);

            await new Promise(resolve => setTimeout(resolve, 100)); // Delay between words
        }
    }
    applyWordAnimation();
});

// Box Appearance
    // JavaScript to trigger the fade-in animation when scrolling
    const items = document.querySelectorAll('.box');

    function checkScroll() {
        items.forEach((item) => {
            const itemPosition = item.getBoundingClientRect().top;
            const screenHeight = window.innerHeight;

            if (itemPosition < screenHeight * 0.75) {
                item.classList.add('active');
            }
            else{
                item.classList.remove('active');
            }
        });
    }

    window.addEventListener('scroll', checkScroll);
    window.addEventListener('load', checkScroll);

// Dropdown
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll('.js');
    sections.forEach((section) => {
        const title = section.querySelector('.js-title');
        title.addEventListener('click', () => {
            section.classList.toggle('open');
        });
    });
});