//STORAGE
export function showStorage(storage) {
  const template = document.querySelector(".storageTemplate").content;
  storage.forEach((beer) => {
    const copy = template.cloneNode(true);
    copy.querySelector(".namebeer").textContent = beer.name;
    copy.querySelector(".amountbeer").textContent = `x${beer.amount}`;
    document.querySelector(".storageitems ul").appendChild(copy);
  });
}
