const startTime = 14 * 24 * 60 * 60 + 21 * 60 * 60 + 28 * 60 + 60;

let countdownTime = startTime;

function updateTimer() {
  const days = Math.floor(countdownTime / (60 * 60 * 24));
  const hours = Math.floor((countdownTime % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((countdownTime % (60 * 60)) / 60);
  const seconds = countdownTime % 60;

  document.querySelectorAll(".coming-soon__days").forEach((element) => {
    element.textContent = days;
  });

  document.querySelectorAll(".coming-soon__hours").forEach((element) => {
    element.textContent = hours;
  });

  document.querySelectorAll(".coming-soon__minutes").forEach((element) => {
    element.textContent = minutes;
  });

  document.querySelectorAll(".coming-soon__seconds").forEach((element) => {
    element.textContent = seconds;
  });

  countdownTime -= 1;

  if (countdownTime < 0) {
    countdownTime = startTime;
  }
}

setInterval(updateTimer, 1000);
updateTimer();
