const show = document.getElementById("show");

let first = 0;
let second = 0;
let action = null;

const tooavah = (Number) => {
  if (action && first > 0) {
    second = second * 10 + Number;
    show.textContent = second;
  } else {
    first = first * 10 + Number;
    show.textContent = first;
  }
};

const uildelavah = (uildel) => {
  action = uildel;
};

const hariu = () => {
  if (action === "nemeh") {
    hariult = first + second;
    show.textContent = hariult;
    action = null;
    first = hariult;
    secont = 0;
  } else if (action === "hasah") {
    hariult = first - second;
    show.textContent = hariult;
    action = null;
    first = hariult;
    second = 0;
  } else if (action === "urjeh") {
    hariult = first * second;
    show.textContent = hariult;
    action = null;
    first = hariult;
    secont = 0;
  } else if (action === "huvaah") {
    hariult = first / second;
    show.textContent = hariult;
    action = null;
    first = hariult;
    secont = 0;
  }
};
