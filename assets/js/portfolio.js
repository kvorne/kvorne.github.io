// Secondary navbar
window.onscroll = function() {scrollFunction()};

const secondaryNav = document.getElementById("secondary-navbar");

var sticky = secondaryNav.getBoundingClientRect().top;


function scrollFunction() {
    if (this.oldScroll < this.scrollY && (document.body.scrollTop > sticky || document.documentElement.scrollTop > 20)) {
        document.getElementById("secondary-navbar").style.top = "-15px";
    } else {
        // document.getElementById("secondary-navbar").style.top = "81px";
    }
  this.oldScroll = this.scrollY;
}


