let i = 0;
let slidContainer = document.querySelector(".slideShow");
let slides = document.querySelectorAll(".slide li");
let slideNext = document.getElementById("next");
let slidePrev = document.getElementById("prev");
slides[0].classList.add("on");
function slide() {
  slides[i].classList.remove("on");
  i++;
  if (i > 4) i = 0;
  slides[i].classList.add("on");
}
let interval;
function slideStart() {
  interval = setInterval(slide, 3000);
}
slideStart();

slidContainer.addEventListener("mouseenter", function () {
  clearInterval(interval);
});
slidContainer.onmouseleave = function () {
  slideStart();
};
slideNext.onclick = function () {
  slide();
};

slidePrev.onclick = function () {
  slides[i].classList.remove("on");
  i--;
  if (i < 0) i = 4;
  slides[i].classList.add("on");
};
