// const delayEl = document.querySelector('[name="delay"]');

const refs = {
  // delayEl: document.querySelector('[name="delay"]'),
  // stepEl: document.querySelector('[name="step"]'),
  // amountEl: document.querySelector('[name="amount"]'),
  formEl: document.querySelector('.form'),
};

refs.formEl.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const step = Number(event.target.elements.step.value);
  let delay = Number(event.target.elements.delay.value);
  const amount = event.target.elements.amount.value;

  for (let index = 1; index <= amount; index += 1) {
    createPromise(index, delay)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    delay += step;
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    setInterval(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
