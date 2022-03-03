//Target Date to reach
const newDate = "18 March 2022";

//Getting all Necssary items using id
const dayEl = document.getElementById("day-digit");
const hourEl = document.getElementById("hour-digit");
const minEl = document.getElementById("min-digit");
const secEl = document.getElementById("sec-digit");

function countDown() {
  //Getting our target date
  const newDateCopy = new Date(newDate);

  //Making it in form of millisecond
  const newDateCopyTime = newDateCopy.getTime();

  //Creating current date
  const currDate = new Date();
  //Making it in form of millisecond
  const currDateTime = currDate.getTime();

  //Getting total seconds Left
  const timeLeft = (newDateCopyTime - currDateTime) / 1000;

  //Getting total day left
  const day = Math.floor(timeLeft / 3600 / 24);
  //Getting hour left
  const hour = Math.floor((timeLeft / 3600) % 24);
  //Getting minutes left
  const minutes = Math.floor((timeLeft / 60) % 60);
  //Getting second left
  const second = Math.floor(timeLeft % 60);

  //Setting their text to the extracted time
  dayEl.innerText = day;
  hourEl.innerText = timeSetter(hour);
  minEl.innerText = timeSetter(minutes);
  secEl.innerText = timeSetter(second);
}

//Funtion to add zero if any time entity is less than 10
function timeSetter(time) {
  return time < 10 ? `0${time}` : time;
}

//Setting Interval to call function every second
setInterval(countDown, 1000);

//Calling Function
countDown();
