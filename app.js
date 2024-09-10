//********* DOM ELEMENTS ********* */
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");
const count = document.getElementById("counter");
const hr = document.getElementById("hr");
const min = document.getElementById("min");
const sec = document.getElementById("sec");

let timer = false;
let counter = 0;
let hrCounter = 0;
let minCounter = 0;
let secCounter = 0;

// ********* EVENT LISTENERS *********
start.addEventListener("click", () => {
  addActiveClass(start);
  timer = true;
  startSwtopWatch();
});

stop.addEventListener("click", () => {
  addActiveClass(stop);
  timer = false;
});

reset.addEventListener("click", () => {
  addActiveClass(reset);
  timer = false;
  counter = 0;
  count.innerHTML = "00";
  hr.innerHTML = "00";
  min.innerHTML = "00";
  sec.innerHTML = "00";
});

// ********* FUNCTIONS *********
function startSwtopWatch() {
  counter++;
  if (counter < 10) {
    count.innerHTML = "0" + counter;
  } else {
    count.innerHTML = counter;
  }

  // increase seconds
  if (counter == 100) {
    secCounter++;
    counter = 0;
    sec.innerHTML = secCounter < 10 ? "0" + secCounter : secCounter;
  }

  // increase minutes
  if (secCounter == 60) {
    minCounter++;
    secCounter = 0;
    min.innerHTML = minCounter < 10 ? "0" + minCounter : minCounter;
    sec.innerHTML = secCounter < 10 ? "0" + secCounter : secCounter;
  }

  // increase hours
  if (minCounter == 60) {
    hrCounter++;
    minCounter = 0;
    hr.innerHTML = hrCounter < 10 ? "0" + hrCounter : hrCounter;
    min.innerHTML = minCounter < 10 ? "0" + minCounter : minCounter;
    sec.innerHTML = secCounter < 10 ? "0" + secCounter : secCounter;
  }
}
function addActiveClass(elm) {
  console.log(elm);
  const activ = document.querySelector(".activ");
  if (activ) {
    activ.classList.remove("activ");
  }
  elm.classList.add("activ");
}

setInterval(() => {
  if (timer) {
    startSwtopWatch();
  }
}, 10);
