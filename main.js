document.addEventListener("DOMContentLoaded", () => {

const hamburger = document.getElementById("hamburger-menu");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {

hamburger.classList.toggle("active");
navMenu.classList.toggle("active");

});

document.addEventListener("click", (e) => {

if(!hamburger.contains(e.target) && !navMenu.contains(e.target)){

hamburger.classList.remove("active");
navMenu.classList.remove("active");

}

});

document.addEventListener("keydown",(e)=>{

if(e.key==="Escape"){

hamburger.classList.remove("active");
navMenu.classList.remove("active");

}

});

});