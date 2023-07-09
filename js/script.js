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
