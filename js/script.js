console.log("Hello World!");


const button = document.querySelector(".js-button");
const body = document.querySelector(".js-body");
const themeName = document.querySelector(".theme");



button.addEventListener("click", () => {
    body.classList.toggle("body--dark");

   themeName.innerText = body.classList.contains("body--dark") ? "jasny" : "ciemny";  

});


const pictureButton = document.querySelector(".js-picture_button");
const picture = document.querySelector(".js-image");
const pictureToggle = document.querySelector(".pictureToggle");

pictureButton.addEventListener("click", () => {
    picture.classList.toggle("js-noImage");

    pictureToggle.innerText = picture.classList.contains("js-noImage") ? "Pokaż" : "Ukryj";

    
});

