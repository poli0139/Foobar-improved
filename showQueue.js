import { darkmode as darkmode } from "./darkMode";

//NEXT IN QUEUE
export function showQueue(peopleQueue) {
  const template = document.querySelector(".nextInQueueTemplate").content;
  if (peopleQueue.length === 0) {
    document.querySelector(".noone").textContent = "No one is in queue.";
  } else {
    document.querySelector(".noone").textContent = "";
  }
  peopleQueue.forEach((person) => {
    const copy = template.cloneNode(true);
    const hour = new Date(person.startTime).getHours();
    const minutes = new Date(person.startTime)
      .getMinutes()
      .toString()
      .padStart(2, "0");
    if (darkmode === true) {
      copy.querySelector(".next-icon").src = "/assets/next_yellow.png";
    } else if (darkmode === false) {
      copy.querySelector(".next-icon").src = "/assets/next_light-green.png";
    }
    copy.querySelector(".length").textContent = person.order.length;
    copy.querySelector(".orderId span").textContent = person.id;
    copy.querySelector(".orderTime").textContent = hour + ":" + minutes;
    document.querySelector(".people-queue").appendChild(copy);
  });
}
