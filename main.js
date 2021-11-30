//loader animation
const loader = document.querySelector(".loader");



function init() {
    setTimeout(() => {
      loader.style.opacity = 0;
      main.style.display = "block";
      setTimeout(() => (main.style.opacity = 1), 50);
    }, 3000);
  }
  init();

  //end of loader animaion
  
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



form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkLength(username, 2);
    checkLength(password, 8);
    checkRequiredFields([username, password]);
    handleButton();
    
});



button.addEventListener("click", handleButton);

function handleButton(){
    location.href="index.html";
    const nameBartender = document.querySelector(".name");
    const nameValue = document.getElementById("Username").value;
    nameBartender.innerHTML = nameValue;
}
// end of form

