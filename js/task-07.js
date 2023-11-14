// Напиши скрипт, який реагує на зміну значення input#font - size - control
//     (подія input) і змінює інлайн - стиль span#text, оновлюючи властивість
// font - size.В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>


const btn = document.getElementById("font-size-control");
const textChange = document.getElementById("text");

function fontSizeControl(event) {
  textChange.style.fontSize = event.currentTarget.value + "px";
}

btn.addEventListener("input", fontSizeControl);