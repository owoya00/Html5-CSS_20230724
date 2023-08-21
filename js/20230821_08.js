let food = [
  "햄버거",
  "돈까스",
  "칼국수",
  "수제비",
  "비빔밥",
  "라면",
  "삼겹살",
  "불고기",
  "김치찌개",
  "쌀국수",
];
let i = Math.floor(Math.random() * food.length);
console.log(i);
document.write(food[i]);

let bg = ["red", "blue", "green", "yellow", "pink", "violet"];
let j = Math.floor(Math.random() * bg.length);
document.querySelector("body").style.backgroundColor = bg[j];
console.log(j);

let n = Math.floor(Math.random() * 10);
document.querySelector("body").style.backgroundImage =
  "url(images/milk" + (n + 1) + ".jpg)";
