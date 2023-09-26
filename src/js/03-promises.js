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

  console.dir(event.target);
}

//console.log(refs.delayEl, refs.amountEl, refs.stepEl);

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

const user = {
  userName: 'userName',
  lastName: 'test',
  age: 20,
  job: 'Dev',
  salary: 1,
};

// function showUserInfo({ age, lastName, userName }) {
//   console.log(`${userName} ${lastName} ${age}`);
// }
function showUserInfo(user) {
  const { job, salary } = user;

  console.log(job, salary);
}

showUserInfo(user);
