export let darkmode = false;

//DARK MODE

export function screen1DarkMode() {
  if (darkmode === false) {
    darkmode = true;
    // document.querySelector(".popup-done").classList.add("darkpop");
    // document.querySelector(".popup-done").classList.remove("lightpop");

    document.querySelector("body").classList.add("dark");
    document.querySelector("body").style.borderLeft = "7vw solid #849478";
    document.querySelector(".screen1").classList.add("dark");
    document.querySelector(".screen1 .switch").src =
      "assets/FooBar-switch2.png";
    document.querySelector(".logo3 img").src = "assets/logo-yellow.png";
    document.querySelector(".logo").src = "assets/logo-yellow.png";
    document.querySelector(".bartender-img").src =
      "assets/bartender-yellow.png";
    document.querySelector(".switch").src = "assets/FooBar-switch2.png";
    document.querySelector(".loader").classList.add("dark");
    document.querySelector(".logo2 img").src = "assets/logo-yellow.png";
  } else {
    darkmode = false;
    // document.querySelector(".popup-done").classList.add("lightpop");
    // document.querySelector(".popup-done").classList.remove("darkpop");

    document.querySelector("body").classList.remove("dark");
    document.querySelector("body").style.borderLeft = "7vw solid #fcce72";
    document.querySelector(".screen1").classList.remove("dark");
    document.querySelector(".screen1 .switch").src = "assets/FooBar-switch.png";
    document.querySelector(".logo3 img").src = "assets/logo-green.png";
    document.querySelector(".logo").src = "assets/logo-green.png";
    document.querySelector(".bartender-img").src = "assets/bartender-green.png";
    document.querySelector(".switch").src = "assets/FooBar-switch.png";

    document.querySelector(".loader").classList.remove("dark");
    document.querySelector(".logo2 img").src = "assets/logo-green.png";
  }
}

export function mainScreenDarkMode() {
  if (darkmode == false) {
    darkmode = true;
    document.querySelector("body").classList.add("dark");
    document.querySelector(".bartender-img").src =
      "assets/bartender-yellow.png";
    document.querySelector(".switch").src = "assets/FooBar-switch2.png";
    document.querySelector(".logo").src = "assets/logo-yellow.png";
    document.querySelectorAll(".next-icon").forEach((element) => {
      element.src = "/assets/next_yellow.png";
    });
    document.querySelector(".exit img").src = "assets/exit_white.png";
    document.querySelector(".screen1").classList.add("dark");
    document.querySelector(".screen1 .switch").src =
      "assets/FooBar-switch2.png";
    document.querySelector(".logo3 img").src = "assets/logo-yellow.png";

    document.querySelector(".loader").classList.add("dark");
    document.querySelector(".logo2 img").src = "assets/logo-yellow.png";
  } else {
    darkmode = false;
    document.querySelector("body").classList.remove("dark");
    document.querySelector(".bartender-img").src = "assets/bartender-green.png";
    document.querySelector(".switch").src = "assets/FooBar-switch.png";
    document.querySelector(".logo").src = "assets/logo-green.png";
    document.querySelectorAll(".next-icon").forEach((element) => {
      element.src = "/assets/next_light-green.png";
    });
    document.querySelector(".exit img").src = "assets/exit_grey.png";
    document.querySelector(".screen1").classList.remove("dark");
    document.querySelector(".screen1 .switch").src = "assets/FooBar-switch.png";
    document.querySelector(".logo3 img").src = "assets/logo-green.png";

    document.querySelector(".loader").classList.remove("dark");
    document.querySelector(".logo2 img").src = "assets/logo-green.png";
  }
}
// //end of dark mode
