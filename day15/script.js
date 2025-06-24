let button = document.querySelector("button");
let name = document.querySelector("#name");
let select = document.querySelector("#select");

button.addEventListener("click", function () {
  console.log(name.value);
  console.log(select.value);
});
