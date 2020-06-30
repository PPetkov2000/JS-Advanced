function stopwatch() {
  const time = document.getElementById("time");
  const startTimer = document.getElementById("startBtn");
  const stopTimer = document.getElementById("stopBtn");
  let t = null;
  let minutes = 0;
  let seconds = 0;

  function start() {
    seconds = "00";
    minutes = "00";
    time.textContent = `${minutes}:${seconds}`;
    t = setInterval(timer, 1000);
    startTimer.disabled = true;
    stopTimer.disabled = false;
  }

  function stop() {
    time.textContent = "00:00";
    startTimer.disabled = false;
    stopTimer.disabled = true;
    clearInterval(t);
  }

  function timer() {
    seconds++;
    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    if (seconds >= 60) {
      seconds = "0" + 0;
      minutes++;
      if (minutes < 10) {
        minutes = "0" + minutes;
      }
    }

    if (minutes === 0) {
      mintues = "0" + minutes;
    }

    time.textContent = `${minutes}:${seconds}`;
  }

  startTimer.addEventListener("click", start);
  stopTimer.addEventListener("click", stop);
}

document.addEventListener("DOMContentLoaded", stopwatch);
