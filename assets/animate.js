// Underline Active Tab
let underline = document.createElement("div");
let tab = document.getElementById("activeTab");
tab.appendChild(underline);

const borger = document.querySelector(".hamburgerMenu");
const navBar = document.getElementById("navbar");
const navList = document.querySelector(".navList");
const navLink = document.querySelectorAll(".navLink");


borger.addEventListener("click", showMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

function showSurpriseImg(className, ...imgList){
    // get button element by the passed id 
    var button = document.getElementById(className);
    var parent = document.getElementById("content");
    // decide whether to show or hide answer
    if (button.innerText =="Reveal Answer"){
        // handle multiple images case
        for(let i = 0; i < imgList.length; i++){
            // create image element
            let image = document.createElement("img")
            image.setAttribute('src', imgList[i])
            image.setAttribute('class', 'capybaby')
            // insert image element into DOM
            parent.insertBefore(image, button)
        }
        // Update button text
        button.innerText = "Hide Answer"
    } else {
        // Update button text
        button.innerText = "Reveal Answer"
        // Delete all connected images
        let images = document.getElementsByClassName('capybaby');
        while (images.length > 0) images[0].remove();
    }
}

function showMenu (){
    borger.classList.toggle("active");
    navList.classList.toggle("active");

}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

window.onscroll = function() {navStick()};

// Check for vertical offset (should be 0)
var sticky = navBar.getBoundingClientRect().top;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function navStick() {
  if (window.pageYOffset >= sticky) {
    navBar.classList.add("sticky");
  } else {
    navBar.classList.remove("sticky");
  }
}