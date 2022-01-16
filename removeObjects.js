export function removeObjects() {
  let bottomTabs = document.querySelector(".bottomtaps");
  while (bottomTabs.firstChild) {
    bottomTabs.removeChild(bottomTabs.lastChild);
  }
  let queue = document.querySelector(".people-queue");
  while (queue.firstChild) {
    queue.removeChild(queue.lastChild);
  }
  let storage = document.querySelector(".storageitems ul");
  while (storage.firstChild) {
    storage.removeChild(storage.lastChild);
  }
  let task = document.querySelector(".singleOrder");
  while (task.firstChild) {
    task.removeChild(task.lastChild);
  }
}
