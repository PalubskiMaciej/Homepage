console.log("Hello World!");


const button = document.querySelector(".js-button");
const body = document.querySelector(".js-body");
const theme = document.querySelector(".theme");



button.addEventListener("click", () => {
    body.classList.toggle("body--dark");

    if (body.classList.contains("body--dark")) {
        theme.innerText = "jasny";
    } else {
        theme.innerText = "ciemny";
    }
});


const pictureButton = document.querySelector(".js-picture_button");
const picture = document.querySelector(".js-image");
const pictureToggle = document.querySelector(".pictureToggle");

pictureButton.addEventListener("click", () => {
    picture.classList.toggle("js-noImage");

    if (picture.classList.contains("js-noImage")) {
        pictureToggle.innerText = "Pokaż";
    } else {
        pictureToggle.innerText = "Ukryj";
    }
});

