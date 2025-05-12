// objects

// var info = {
//   name: "Naman Gupta",
//   age: 34,
//   email: "naman@gamil.com",

//   profestionInfo: {
//     company: "Some company name",
//     slary: 46958,
//     exp: "5 years",
//   },
// };

// console.log(info.profestionInfo.company);

// var info = {
//   name: "Naman Gupta",
//   age: 34,
//   email: "naman@gamil.com",

//   // profestionInfo: {
//   //   company: "Some company name",
//   //   slary: 46958,
//   //   exp: "5 years",
//   // },
// };

// console.log(info);

// for in

// console.log(info["email"]);

// for (let key in info) {
//   console.log(key);

//   // if (key == "profestionInfo") {
//   //   for (let key2 in info.profestionInfo) {
//   //     console.log(info.profestionInfo[key2]);
//   //   }
//   // }
// }

var info = {
  name: "Naman Gupta",
  age: 34,
  email: "naman@gamil.com",
};

let info2 = { ...info };

delete info.name;

console.log(info);
console.log(info2);
