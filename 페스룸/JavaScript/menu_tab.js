let content = document.querySelector(".all_menupro");
let btn = document.querySelectorAll(".tablink");
let pro = document.querySelectorAll(".product_info > ul > li");
let ht = pro[0].offsetHeight;
console.log(ht);
document.querySelector(".product_info").style.height = ht + "px";
content.style.backgroundImage = "url(images2/slide1.gif)";
btn.forEach(function (item, keys) {
  console.log("item :" + item + "\n" + "keys : " + keys);
  item.onclick = function (e) {
    e.preventDefault();
    let j = Array.from(btn).indexOf(e.target);
    function others(item) {
      return item !== j;
    }
    let otherItems = Array.from(pro).filter(others);
    otherItems.forEach(function (item) {
      item.style.opacity = "0";
    });
    pro[j].style.opacity = "1";
    // console.log("j : " + j);
    content.style.backgroundImage = "url(images2/slide" + (j + 1) + ".gif)";
    let otherItem = Array.from(btn).filter(others);
    otherItem.forEach(function (item) {
      item.style.color = "#000";
    });

    this.style.color = "red";
  };
});
