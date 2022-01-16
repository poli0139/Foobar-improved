//TASK
export function showTask(dataBase) {
  const loggedIn = document.getElementById("Username").value;
  const workingBartender = dataBase.bartenders.filter(
    (x) => x.name === loggedIn
  );
  const servings = dataBase.serving;
  const OrderToDo = workingBartender[0].servingCustomer;
  const container = document.querySelector(".task");
  const container2 = document.querySelector(".time-button");
  const hour3 = new Date(
    servings.filter((x) => x.id === OrderToDo)[0].startTime
  ).getHours();
  const minute3 = new Date(
    servings.filter((x) => x.id === OrderToDo)[0].startTime
  )
    .getMinutes()
    .toString()
    .padStart(2, "0");

  container.querySelector(".subheading2 span").textContent =
    " " + `#${servings.filter((x) => x.id === OrderToDo)[0].id}`;

  const beers = servings.filter((x) => x.id === OrderToDo)[0].order;
  beers.map(function (item) {
    const element = document.createElement("li");
    element.innerHTML = item;
    document.querySelector(".singleOrder").appendChild(element);
  });

  // container.querySelector(".name3").textContent = mappedBeer;
  container2.querySelector(".order-time").textContent = hour3 + ":" + minute3;
}
