let button = document.querySelector("button");
let bulbs = document.querySelectorAll(".bulb");

bulbs.forEach(function (b) {
  let flag = 0;
  button.addEventListener("click", function () {
    if (flag === 0) {
      b.style.backgroundColor = "transparent";
      b.style.filter = "blur(0px)";
      b.style.border = "2px solid orange";
      button.innerHTML = "ON";
      flag = 1;
    } else {
      b.style.backgroundColor = "rgb(255, 187, 0)";
      b.style.filter = "blur(25px)";
      b.style.border = "none";
      button.innerHTML = "OFF";
      flag = 0;
    }
  });
});

