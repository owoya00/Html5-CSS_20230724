let site = true;
let family = document.querySelector(".language_list");
let family1 = document.querySelector(".language p");

document.querySelector(".languagee").onclick = function () {
  if (site) {
    family.classList.add("on");
    family1.classList.add("active");
    document.querySelector(".language").style.borderColor = "#d2d2d2";
  } else {
    family.classList.remove("on");
    family1.classList.remove("active");
    document.querySelector(".language").style.borderColor = "#777";
  }
  site = !site;
  console.log(site);
};
