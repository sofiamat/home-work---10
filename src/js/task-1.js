import Notify from "simple-notify";

import "simple-notify/dist/simple-notify.css";

const btnTask1 = document.querySelector(".task-1-btn");
let inervalId = null;
let time = 0;

const firstMessage = () => {
  new Notify({
    status: "info",
    title: "INFORMATION ☝️🤓",
    text: "Dw i`ll just take ur 5 secs :D ",
    effect: "slide",
    speed: 1000,
    customClass: "",
    customIcon: "",
    showIcon: true,
    showCloseButton: false,
    autoclose: true,
    autotimeout: 4000,
    notificationsGap: null,
    notificationsPadding: null,
    type: "outline",
    position: "right top",
    customWrapper: "",
  });
};

const handleFirstMessage = () => {
  if (!inervalId) {
    inervalId = setInterval(() => {
      firstMessage();
      time++;
      if (time === 5) {
        clearInterval(inervalId);
        inervalId = null;
        time = 0;
      }
    }, 1000);
  }
};

btnTask1.addEventListener("click", handleFirstMessage);
