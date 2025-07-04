let stories = document.querySelectorAll(".story");
let popup = document.querySelector(".popup");
let remove = document.querySelector(".close");
let pInner = document.querySelector(".p-inner");

var timoutID;

stories.forEach(function (s) {
  s.addEventListener("click", function () {
    popup.style.display = "block";

    timoutID = setTimeout(() => {
      popup.style.display = "none";
      pInner.style.width = "0%";
    }, 5000);
  });
});

remove.addEventListener("click", function () {
  clearTimeout(timoutID);

  popup.style.display = "none";
  pInner.style.width = "0%";
});
