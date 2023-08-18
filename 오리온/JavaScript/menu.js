let subMenu = document.querySelector(".submenu");
let sub = document.querySelectorAll(".lnb ul");
let gnb = document.querySelectorAll(".menu ul li a");
let ht = subMenu.querySelector(".lnb").offsetHeight;
console.log("ht:" + ht);
gnb.forEach(function (item, keys) {
  item.addEventListener("mouseenter", function () {
    subMenu.style.height = ht + "px";
    console.log(keys);
  });
  item.addEventListener("mouseleave", function () {
    subMenu.style.height = 0 + "px";
  });
});
sub.forEach(function (item, keys) {
  item.addEventListener("mouseenter", function () {
    subMenu.style.height = ht + "px";
    gnb[keys].classList.add("active");
  });
  item.addEventListener("mouseleave", function () {
    subMenu.style.height = 0 + "px";
    gnb[keys].classList.remove("active");
  });
});
