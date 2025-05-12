// alert("This is alert")

// prompt

// let ans = prompt("What is your age?");

// console.log(ans + 5);

// let var1 = 12;
// let var2 = "34";
// console.log(typeof var2);

// console.log(var1 + var2);

// let str = "d1235dfhgjghjhj"

// let num = 12

// console.log(parseInt(str) + 3);

// console.log(typeof String(num));

// let ans = prompt("What is your age ??");

// ans = Number(ans)

// console.log(ans + 5);

// OPERATORS

// 1. Arithmetic => +,-, * , / , %, incremental, decremental
// 2. Comparison => > < >= <= == === != !==
// 3. Logical => && ||

// let a = 12;
// let b = 12;

// console.log("a + b is:", a + b);
// console.log("a - b is:", a - b);
// console.log("a * b is:", a * b);
// console.log("a / b is:", a / b);
// console.log("a % b is:", a % b);

// post inc ++

// a--
// console.log(a);

// console.log(a === b);

// console.log(a > 10 && b > 23);
// console.log(a > 10 || b > 23);

// conditionals

// 1. if
// 2. else
// 3.  else if
// 4. swith case

// if (12 < 45) {
//   console.log("Hello");
// } else if (12 < 56) {
//   console.log("Hello agaain");
// } else {
//   console.log("kuch nhi");
// }

let age = prompt("What is your age ??");

age = Number(age);

if (age > 0 && age < 10) {
  console.log("You are a kid");
} else if (age > 10 && age < 18) {
  console.log("you can not vote");
} else if (age >= 18) {
  console.log("you can vote");
} else {
  console.log("Wrong input");
}
