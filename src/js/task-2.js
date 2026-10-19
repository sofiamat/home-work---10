const item1 = document.querySelector(".item-1");
const item2 = document.querySelector(".item-2");
const item3 = document.querySelector(".item-3");
const item4 = document.querySelector(".item-4");

let inervalId = null;

inervalId = setInterval(() => {
  item1.classList.toggle("item-1-boom");
  item2.classList.toggle("item-2-boom");
  item3.classList.toggle("item-3-boom");
  item4.classList.toggle("item-4-boom");
}, 1000);
