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
  nameBartender.innerHTML = nameValue;
  const screen1 = document.querySelector(".screen1");
  const loader = document.querySelector(".loader");
  const main = document.querySelector(".main");
  screen1.style.display = "none";
  loader.style.display = "flex";
  loader.style.visibility = "visible";
  setTimeout(() => {
    loader.style.display = "none";
    loader.style.visibility = "hidden";
    main.style.display = "block";
  }, 3000);
}
