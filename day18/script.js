let main = document.querySelector("#main");

// let data = [
//   {
//     name: "User 1",
//     email: "user1@gmail.com",
//     about: "This is about of user 1",
//     img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
//   },
//   {
//     name: "User 2",
//     email: "user2@gmail.com",
//     about: "This is about of user 2",
//     img: "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
//   },
//   {
//     name: "User 3",
//     email: "user3@gmail.com",
//     about: "This is about of user 3",
//     img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
//   },
// ];

async function fetchData() {
  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/users");

    let data = await res.json();

    console.log(data);

    data.forEach(function (user) {
      main.innerHTML += `<div class="card">
        <img
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
          alt=""
        />
        <h3>${user.name}</h3>
        <p class="email">${user.email}</p>
        <p>
         ${user.address.city}, ${user.address.street}, ${user.address.zipcode}
        </p>
      </div>`;
    });
  } catch (error) {
    console.log(error);
  }
}

fetchData();
