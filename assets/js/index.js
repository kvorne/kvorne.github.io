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

    splitTextTimeline.staggerTo($headingInner, 1, { y:0,  force3D:true, ease: "customEase"}, 0.2);
    // split.revert();
    splitTextTimeline.play();
}

function debounce(func){
    var timer;
    return function(event){
      if(timer) clearTimeout(timer);
      timer = setTimeout(func,300,event);
    };
}

document.addEventListener("DOMContentLoaded", function(event) {
    const $heading = document.querySelector("#Banner h1");
    const largeScreenContent = "<span>I’m Katarina, a UX Designer </span><br/>Crafting intentional experiences informed by user research, empathy, and a technical background";
    const smallScreenContent = "I’m Katarina, a UX Designer crafting intentional experiences informed by user research, empathy, and a technical background";

    function updateHeadingContent() {
        if (window.innerWidth > 768) {
            $heading.innerHTML = largeScreenContent;
        } else {
            $heading.innerHTML = smallScreenContent;
        }
    }

    updateHeadingContent(); // Initial update

    window.addEventListener("resize", debounce(function(e) {
        updateHeadingContent();
    }));

    const customFont = new FontFaceObserver('Outfit');
    customFont.load().then(() => {
        init();
    });
});