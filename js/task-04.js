

let counterValue = 0;
const valueSome = document.getElementById("value");
const minusBtn = document.querySelector('[data-action="decrement"]');
const plusBtn = document.querySelector('[data-action="increment"]');

const onClickMinusBtn = (event) => {
  counterValue -= 1;
  valueSome.textContent = counterValue;
};

const onClickPlusBtn = (event) => {
  counterValue += 1;
  valueSome.textContent = counterValue;
};

minusBtn.addEventListener("click", onClickMinusBtn);
plusBtn.addEventListener("click", onClickPlusBtn);