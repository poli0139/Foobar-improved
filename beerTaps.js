//BEER TAPS
export function showBeerTap(taps) {
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
    if (percentage === "0%") {
      dot.classList.add("hidden");
      // tap.classList.add("text");
    } else {
      dot.classList.remove("hidden");
    }
    filltext.textContent = percentage;

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

      if (size === "large") {
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

    createBubbles(90, 60);
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
