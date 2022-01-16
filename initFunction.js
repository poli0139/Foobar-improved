export function initFucntion() {
  const nameOnLoadingScreen = document.querySelector(".nameOnLoadingScreen");
  const nameValue = document.getElementById("Username").value;
  nameOnLoadingScreen.innerHTML = nameValue;

  const screen1 = document.querySelector(".screen1");
  const loader = document.querySelector(".loader");
  const main = document.querySelector(".main");
  const header = document.querySelector("header");
  const body = document.querySelector("body");
  const logoLoader = document.querySelector(".logoLoader img");
  screen1.style.display = "none";
  logoLoader.style.display = "flex";
  logoLoader.style.visibility = "visible";
  loader.style.display = "flex";
  loader.style.visibility = "visible";
  body.style.borderLeft = "0";

  setTimeout(() => {
    const bartenderNameContainer = document.querySelector(
      ".bartenderName_container"
    );
    const loggedInBartender = document.getElementById("Username").value;
    bartenderNameContainer.innerHTML = loggedInBartender;
    loader.style.display = "none";
    loader.style.visibility = "hidden";
    main.style.display = "grid";
    header.style.display = "flex";
    document.querySelector("body").style.borderLeft = "none";
  }, 3000);
}
