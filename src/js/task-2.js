const btnMagic = document.querySelector(".task-2-btn");
const item1 = document.querySelector(".item-1");
const item2 = document.querySelector(".item-2");
const item3 = document.querySelector(".item-3");
const item4 = document.querySelector(".item-4");

const handleMagicBoom = () => {
  setTimeout(() => {
    item1.classList.add("item-1-boom");
    item2.classList.add("item-2-boom");
    item3.classList.add("item-3-boom");
    item4.classList.add("item-4-boom");
  }, 3000);
};

btnMagic.addEventListener("click", handleMagicBoom);
