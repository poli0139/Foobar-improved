"use strict";
// fetching data
window.addEventListener("DOMContentLoaded", form);
let darkmode = false;
let allOrders = [];
const Order = {
  name: "",
  servingCustomer: "",
  startTime: 0,
  order: "",
};

//form
function form() {
  const form = document.querySelector(".login-form");
  const username = document.getElementById("Username");
  const password = document.getElementById("Password");
  const message = document.getElementById("message");
  const messages = document.querySelectorAll(".message");
  const button = document.querySelector(".form-submit-btn");
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
  const checkLength = (input, min) => {
    if (input.value.trim().length < min) {
      error(input, `${input.id} must be at least ${min} characters`);
    } else {
      succes(input);
    }
  };
  // input.value === "Jonas" === bartdern[3]
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
}
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

  loadJSON();
}
//end of loading animation
function loadJSON() {
  fetch("https://foobarpm.herokuapp.com/")
    .then((response) => response.json())
    .then((jsonData) => {
      // when loaded, prepare objects
      prepareObjects(jsonData);

      // refresh();
    });
}

// function refresh(){
//   const screen1 = document.querySelector(".screen1");
//   const loader = document.querySelector(".loader");
//   const main = document.querySelector(".main");

// setTimeout(function(){
//   location.reload(1);
//   loader.style.display = "none";
//   loader.style.visibility = "hidden";
//   main.style.display = "grid";
// }, 10000)};

function prepareObjects(jsonData) {
  // const json = Object.values(jsonData);
  // const obj1 = json[3];
  // const obj2 = json[4];

  // const obj3 = Object.assign(obj1, obj2);

  // console.log(obj3);

  // console.log(json);
  // console.log(json[2]);
  // const objectfromarray = json[2].map((obj) => {
  //   console.log(obj);
  // });

  // console.log(objectfromarray);

  showBeerTap(jsonData.taps);
  showQueue(jsonData.queue);
  showStorage(jsonData.storage);
  showTask(jsonData);
  allOrders = json[2].map(prepareOrder);
  console.log(allOrders);
  displayList(allOrders);
  const hour2 = new Date(jsonData.timestamp).getHours();
  const minutes2 = new Date(jsonData.timestamp).getMinutes();
  document.querySelector("header h1").textContent = hour2 + ":" + minutes2;
}

function prepareOrder(elem) {
  console.log(elem);
  const order = Object.create(Order);
  // const bartenders = elem[1];
  // const name5 = bartenders.name;
  // console.log(bartenders);
  // order.name = elem.order;
  // console.log(order.name);
  // order.servingCustomer = elem.servingCustomer;
  order.order = elem.order;
  console.log(order.order);

  return order;
}
function displayList(orders) {
  document.querySelector(".orderList").innerHTML = "";

  orders.forEach(displayOrder);
}

function displayOrder(order) {
  console.log(order);
  const clone = document.querySelector(".task").content.cloneNode(true);
  clone.querySelector(".orderId").textContent = order.order;
  document.querySelector(".orderList").appendChild(clone);
}

//BEER TAPS
function showBeerTap(taps) {
  const template = document.querySelector(".tapBeerTemplate").content;
  taps.forEach((tap) => {
    let percentage = (tap.level * 100) / tap.capacity + "%";

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
        // console.log("it is large");
        fill.style.height = percentage;
        fill.style.width = "100%";
      } else if (size === "medium") {
        fill.style.height = percentage;
        fill.style.width = "100%";
      } else {
        fill.style.width = percentage;
        fill.style.height = "100%";
      }
    }

    const mobileView = window.matchMedia("(max-width: 575px)");
    if (mobileView.matches) {
      fill.style.width = percentage;
      fill.style.height = "100%";
    } else {
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
  const template = document.querySelector(".nextInQueueTemplate").content;
  peopleQueue.forEach((person) => {
    const copy = template.cloneNode(true);
    const hour = new Date(person.startTime).getHours();
    const minutes = new Date(person.startTime).getMinutes();

    copy.querySelector(".length").textContent = person.order.length;
    copy.querySelector(".orderId span").textContent = person.id;
    copy.querySelector(".orderTime").textContent = hour + ":" + minutes;
    document.querySelector(".people-queue").appendChild(copy);
  });
}

//STORAGE
function showStorage(storage) {
  const template = document.querySelector(".storageTemplate").content;
  storage.forEach((beer) => {
    const copy = template.cloneNode(true);
    copy.querySelector(".namebeer").textContent = beer.name;
    copy.querySelector(".amountbeer").textContent = `x${beer.amount}`;
    document.querySelector(".storageitems ul").appendChild(copy);
  });
}

//TASK
function showTask(data) {

  let servingdata = data.serving;
  let bartendersdata = data.bartenders;

  console.log(servingdata);
  const template = document.querySelector(".task").content;

  servingdata.forEach((order) => {
    const clone = template.cloneNode(true);

    clone.querySelector(".orderId").textContent = `#${order.id}`;
    clone.querySelector(".singleOrder span").textContent = order.order.length;
    clone.querySelector(".name3").textContent = order.order;
//     clone.querySelector("#bartenderName").textContent = bartendersdata.name;

//     document.querySelector(".orderList").appendChild(clone);
//   });

//   const template2 = document.querySelector(".task").content;

//   bartendersdata.forEach((bartender) => {
//     console.log(bartender);
//     const clone = template2.cloneNode(true);
//     clone.querySelector("#bartenderName").textContent = bartender.name;
    document.querySelector(".orderList").appendChild(clone);
  });
}

//BARTENDER
// function showBartender(bartenders) {
// let abartender = bartenders.map((x) => x);
// console.log(abartender);
// let order = document.querySelectorAll(".orderList h2 #bartenderName");

// abartender.forEach((bartender) => {
//   console.log(bartender);
//   document.querySelector(".orderList h2 #bartenderName").textContent = bartender.name;

// });

// order.forEach((anorder) => {
//   const template = document.querySelector(".task").content;
//   const clone = template.cloneNode(true);
//   document.querySelector(".orderList").appendChild(clone);
//   console.log(anorder);
//   clone.innerHTML = abartender.name;
// });

// bartenders.forEach((bartender) => {
// let order = document.querySelectorAll(".orderList h2 #bartenderName");
// console.log(order);
// order.forEach((anorder) => {
//   anorder.textContent = bartender.name;
// });
// console.log(bartender);

// clone.querySelector("#bartenderName").textContent = bartender.name;
// });
// }

//LOG OUT
document.querySelector(".logout").addEventListener("click", reset);
function reset() {
  location.reload();
}
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
