// Underline Active Tab
let underline = document.createElement("div");
let tab = document.getElementById("activeTab");
tab.appendChild(underline);

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