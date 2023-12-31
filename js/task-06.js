// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur),
// перевіряє його вміст щодо правильної кількостівведених символів.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />

// Яка кількість символів повинна бути в інпуті, зазначається в його
//  атрибуті data - length.Якщо введена правильна кількість символів,
//     то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid,
//  які ми вже додали у вихідні файли завдання.

// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }
// #validation-input.invalid {
//   border-color: #f44336;}
const inputText = document.getElementById("validation-input");
inputText.addEventListener("blur", changeColor);

function changeColor(event) {
  const inputData = Number(inputText.dataset.length);
  const inputValue = Number(inputText.value.trim().length);

  if (inputValue === inputData) {
    inputText.classList.add("valid");
    inputText.classList.remove("invalid");
  } else {
    inputText.classList.remove("valid");
    inputText.classList.add("invalid");
  }
}