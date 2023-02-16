{
    const welcome = () => {
        console.log("Hello World!");
    }

    const onClickThemeToggle = () => {
        const body = document.querySelector(".js-body");
        const themeName = document.querySelector(".theme");
        body.classList.toggle("body--dark");
        themeName.innerText = body.classList.contains("body--dark") ? "jasny" : "ciemny";
    }

    const onClickPictureToggle = () => {

        const picture = document.querySelector(".js-image");
        const pictureToggle = document.querySelector(".js-pictureToggle");
        picture.classList.toggle("js-noImage");
        pictureToggle.innerText = picture.classList.contains("js-noImage") ? "Pokaż" : "Ukryj";

    }

    const init = () => {
        const pictureButton = document.querySelector(".js-pictureButton");
        pictureButton.addEventListener("click", onClickPictureToggle);

        const button = document.querySelector(".js-themeButton");
        button.addEventListener("click", onClickThemeToggle);

        welcome();
    }

    init();
}
