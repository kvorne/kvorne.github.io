const borger = document.querySelector(".hamburgerMenu");
const navBar = document.getElementById("navbar");
const navList = document.querySelector(".navList");
const navItem = document.querySelectorAll(".navItem");
const navLink = document.querySelectorAll(".navLink");


borger.addEventListener("click", showMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

function showMenu (){
    borger.classList.toggle("active");
    navList.classList.toggle("active");
    navItem.forEach(n => n.classList.toggle("activeItem"));
}

function closeMenu() {
    borger.classList.remove("active");
    navList.classList.remove("active");
}


/* animated icons */

let linkedinContainer = document.querySelector('#linkedin');

let linkedin = bodymovin.loadAnimation({
        container: linkedinContainer,
        renderer: 'svg',
        loop: true,
        autoplay: false,
        path: "./assets/linkedin.json"
});

var directionMenu = 1;

linkedinContainer.addEventListener('mouseenter', (e) => {
    linkedin.setDirection(directionMenu);
    linkedin.play();

});

linkedinContainer.addEventListener('mouseleave', (e) => {
    linkedin.setDirection(-directionMenu);
    linkedin.stop();
});

let emailContainer = document.querySelector('#email');

let email = bodymovin.loadAnimation({
        container: emailContainer,
        renderer: 'svg',
        loop: true,
        autoplay: false,
        path: "./assets/email.json"
});

var directionMenu = 1;

emailContainer.addEventListener('mouseenter', (e) => {
    email.setDirection(directionMenu);
    email.play();

});

emailContainer.addEventListener('mouseleave', (e) => {
    email.setDirection(-directionMenu);
    email.stop();
});


let githubContainer = document.querySelector('#github');

let github = bodymovin.loadAnimation({
        container: githubContainer,
        renderer: 'svg',
        loop: true,
        autoplay: false,
        path: "./assets/github.json",
});

githubContainer.addEventListener('mouseenter', (e) => {
    github.setDirection(directionMenu);
    github.play();

});

githubContainer.addEventListener('mouseleave', (e) => {
    github.setDirection(-directionMenu);
    github.stop();
});


// window.onscroll = function() {navStick()};

// // Check for vertical offset (should be 0)
// var sticky = navBar.getBoundingClientRect().top;

// // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function navStick() {
//   if (window.scrollY >= sticky) {
//     navBar.classList.add("sticky");
//   }
// }