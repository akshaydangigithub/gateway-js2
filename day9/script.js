// contructor functions

// let user = {
//   name: "Akshay",
//   age: 23,
//   email: "test@gamil.com",
// };

// let user1 = {
//   name: "user2",
//   age: 34,
//   email: "user2@gamil.com",
// };

// console.log(user);
// console.log(user1);

// class Person {
//   constructor(n, a, e) {
//     this.name = n
//     this.age = a
//     this.email = e
//   }
// }

// let p1 = new Person("akshay", 23, "akshay@gmail.com");
// let p2 = new Person("Aman",45, "aman@gamil.com");
// let p3 = new Person("Pratap", 56, "pratap@gamil.com")

// console.log(p1);
// console.log(p2);
// console.log(p3);

// getter
// setter

// class User {
//   constructor(fn, ln) {
//     this.firstName = fn;
//     this.lastName = ln;
//   }

//   // getter
//   get getFullName() {
//     return this.firstName + " " + this.lastName;
//   }

//   set changeName(ogj) {
//     this.firstName = ogj.fn
//     this.lastName = ogj.ln
//   }
// }

// let user1 = new User("Akshay", "Dangi");
// let user2 = new User("Aman", "Gupta");

// user1.changeName = { fn: "Nitesh", ln: "Sharma" };
// user2.changeName = "Rakesh";

// console.log(user1);
// console.log(user2);

// console.log(user1.getFullName);
// console.log(user2.getFullName);

class Student {
  constructor(e, h, s) {
    this.english = e;
    this.hindi = h;
    this.science = s;
  }

  get getPercentage() {
    return (this.english + this.hindi + this.science) / 3;
  }

  set changeMarks(h) {
    this.hindi = h;
  }
}

let s1 = new Student(67, 78, 56);
let s2 = new Student(45, 65, 54);

s1.changeMarks = 89;

console.log(s1.getPercentage);
console.log(s2.getPercentage);
