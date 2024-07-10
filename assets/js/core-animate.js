const borger = document.querySelector(".hamburgerMenu");
const navBar = document.getElementById("navbar");
const navList = document.querySelector(".navList");
const navItem = document.querySelectorAll(".navItem");
const navLink = document.querySelectorAll(".navLink");
const icon = document.getElementById("icon");

icon.src = (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? "favicon-dark.png" : "favicon.png")

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
        path: (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? "./assets/animated-icons/dark-linkedin.json" : "./assets/animated-icons/linkedin.json"),
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
        path: (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? "./assets/animated-icons/dark-email.json" : "./assets/animated-icons/email.json"),
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
        path: (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? "./assets/animated-icons/dark-github.json" : "./assets/animated-icons/github.json"),
});

githubContainer.addEventListener('mouseenter', (e) => {
    github.setDirection(directionMenu);
    github.play();

});

githubContainer.addEventListener('mouseleave', (e) => {
    github.setDirection(-directionMenu);
    github.stop();
});



/* Fade Animation */
const faders = document.querySelectorAll('.fade-in-section')

const appearOptions = {
    threshold: 0
};

const appearOnScroll = new IntersectionObserver(function(
    entries,
    appearOnScroll
){
    entries.forEach(entry =>{
        if (!entry.isIntersecting){
            return;
        } else {
            entry.target.classList.add('is-visible');
            appearOnScroll.unobserve(entry.target);
        }
    })
},
appearOptions);

faders.forEach( fader => {
    appearOnScroll.observe(fader);
});


/* h1 animation By Adam Robinson from Codepen: https://codepen.io/adamrobinson/pen/BZWwdR */
function init() {
    gsap.registerPlugin(SplitText) 
    var $heading = $("h1");
    var splitTextTimeline = new TimelineLite({paused: true, onComplete: () => {split.revert()}});

    var split = new SplitText($heading, {
        type: "lines", 
        linesClass: "line", 
        position: "relative",
    });

    /*
    * Create a custom ease https://greensock.com/ease-visualizer
    */
    CustomEase.create("customEase", "M0,0 C0.2,0 0.337,0.566 0.47,0.772 0.615,0.998 0.822,1 1,1");

    $('.line').wrapInner("<div class='line-inner'></div>")

    var $headingInner = $(".line-inner");

    splitTextTimeline.staggerTo($headingInner, 0.7, { y:0,  force3D:true, ease: "customEase"}, 0.1);
    splitTextTimeline.play();
}

document.addEventListener("DOMContentLoaded", (event) => {
    window.addEventListener("resize",debounce(function(e){
        splitTextTimeline.revert()
    }));
    const customFont = new FontFaceObserver('Lexend');
    customFont.load().then(() => {

        init();
    });
});

function debounce(func){
    var timer;
    return function(event){
      if(timer) clearTimeout(timer);
      timer = setTimeout(func,300,event);
    };
}

