// let myNum = Math.floor(Math.random() * 10 + 1);

// let isCorrect = false;

// while (!isCorrect) {
//   let ans = prompt("Enter a number (1-10)");
//   ans = Number(ans);

//   if (ans === myNum) {
//     console.log("You win");
//     isCorrect = true;
//   } else {
//     console.log("please try again");
//   }
// }

let cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", function (e) {
  cursor.style.top = e.clientY + "px";
  cursor.style.left = e.clientX + "px";
});

console.log(cursor);
