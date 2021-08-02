const hourEl = document.querySelector('.hour'),
      minuteEl = document.querySelector('.minute'),
      secondEl = document.querySelector('.second'),
      timeEl = document.querySelector('.time'),
      dateEl = document.querySelector('.date'),
      toggle = document.querySelector('.toggle');

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

toggle.addEventListener('click', e => {
    const html = document.querySelector('html');
    if (html.classList.contains('dark')) {
        html.classList.remove('dark');
        e.target.inneHTML = 'Dark Mode';
    } else {
        html.classList.add('dark');
        e.target.inneHTML = 'Light Mode';
    }
});

function setTime() {
    const time = new Date(),
          month = time.getMonth(),
          day = time.getDay(),
          date = time.getDate(),
          hours = time.getHours(),
          hoursForClock = hours % 12,
          minutes = time.getMinutes(),
          seconds = time.getSeconds(),
          ampm = hours >= 12 ? 'PM' : 'AM';

    hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 11, 0, 330)}deg)`;
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 59, 0, 354)}deg)`;
    secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 59, 0, 354)}deg)`;

    timeEl.innerHTML = `${hoursForClock}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`;
    dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`;
}

const scale = (num, inMin, inMax, outMin, outMax) => 
    (num - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;

setTime();
setInterval(setTime, 1000);
