// let p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("Please try again later!");
//   }, 3000);
// });

// p1.then(() => {
//   console.log("Resolved");
// }).catch(() => {
//   console.log("Error");
// });

// async await

// try catch

// async function consumePromise() {
//   try {
//     let result = await p1;

//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// }

// consumePromise();

// axios
// fetch

// async function getData() {
//   try {
//     let res = await fetch("https://jsonplaceholder.typicode.com/users");

//     let data = await res.json();

//     data.forEach((user) => {
//      console.log(user.name);

//     });
//   } catch (error) {
//     console.log(error);
//   }
// }

// getData();

async function getPosts() {
  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/posts");

    let data = await res.json();

    data.forEach((post) => {
      console.log(post.id + " " + post.title);
    });
  } catch (error) {
    console.log(error);
  }
}

getPosts();
