var countdown;
var timeInSeconds = 60; // Set the initial time in seconds

function startTimer() {
  clearInterval(countdown);
  countdown = setInterval(updateTimer, 1000);
}

function stopTimer() {
  clearInterval(countdown);
}

function resetTimer() {
  clearInterval(countdown);
  timeInSeconds = 60; // Reset the time to initial value
  updateTimer();
}

function updateTimer() {
  var timerDisplay = document.getElementById("timer");

  var minutes = Math.floor(timeInSeconds / 60);
  var seconds = timeInSeconds % 60;

  var timerText = minutes.toString().padStart(2, "0") + ":" + seconds.toString().padStart(2, "0");
  timerDisplay.textContent = timerText;

  if (timeInSeconds > 0) {
    timeInSeconds--;
  } else {
    stopTimer();
    timerDisplay.textContent = "Time's up!!";
  }
}
