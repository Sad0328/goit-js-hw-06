// Обробка відправлення форми form.login - form повинна відбуватися відповідно 
// до події submit.
// Під час відправлення форми сторінка не повинна перезавантажуватися.
// Якщо у формі є незаповнені поля, виводь alert з попередженням про те,
//     що всі поля повинні бути заповнені.
// Якщо користувач заповнив усі поля і відправив форму, збери значення полів в 
// об'єкт, де ім'я поля буде ім'ям властивості, а значення поля - значенням 
// властивості.Для доступу до елементів форми використовуй властивість elements.
// Виведи об'єкт із введеними даними в консоль і очисти значення полів форми 
// методом reset.


const form = document.getElementById(".login-form");

form.addEvenListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const { email, password } = event.currentTarget.elements;

if (!email.value.trim() || !password.value.trim()) {
  return alert("Please fill in all the fields!");
} else {
  const formData = {
    email: email.value,
    password: password.value,
  };
  console.log(formData);
  event.currentTarget.reset();
}

}