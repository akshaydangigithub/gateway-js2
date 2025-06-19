// Promises
// 1 resolve
// 2 reject
// 3 pending

// // settimeout

// setTimeout(function () {
//   console.log("Hello jii");
// }, 5000);

// // settimeinterval

// setInterval(() => {
//   console.log("Hello");
// }, 3000);

// let p1 = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     resolve()
//   }, 3000);
// });

// // .then => resolve
// // .catch => reject

// p1.then(function () {
//   console.log("Resolved");
// }).catch(function () {
//   console.log("Error aa gyi");
// });

let p2 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let isError = false;

    if (!isError) {
      resolve({ name: "Akshay", age: 23 });
    } else {
      reject("Please try again later");
    }
  }, 2000);
});

p2.then(function (data) {
  console.log(data);
  return data;
})
  .then(function (data) {
    console.log(data);
    return data.name
  })
  .then(function (data) {
    console.log(data);
  })
  .catch(function (error) {
    console.log(error);
  });
