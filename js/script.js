//Global JavaScript File for domain 'offensive-vk.github.io/' that contains all the js functions and modules.
//DO NOT EDIT or REPRODUCE THIS FILE..  

var btn = document.querySelector('#checkbox');
var body = document.body;
var isLightTheme = true;

btn.addEventListener('click', function(){
    if (isLightTheme) {
        body.style.backgroundColor = "#fefefe";
        body.style.color = "";
    } else {
        body.style.backgroundColor = "#000";
        body.style.color = "";
    }
    
    isLightTheme = !isLightTheme;
});
