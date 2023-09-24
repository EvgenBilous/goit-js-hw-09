// Описаний в документації
import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';

const inputEl = document.querySelector('input#datetime-picker');
const startBtn = document.querySelector('[data-start]');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');

startBtn.disabled = true;

startBtn.addEventListener('click', handleStartTimer);

let INTERVAL_ID = null;
let DEADLINE_TIME = null;

function handleStartTimer() {
  startBtn.disabled = true;
  inputEl.disabled = true;
  INTERVAL_ID = setInterval(() => {
    const currentTime = Date.now();
    const diff = DEADLINE_TIME - currentTime;

    if (diff < 0) {
      alert('Congrats');
      clearInterval(INTERVAL_ID);
      return;
    }
    const { days, hours, minutes, seconds } = convertMs(diff);

    daysEl.textContent = days;
    hoursEl.textContent = formatDateTime(hours);
    minutesEl.textContent = formatDateTime(minutes);
    secondsEl.textContent = formatDateTime(seconds);
  }, 1000);
}

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < options.defaultDate) {
      return alert('Please choose a date in the future');
    }
    startBtn.disabled = false;
    DEADLINE_TIME = selectedDates[0];
    console.log(selectedDates[0]);
  },
};

flatpickr(inputEl, options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function formatDateTime(value) {
  return String(value).padStart(2, 0);
}
