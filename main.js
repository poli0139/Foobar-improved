"use strict";
import { showBeerTap } from "./beerTaps";
import { showQueue } from "./showQueue";
import { screen1DarkMode } from "./darkMode";
import { mainScreenDarkMode } from "./darkMode";
import { showStorage } from "./storage";
import { showTask } from "./showTask";
import { removeObjects } from "./removeObjects";
import { removeTask } from "./removeTask";
import { initFucntion } from "./initFunction";
window.addEventListener("DOMContentLoaded", form);

function form() {
  const form = document.querySelector(".login-form");
  const username = document.getElementById("Username");
  const password = document.getElementById("Password");
  const header = document.querySelector("header");

  header.style.display = "none";

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

  const checkName = (input) => {
    if (input.value === "Jonas") {
      succes(input);
      init();
    } else if (input.value === "Peter") {
      succes(input);
      init();
    } else if (input.value === "Klaus") {
      succes(input);
      init();
    } else if (input.value === "Dannie") {
      succes(input);
      init();
    } else {
      error(input, `${input.id} is wrong`);
    }
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkName(username);
    checkRequiredFields([username, password]);
  });
}

function init() {
  initFucntion();
  loadJSON();
}

// fetching data
function loadJSON() {
  fetch("https://foobarpm.herokuapp.com/")
    .then((response) => response.json())
    .then((jsonData) => {
      prepareObjects(jsonData);
      // removeTask(jsonData);
    });
}

// reLoadingJSON

setInterval(function () {
  removeObjects();
  loadJSON();
}, 10000);

document.querySelector(".done-btn").addEventListener("click", removeTask);

function prepareObjects(jsonData) {
  showBeerTap(jsonData.taps);
  showQueue(jsonData.queue);
  showStorage(jsonData.storage);
  showTask(jsonData);
  getMainTime(jsonData.timestamp);
}

function getMainTime(time) {
  const hour2 = new Date(time).getHours();
  const minutes2 = new Date(time).getMinutes().toString().padStart(2, "0");
  document.querySelector("header h1").textContent = hour2 + ":" + minutes2;
}

//LOG OUT

document.querySelectorAll(".logout").forEach((button) => {
  button.addEventListener("click", reset);
  function reset() {
    location.reload();
  }
});

//DARK MODE

const modeSwitch = document.querySelector(".switch");
const switchDark = document.querySelector(".screen1 .switch");

switchDark.onclick = function () {
  screen1DarkMode();
};
modeSwitch.onclick = function () {
  mainScreenDarkMode();
};
