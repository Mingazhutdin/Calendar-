const now = moment().format("dddd, MMMM Do ");

const date = document.querySelector(".header__date");
date.innerText = now;

const currentTime = moment().format("ha").toUpperCase();
console.log(currentTime);

for (let i = -3; i < 6; i++) {
  const span = document.querySelector(`#h${i}`);
  if (i < 0) {
    span.innerText = moment()
      .subtract(i * -1, "hours")
      .format("ha")
      .toUpperCase();
  } else if (i === 0) {
    span.innerText = currentTime;
  } else {
    span.innerText = moment().add(i, "hours").format("ha").toUpperCase();
  }
}
// ------->
const inp1 = {};
const inp2 = {};
const inp3 = {};
const inp4 = {};
const inp5 = {};
const inp6 = {};
const inp7 = {};
const inp8 = {};
const inp9 = {};

const tasks = JSON.parse(localStorage.getItem("tasks")) || {};
const inputs = document.querySelectorAll(".todo__inp");
inputs.forEach((el) => {
  const num = Number(el.id.replace("i", ""));
  if (num < 0) {
    const date = moment()
      .subtract(num * -1, "hours")
      .format("YYYY-MM-DD ha");
    if (tasks[date]) {
      el.value = tasks[date];
    }
  } else if (num === 0) {
    const date = moment().format("YYYY-MM-DD ha");
    if (tasks[date]) {
      el.value = tasks[date];
    }
  } else {
    const date = moment().add(num, "hours").format("YYYY-MM-DD ha");
    if (tasks[date]) {
      el.value = tasks[date];
    }
  }
  el.addEventListener("input", (e) => {
    switch (num) {
      case -3: {
        const date = moment()
          .subtract(num * -1, "hours")
          .format("YYYY-MM-DD ha");
        inp1[date] = e.target.value;

        break;
      }
      case -2: {
        const date = moment()
          .subtract(num * -1, "hours")
          .format("YYYY-MM-DD ha");
        inp2[date] = e.target.value;

        break;
      }
      case -1: {
        const date = moment()
          .subtract(num * -1, "hours")
          .format("YYYY-MM-DD ha");
        inp3[date] = e.target.value;

        break;
      }
      case 0: {
        const date = moment().format("YYYY-MM-DD ha");
        inp4[date] = e.target.value;

        break;
      }
      case 1: {
        const date = moment().add(num, "hours").format("YYYY-MM-DD ha");
        inp5[date] = e.target.value;

        break;
      }
      case 2: {
        const date = moment().add(num, "hours").format("YYYY-MM-DD ha");
        inp6[date] = e.target.value;

        break;
      }
      case 3: {
        const date = moment().add(num, "hours").format("YYYY-MM-DD ha");
        inp7[date] = e.target.value;

        break;
      }
      case 4: {
        const date = moment().add(num, "hours").format("YYYY-MM-DD ha");
        inp8[date] = e.target.value;

        break;
      }
      case 5: {
        const date = moment().add(num, "hours").format("YYYY-MM-DD ha");
        inp9[date] = e.target.value;
        break;
      }
    }
    console.log(e.target.value);
  });
});
const btns = document.querySelectorAll(".todo__save");
btns.forEach((el) => {
  el.addEventListener("click", () => {
    switch (el.id) {
      case "b0": {
        const tasks = JSON.parse(localStorage.getItem("tasks")) || {};
        localStorage.setItem("tasks", JSON.stringify({ ...tasks, ...inp1 }));
        break;
      }
      case "b1": {
        const tasks = JSON.parse(localStorage.getItem("tasks")) || {};
        localStorage.setItem("tasks", JSON.stringify({ ...tasks, ...inp2 }));
        break;
      }
      case "b2": {
        const tasks = JSON.parse(localStorage.getItem("tasks")) || {};
        localStorage.setItem("tasks", JSON.stringify({ ...tasks, ...inp3 }));
        break;
      }
      case "b3": {
        const tasks = JSON.parse(localStorage.getItem("tasks")) || {};
        localStorage.setItem("tasks", JSON.stringify({ ...tasks, ...inp4 }));
        break;
      }
      case "b4": {
        const tasks = JSON.parse(localStorage.getItem("tasks")) || {};
        localStorage.setItem("tasks", JSON.stringify({ ...tasks, ...inp5 }));
        break;
      }
      case "b5": {
        const tasks = JSON.parse(localStorage.getItem("tasks")) || {};
        localStorage.setItem("tasks", JSON.stringify({ ...tasks, ...inp6 }));
        break;
      }
      case "b6": {
        const tasks = JSON.parse(localStorage.getItem("tasks")) || {};
        localStorage.setItem("tasks", JSON.stringify({ ...tasks, ...inp7 }));
        break;
      }
      case "b7": {
        const tasks = JSON.parse(localStorage.getItem("tasks")) || {};
        localStorage.setItem("tasks", JSON.stringify({ ...tasks, ...inp8 }));
        break;
      }
      case "b8": {
        const tasks = JSON.parse(localStorage.getItem("tasks")) || {};
        localStorage.setItem("tasks", JSON.stringify({ ...tasks, ...inp9 }));
        break;
      }
    }
  });
});
