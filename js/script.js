{
  const welcome = () => {
    console.log("Hello World!");
  };

  const pictureRemove = (picture, pictureButton) => {

    picture.remove();
    pictureButton.remove();
  };

  const toggleBackground = () => {
    const body = document.querySelector(".js-body");
    const nav = document.querySelector(".js-nav");
    const themeName = document.querySelector(".js-themeName");

    body.classList.toggle("body--dark");
    nav.classList.toggle("navigation--dark");
    themeName.innerText = body.classList.contains("body--dark")
      ? "jasne"
      : "ciemne";
  };

  const init = () => {
    const toggleBackgroundButton = document.querySelector(".js-toggleBackground");
    toggleBackgroundButton.addEventListener("click", toggleBackground);

    const picture = document.querySelector(".js-image");
    const pictureButton = document.querySelector(".js-button");
    pictureButton.addEventListener("click", () => {

      pictureRemove(picture, pictureButton)
    });
    welcome();
  };
  init();
}
