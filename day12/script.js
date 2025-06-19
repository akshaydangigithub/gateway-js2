// Today's topic

// 1. closures
// 2. map
// 3. filter
// 4. reduce

// ====================== CLOSURE ================

// let a = 10;
// function abc() {
//   return a * a;
// }

// let ans = abc();

// console.log(ans);

// function outerFunction() {
//   let counter = 0;

//   return function innerFunction() {
//     return (counter = counter + 1);
//   };
// }

// let returnedFunction =  outerFunction()

// let ans1 = returnedFunction()

// let ans2 = returnedFunction()

// console.log(ans1);
// console.log(ans2);

// =================== MAP =================

// let myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let newArr = [];

// let newArr = myArr.forEach(function (elem, index) {
//   return elem + 1;
// });

// console.log(newArr);
// console.log(myArr);

// myArr.forEach(function (elem) {
//   newArr.push(elem + 1);
// });

// console.log(newArr);

// let arr = ["user1", "user2", "user3", "user4"];

// let newArr = arr.forEach((elem) => {
//   return elem;
// });

// console.log(newArr);

// ======================= FILTER ==================

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let newArr = arr.filter(function (elem) {
//   return elem % 2 === 0 ? elem : ""
// });

// console.log(arr);

// console.log(newArr);

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let value = arr.reduce(function (pre, crr) {
  return pre + crr
});


console.log(value);

