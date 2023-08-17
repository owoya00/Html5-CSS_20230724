let content = document.querySelector(".all_menupro");
let btn = document.querySelectorAll(".tablink");
content.style.backgroundImage = "url(images2/slide1.gif)";
btn.forEach(function (item, keys) {
  console.log("item :" + item + "\n" + "keys : " + keys);
  item.onclick = function (e) {
    e.preventDefault();
    let j = Array.from(btn).indexOf(e.target);
    function others(item) {
      return item !== j;
    }
    console.log("j : " + j);
    content.style.backgroundImage = "url(images2/slide" + (j + 1) + ".gif)";
    let otherItem = Array.from(btn).filter(others);
    otherItem.forEach(function (item) {
      item.style.color = "#000";
    });
    this.style.color = "red";
  };
});
