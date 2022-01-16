export function removeTask() {
  let task = document.querySelector(".singleOrder");
  let orderid = document.querySelector(".orderId");

  while (task.firstChild) {
    task.removeChild(task.lastChild);
    orderid.remove();
  }
  document.querySelector(".popup-done").classList.remove("hidden");
  setTimeout(() => {
    document.querySelector(".popup-done").classList.add("hidden");
  }, 2000);
}
