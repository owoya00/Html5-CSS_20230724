let target = document.querySelector("#dynamic");
let stringArr = [
  "Learn to HTML",
  "Learn to CSS",
  "Learn to JAVASCRIPT",
  "Learn to PYTHON",
  "Learn to RUBY",
];
let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
let selectStringArr = selectString.split("");

function dynamic(randomArr) {
  console.log(randomArr);
  if ((randomArr length > 0)) {
    target.textContent += randomArr.shift();
    setTimeout(function () {
      dynamic(randomArr);
    }, 80);
  }
}

console.log(selectString);
console.log(selectStringArr);

//커서 깜박임 효과
function blink() {
  target.classList.toggle("active");
}
setInterval(blink, 500);
