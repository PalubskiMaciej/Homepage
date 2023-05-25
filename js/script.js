{
  const welcome = () => {
    console.log("Hello World!");
  };

  const pictureRemove = () => {
    const button = document.querySelector(".js-button");
    const picture = document.querySelector(".js-image");

    button.addEventListener("click", () => {
      picture.remove();
      button.remove();
    });
  };

  const backgroundToggle = () => {
    const body = document.querySelector(".js-body");
    const link = document.querySelectorAll(".js-list");
    const nav = document.querySelector(".js-nav");
    const toggleBackgroundButton = document.querySelector(
      ".js-toggleBackground"
    );
    const themeName = document.querySelector(".js-themeName");

    toggleBackgroundButton.addEventListener("click", () => {
      body.classList.toggle("body--dark");

      nav.classList.toggle("navigation--dark");
      themeName.innerText = body.classList.contains("body--dark")
        ? "jasne"
        : "ciemne";
    });
  };

  const init = () => {
    pictureRemove();
    welcome();
    backgroundToggle();
  };
  init();
}
