export function getMainTime(time) {
  const hour2 = new Date(time).getHours();
  const minutes2 = new Date(time).getMinutes().toString().padStart(2, "0");
  document.querySelector("header h1").textContent = hour2 + ":" + minutes2;
}
