// Secondary navbar
window.onscroll = function() {scrollFunction()};

const secondaryNav = document.getElementById("secondary-navbar");

var sticky = secondaryNav.getBoundingClientRect().top;


function scrollFunction() {
    if (this.oldScroll < this.scrollY && (document.body.scrollTop > sticky || document.documentElement.scrollTop > 20)) {
        /* TO DO */
        document.getElementById("secondary-navbar").style.top = "71px";
    } else {
        // document.getElementById("secondary-navbar").style.top = "81px";
    }
  this.oldScroll = this.scrollY;
}


/* Requirements -> Overview */
let overviewContainer = document.querySelector('#overview-icon');
let overviewNavItem = document.querySelector('#overview-icon-container');

let overview = bodymovin.loadAnimation({
        container: overviewContainer,
        renderer: 'svg',
        loop: true,
        autoplay: false,
        path: (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? "./assets/dark-overview.json" : "./assets/overview.json")
});

overviewNavItem.addEventListener('mouseenter', (e) => {
    overview.setDirection(directionMenu);
    overview.play();

});

overviewNavItem.addEventListener('mouseleave', (e) => {
    overview.setDirection(-directionMenu);
    overview.stop();
});


/* Team - Discover */
let discoverContainer = document.querySelector('#discover-icon');
let discoverNavItem = document.querySelector('#discover-icon-container');

let discover = bodymovin.loadAnimation({
        container: discoverContainer,
        renderer: 'svg',
        loop: true,
        autoplay: false,
        path: (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? "./assets/dark-discover.json" : "./assets/research.json")
});


discoverNavItem.addEventListener('mouseenter', (e) => {
    discover.setDirection(directionMenu);
    discover.play();

});


discoverNavItem.addEventListener('mouseleave', (e) => {
    discover.setDirection(-directionMenu);
    discover.stop();
});

/* Case Study -> Define */
let defineContainer = document.querySelector('#define-icon');
let defineNavItem = document.querySelector('#define-icon-container');

let define = bodymovin.loadAnimation({
        container: defineContainer,
        renderer: 'svg',
        loop: true,
        autoplay: false,
        path: (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? "./assets/dark-define.json" : "./assets/define.json")
});

defineNavItem.addEventListener('mouseenter', (e) => {
    define.setDirection(directionMenu);
    define.play();

});

defineNavItem.addEventListener('mouseleave', (e) => {
    define.setDirection(-directionMenu);
    define.stop();
});

/* Solution -> Design */
let designContainer = document.querySelector('#design-icon');
let designNavItem = document.querySelector('#design-icon-container');

let design = bodymovin.loadAnimation({
        container: designContainer,
        renderer: 'svg',
        loop: true,
        autoplay: false,
        path: (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? "./assets/dark-design.json" : "./assets/design.json")
});

designNavItem.addEventListener('mouseenter', (e) => {
    design.setDirection(directionMenu);
    design.play();

});

designNavItem.addEventListener('mouseleave', (e) => {
    design.setDirection(-directionMenu);
    design.stop();
});

/* Solution -> Deliver */
let deliverContainer = document.querySelector('#deliver-icon');
let deliverNavItem = document.querySelector('#deliver-icon-container');

let deliver = bodymovin.loadAnimation({
        container: deliverContainer,
        renderer: 'svg',
        loop: true,
        autoplay: false,
        path: (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? "./assets/dark-deliver.json" : "./assets/deliver.json")
});

deliverNavItem.addEventListener('mouseenter', (e) => {
    deliver.setDirection(directionMenu);
    deliver.play();

});

deliverNavItem.addEventListener('mouseleave', (e) => {
    deliver.setDirection(-directionMenu);
    deliver.stop();
});

/* Takeaways */
let takeawaysContainer = document.querySelector('#takeaways-icon');
let takeawaysNavItem = document.querySelector('#takeaways-icon-container');

let takeaways = bodymovin.loadAnimation({
        container: takeawaysContainer,
        renderer: 'svg',
        loop: true,
        autoplay: false,
        path: (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? "./assets/dark-takeaways.json" : "./assets/takeaways.json")
});

takeawaysNavItem.addEventListener('mouseenter', (e) => {
    takeaways.setDirection(directionMenu);
    takeaways.play();
});

takeawaysNavItem.addEventListener('mouseleave', (e) => {
    takeaways.setDirection(-directionMenu);
    takeaways.stop();
});
