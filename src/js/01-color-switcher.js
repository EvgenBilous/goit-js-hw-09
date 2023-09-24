//Робимо глобальну зміну для запису інтервал ID
//Повісити слухача подій на кнопки
/**
 * Функція як буде генерувати рандомний колір
 * Функція для старту
 * Функція для стопи
 * Дисейбл кнопок
 *
 */

//шукаємом рефс для кнопок старт стоп
let INTERVAL_ID = null;

const refs = {
  btnStart: document.querySelector('[data-start]'),
  btnStop: document.querySelector('[data-stop]'),
};

refs.btnStop.disabled = true;

refs.btnStart.addEventListener('click', handleClickStartBtn);
refs.btnStop.addEventListener('click', handleClickStopBtn);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function handleClickStartBtn() {
  INTERVAL_ID = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  refs.btnStop.disabled = false;
  refs.btnStart.disabled = true;
}

function handleClickStopBtn() {
  clearInterval(INTERVAL_ID);
  refs.btnStop.disabled = true;
  refs.btnStart.disabled = false;
}
