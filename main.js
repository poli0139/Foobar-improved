"use stict;";
// fetching data
window.addEventListener("DOMContentLoaded", loadJSON);
// let allBeers = [];
const Beertap = {
  dot: "",
  percentageText: "",
  namebeer: "",
};
function loadJSON() {
  fetch("https://foobarpm.herokuapp.com/")
    .then((response) => response.json())
    .then((jsonData) => {
      // when loaded, prepare objects
      prepareObjects(jsonData);
    });
}
function prepareObjects(jsonData) {
  // console.log(jsonData);
  // console.log(jsonData.bar);
  // console.log(jsonData.bar.name);
  showBeerTap(jsonData.taps);
  showQueue(jsonData.queue);
  showStorage(jsonData.storage);
  showTask(jsonData.serving);
  // showBartender(jsonData.bartenders);
}
//BEER TAPS

function showBeerTap(taps) {
  const template = document.querySelector(".tapBeerTemplate").content;
  taps.forEach((tap) => {
    console.log(tap);
    console.log(tap.capacity);
    console.log(tap.level);
    let percentage = (tap.level * 100) / tap.capacity + "%";
    console.log(percentage);
    const copy = template.cloneNode(true);
    copy.querySelector(".namebeer").textContent = tap.beer;
    let fill = copy.querySelector(".progress-fill");
    let filltext = copy.querySelector(".progress-text");
    let dot = copy.querySelector(".dot");
    if (tap.inUse === true) {
      dot.classList.remove("greendot");

      dot.classList.add("reddot");
    } else {
      dot.classList.remove("reddot");
      dot.classList.add("greendot");
    }
    filltext.textContent = percentage;
    // fill.style.height = percentage;
    console.log(fill);

    //Delete if works
    // const mqLarge = window.matchMedia("(min-width:800px)");
    // console.log(mqLarge);
    // mqLarge.addEventListener("change", mqHandler);
    // function mqHandler(e) {
    //   console.log(e.matches ? "large" : "not large");
    // }
    // mqHandler(mqLarge);

    const screen = {
      small: window.matchMedia("(min-width: 400px)"),
      medium: window.matchMedia("(min-width: 575px)"),
      large: window.matchMedia("(min-width:800px)"),
    };

    for (let [scr, mq] of Object.entries(screen)) {
      if (mq) mq.addEventListener("change", mqHandler);
    }
    function mqHandler() {
      let size = null;
      for (let [scr, mq] of Object.entries(screen)) {
        if (!mq || mq.matches) size = scr;
      }

      console.log(size);
      if (size === "large") {
        console.log("it is large");
        fill.style.height = percentage;
        fill.style.width = "100%";
      } else if (size === "medium") {
        fill.style.height = percentage;
        fill.style.width = "100%";
        console.log("it is medium");
      } else {
        console.log("it is small");
        fill.style.width = percentage;
        fill.style.height = "100%";
      }
    }

    //Delete if works
    // let x = window.matchMedia("(max-width: 575px)");

    // function checkmedia(x) {
    //   if (x.matches) {
    //     console.log("it is narrow");
    //     fill.style.width = percentage;
    //   } else {
    //     console.log("it is large");
    //     fill.style.height = percentage;
    //   }
    // }
    // checkmedia(x);

    // x.addEventListener("change", function (event) {
    //   checkmedia(event.target);
    // });
    // window.addEventListener("DOMContentLoaded", checkmedia(x));

    // document.querySelector(".tap .progressfill").style.width = percentage;

    const mobileView = window.matchMedia("(max-width: 575px)");
    if (mobileView.matches) {
      console.log("I am the mobile view");
      fill.style.width = percentage;
      fill.style.height = "100%";
    } else {
      console.log("I am the desktop view");

      fill.style.height = percentage;
      fill.style.width = "100%";
    }

    createBubbles(60, 100);
    function createBubbles(bubblesNumber, percent) {
      for (let i = 0; i < bubblesNumber; i++) {
        const random = Math.floor(Math.random() * ((percent * 200) / 100));

        const bubble1 = document.createElement("div");
        bubble1.className = "bubble1";
        bubble1.style.left = random + "px";
        bubble1.style.opacity = random + "%";
        bubble1.style.animationDelay = Math.random() * 2 + "s";
        copy.querySelector(".bubbles1").appendChild(bubble1);
      }
    }
    document.querySelector(".bottomtaps").appendChild(copy);
  });
}

//NEXT IN QUEUE
function showQueue(peopleQueue) {
  // console.log(peopleQueue);
  const template = document.querySelector(".nextInQueueTemplate").content;
  peopleQueue.forEach((person) => {
    const copy = template.cloneNode(true);
    // console.log(person);
    copy.querySelector(".length").textContent = person.order.length;
    copy.querySelector(".orderId span").textContent = person.id;
    document.querySelector(".people-queue").appendChild(copy);
  });
}

//STORAGE
function showStorage(storage) {
  // console.log(storage);
  const template = document.querySelector(".storageTemplate").content;
  storage.forEach((beer) => {
    // console.log(beer);
    const copy = template.cloneNode(true);
    copy.querySelector(".namebeer").textContent = beer.name;
    copy.querySelector(".amountbeer").textContent = `x${beer.amount}`;
    document.querySelector(".storageitems ul").appendChild(copy);
  });
}

//BARTENDER

// function showBartender(bartender){
// const currentBart = document.querySelector(".name2").textContent = bartender.name;
// console.log(bartender.name);
//    const nameBartender2 = document.querySelector(".name2")
// nameBartender2 = bartender.name;
// const nameValue2 = document.getElementById("Username").value;
// nameBartender2.innerHTML = nameValue2;
//   const template = document.querySelector(".bartender2").content;
//     const clone = template.cloneNode(true);
//     clone.querySelector(".name2").textContent=employee.name;
//      const nameValue2 = document.getElementById("Username").value;
//     nameBartender2.innerHTML = employee.name;
//     document.querySelector(".bartender").appendChild(clone);

// }

//TASK

function showTask(serving) {
  console.log(serving);
  const template = document.querySelector(".task").content;
  serving.forEach((order) => {
    console.log(order);
    const clone = template.cloneNode(true);
    clone.querySelector(".subheading2 span").textContent = `#${order.id}`;

    // clone.querySelector(".amount3").textContent = order.order.length;
    clone.querySelector(".name3").textContent = " " + order.order;

    document.querySelector(".orderList").appendChild(clone);
  });
}

//LOG OUT

document.querySelector(".logout").addEventListener("click", reset);
function reset() {
  location.reload();
}
//form

const form = document.querySelector(".login-form");
const username = document.getElementById("Username");
const password = document.getElementById("Password");
const message = document.getElementById("message");
const messages = document.querySelectorAll(".message");
const button = document.querySelector(".form-submit-btn");
const header = document.querySelector("header");
let darkmode = false;

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
  nameBartender.innerHTML = nameValue;
  const screen1 = document.querySelector(".screen1");
  const loader = document.querySelector(".loader");
  const main = document.querySelector(".main");
  const header = document.querySelector("header");
  const body = document.querySelector("body");
  const logo2 = document.querySelector(".logo2 img");
  screen1.style.display = "none";
  logo2.style.display = "flex";
  logo2.style.visibility = "visible";
  loader.style.display = "flex";
  loader.style.visibility = "visible";
  body.style.borderLeft = "0";

  setTimeout(() => {
    const nameBartender2 = document.querySelector(".name2");
    const nameValue2 = document.getElementById("Username").value;
    nameBartender2.innerHTML = nameValue2;
    loader.style.display = "none";
    loader.style.visibility = "hidden";
    main.style.display = "grid";
    header.style.display = "flex";
    document.querySelector("body").style.borderLeft = "none";
  }, 3000);
}
//enf of loading animation

//animation for taps
// let neededbubbles = document.querySelectorAll("bottomtaps.tap");

// window.addEventListener("DOMContentLoaded", () => {
//   createBubbles(60, 100);
// });
//DARK MODE

const modeSwitch = document.querySelector(".switch");
const switchDark = document.querySelector(".screen1 .switch");

switchDark.onclick = function () {
  if (darkmode === false) {
    darkmode = true;
    document.querySelector("body").classList.add("dark");
    document.querySelector("body").style.borderLeft = "7vw solid #849478";
    document.querySelector(".screen1").classList.add("dark");
    document.querySelector(".screen1 .switch").src = "assets/FooBar-switch2.png";
    document.querySelector(".logo3 img").src = "assets/logo-yellow.png";

    document.querySelector(".loader").classList.add("dark");
    document.querySelector(".logo2 img").src = "assets/logo-yellow.png";
  } else {
    darkmode = false;
    document.querySelector("body").classList.remove("dark");
    document.querySelector("body").style.borderLeft = "7vw solid #fcce72";
    document.querySelector(".screen1").classList.remove("dark");
    document.querySelector(".screen1 .switch").src = "assets/FooBar-switch.png";
    document.querySelector(".logo3 img").src = "assets/logo-green.png";

    document.querySelector(".loader").classList.remove("dark");
    document.querySelector(".logo2 img").src = "assets/logo-green.png";
  }
};

modeSwitch.onclick = function () {
  if (darkmode == false) {
    darkmode = true;
    console.log(darkmode);
    document.querySelector("body").classList.add("dark");
    document.querySelector(".bartender-img").src = "assets/bartender-yellow.png";
    document.querySelector(".switch").src = "assets/FooBar-switch2.png";
    document.querySelector(".logo").src = "assets/logo-yellow.png";
    document.querySelectorAll(".next-icon").forEach((element) => {
      element.src = "assets/next_yellow.png";
    });
    document.querySelector(".exit img").src = "assets/exit_white.png";
  } else {
    darkmode = false;
    document.querySelector("body").classList.remove("dark");
    document.querySelector(".bartender-img").src = "assets/bartender-green.png";
    document.querySelector(".switch").src = "assets/FooBar-switch.png";
    document.querySelector(".logo").src = "assets/logo-green.png";
    document.querySelectorAll(".next-icon").forEach((element) => {
      element.src = "assets/next_light-green.png";
    });
    document.querySelector(".exit img").src = "assets/exit_grey.png";
  }
};

//displaying the data
