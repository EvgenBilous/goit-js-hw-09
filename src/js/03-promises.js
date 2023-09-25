// const delayEl = document.querySelector('[name="delay"]');

const refs = {
  delayEl: document.querySelector('[name="delay"]'),
  stepEl: document.querySelector('[name="step"]'),
  amountEl: document.querySelector('[name="amount"]'),
};
//console.log(refs.delayEl, refs.amountEl, refs.stepEl);

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}
createPromise(1000, refs.delayEl.value);
