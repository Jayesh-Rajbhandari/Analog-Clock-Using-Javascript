// Dark mode
let checkbox = document.getElementById('chk');
checkbox.addEventListener('change', () =>{
  document.body.classList.toggle('darkBg');
  document.querySelector(".mytime").classList.toggle('whiteFont');
  document.querySelector(".clock").classList.toggle('boxShadow');
  document.querySelector('.hour').classList.toggle('hourColor');
  document.querySelector('.minute').classList.toggle('minColor');
  document.querySelector('.second').classList.toggle('secColor');
  document.querySelector('.middleDot').classList.toggle('dotColor');
 
})

setInterval(setClock, 1000);

let hourHand = document.querySelector("[data-hour-hand]");
let minuteHand = document.querySelector("[data-minute-hand]");
let secondHand = document.querySelector("[data-second-hand]");
function setClock() {
  const currentDate = new Date();
  const secondsRatio = currentDate.getSeconds() / 60;
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;
  setRotation(secondHand, secondsRatio);
  setRotation(minuteHand, minutesRatio);
  setRotation(hourHand, hoursRatio);

  
}
   
function setRotation(element, rotationRatio) {
  element.style.setProperty("--rotation", rotationRatio * 360);
}

setClock();


// Digital clock starts here
function myTime() {
  let textTime = new Date();
  let textHour = textTime.getHours();
  let textMin = textTime.getMinutes();
  let textSec = textTime.getSeconds();
  let dayNight = "AM";
  if(textHour > 12){
      textHour = textHour - 12;
      dayNight = "PM";
  }
  var realTime = textHour + ":" + textMin + ":" + textSec + ":" + dayNight;
  document.querySelector(".mytime").innerText = realTime;
  document.querySelector(".mytime").textContent = realTime;
  setTimeout(myTime, 1000);
}
myTime();

