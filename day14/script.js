// let h1 = document.querySelector("#heading");

// h1.innerHTML = "Hey"

// console.log(h1);

// event listners

// let h1 = document.querySelector("#heading");
// let button = document.querySelector("#button")

// button.addEventListener("click", function () {
//   h1.style.backgroundColor = "blue";
//   h1.style.fontSize = "100px";
//   h1.style.color = "white";

//   button.style.backgroundColor = "green"
// });

// button.addEventListener("mouseenter", function () {
//   h1.style.backgroundColor = "yellow"
//   h1.style.color = "black"
// });


// button.addEventListener("mouseleave", function(){
//     h1.style.backgroundColor = "blue"
// })



let main = document.querySelector("main");
let button  =document.querySelector("button");



let theme = "light"

button.addEventListener("click", function(){

   if(theme === "light"){

      main.style.backgroundColor = "black";
      main.style.color = "white"
      button.style.backgroundColor = "white"
      button.style.color = "black"
      button.innerHTML = "light"

      theme = "dark"
   } else {
      
      main.style.backgroundColor = "white";
      main.style.color = "black"
      button.style.backgroundColor = "black"
      button.style.color = "white"
      button.innerHTML = "dark"

      theme = "light"
   }


})


