let timerInterval;
let isRunning = false;
let elapsedTime = 0;
let lapCount = 1;

const display = document.getElementById("display");
const startPauseBtn = document.getElementById("startPauseBtn");
const lapBtn = document.getElementById("lapBtn");
const lapsList = document.getElementById("lapsList");

function startPause() {
  if (isRunning) {
    pauseStopwatch();
  } else {
    startStopwatch();
  }
}

function startStopwatch() {
  isRunning = true;
  lapBtn.disabled = false;
  startPauseBtn.textContent = "Pause";
  timerInterval = setInterval(updateDisplay, 1000);
}

function pauseStopwatch() {
  isRunning = false;
  clearInterval(timerInterval);
  startPauseBtn.textContent = "Start";
}

function resetStopwatch() {
  isRunning = false;
  clearInterval(timerInterval);
  elapsedTime = 0;
  lapCount = 1;
  display.textContent = "00:00:00";
  startPauseBtn.textContent = "Start";
  lapBtn.disabled = true;
  lapsList.innerHTML = "";
}

function updateDisplay() {
  elapsedTime++;
  let hours = Math.floor(elapsedTime / 3600);
  let minutes = Math.floor((elapsedTime % 3600) / 60);
  let seconds = elapsedTime % 60;

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  display.textContent = `${hours}:${minutes}:${seconds}`;
}

function recordLap() {
  const lapTime = display.textContent;
  const lapItem = document.createElement("li");
  lapItem.textContent = `Lap ${lapCount}: ${lapTime}`;
  lapsList.appendChild(lapItem);
  lapCount++;
}
