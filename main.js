"use stict;";

//form

const form = document.querySelector(".login-form");
const username = document.getElementById("Username");
const password = document.getElementById("Password");
const message = document.getElementById("message");
const messages = document.querySelectorAll(".message");
const button = document.querySelector(".form-submit-btn");

const error = (input, message) => {
  input.nextElementSibling.classList.add("error");
  input.nextElementSibling.textContent = message;
};

const succes = (input) => {
  input.nextElementSibling.classList.remove("error");
};
const checkRequiredFields = (inputArr) => {
  inputArr.forEach((input) => {
    if (input.value.trim() === "") {
      error(input, `${input.id} is required`);
    }
  });
};
const checkLength = (input, min) => {
  if (input.value.trim().length < min) {
    error(input, `${input.id} must be at least ${min} characters`);
  } else {
    succes(input);
  }
};

const checkName = (input) => {
  if (input.value === "Jonas") {
    2;
    succes(input);
    init();
    // window.location.href="index.html";
  } else if (input.value === "Peter") {
    succes(input);
    init();
    // window.location.href="index.html";
  } else if (input.value === "Klaus") {
    succes(input);
    init();
    // window.location.href="index.html";
  } else if (input.value === "Dannie") {
    succes(input);
    init();
    // window.location.href="index.html";
  } else {
    error(input, `${input.id} is wrong`);
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkName(username);
  checkLength(password, 8);
  checkRequiredFields([username, password]);
});

// end of form

//loading animation

function init() {
  const nameBartender = document.querySelector(".name");
  const nameValue = document.getElementById("Username").value;
  nameBartender.innerHTML = nameValue.trim();
  const screen1 = document.querySelector(".screen1");
  const loader = document.querySelector(".loader");
  const main = document.querySelector(".main");
  const logo2 = document.querySelector(".logo2");
  screen1.style.display = "none";
  loader.style.display = "flex";
  loader.style.visibility = "visible";

  setTimeout(() => {
    loader.style.display = "none";
    loader.style.visibility = "hidden";
    main.style.display = "grid";
  }, 3000);
}
//enf of loading animation

//animation for taps
function createBubbles(bubblesNumber, percent) {
  for (let i = 0; i < bubblesNumber; i++) {
    const random = Math.floor(Math.random() * ((percent * 200) / 100));
    const random2 = Math.floor(Math.random() * ((percent * 300) / 100));
    const random3 = Math.floor(Math.random() * ((percent * 150) / 100));
    const random4 = Math.floor(Math.random() * ((percent * 160) / 100));
    const random5 = Math.floor(Math.random() * ((percent * 160) / 80));
    const random6 = Math.floor(Math.random() * ((percent * 290) / 80));
    const random7 = Math.floor(Math.random() * ((percent * 490) / 75));

    const bubble1 = document.createElement("div");
    bubble1.className = "bubble1";
    bubble1.style.left = random + "px";
    bubble1.style.opacity = random + "%";
    bubble1.style.animationDelay = Math.random() * 2 + "s";
    document.querySelector(".bubbles1").appendChild(bubble1);
    const bubble2 = document.createElement("div");
    bubble2.className = "bubble2";
    bubble2.style.left = random2 + "px";
    bubble2.style.opacity = random2 + "%";
    bubble2.style.animationDelay = Math.random() * 2 + "s";
    document.querySelector(".bubbles2").appendChild(bubble2);
    const bubble3 = document.createElement("div");
    bubble3.className = "bubble3";
    bubble3.style.left = random3 + "px";
    bubble3.style.opacity = random3 + "%";
    bubble3.style.animationDelay = Math.random() * 2 + "s";
    document.querySelector(".bubbles3").appendChild(bubble3);
    const bubble4 = document.createElement("div");
    bubble4.className = "bubble4";
    bubble4.style.left = random4 + "px";
    bubble4.style.opacity = random4 + "%";
    bubble4.style.animationDelay = Math.random() * 2 + "s";
    document.querySelector(".bubbles4").appendChild(bubble4);
    const bubble5 = document.createElement("div");
    bubble5.className = "bubble5";
    bubble5.style.left = random5 + "px";
    bubble5.style.opacity = random5 + "%";
    bubble5.style.animationDelay = Math.random() * 2 + "s";
    document.querySelector(".bubbles5").appendChild(bubble5);
    const bubble6 = document.createElement("div");
    bubble6.className = "bubble6";
    bubble6.style.left = random6 + "px";
    bubble6.style.opacity = random6 + "%";
    bubble6.style.animationDelay = Math.random() * 2 + "s";
    document.querySelector(".bubbles6").appendChild(bubble6);
    const bubble7 = document.createElement("div");
    bubble7.className = "bubble7";
    bubble7.style.left = random7 + "px";
    bubble7.style.opacity = random7 + "%";
    bubble7.style.animationDelay = Math.random() * 2 + "s";
    document.querySelector(".bubbles7").appendChild(bubble7);
  }
}
// let bubbles = document.querySelector(".bubbles");

window.addEventListener("DOMContentLoaded", () => {
  createBubbles(60, 100);
});
