$(".light_btn li").eq(1).addClass("on");
$(".light_btn li").eq(1).find("a").addClass("on");
$(function () {
  $(window).scroll(function () {
    let ht = $(window).scrollTop();
    console.log(ht);
    if (ht < 750) {
      $(".light_btn li").removeClass();
      $(".light_btn li").eq(1).addClass("on");
      $(".light_btn li a").removeClass();
      $(".light_btn li").eq(1).find("a").addClass("on");
    } else if (ht >= 750 && ht < 2000) {
      $(".light_btn li").removeClass();
      $(".light_btn li").eq(2).addClass("on");
      $(".light_btn li a").removeClass();
      $(".light_btn li").eq(2).find("a").addClass("on");
    } else if (ht >= 2000 && ht < 3300) {
      $(".light_btn li").removeClass();
      $(".light_btn li").eq(3).addClass("on");
      $(".light_btn li a").removeClass();
      $(".light_btn li").eq(3).find("a").addClass("on");
    } else if (ht >= 3300 && ht < 4600) {
      $(".light_btn li").removeClass();
      $(".light_btn li").eq(4).addClass("on");
      $(".light_btn li a").removeClass();
      $(".light_btn li").eq(4).find("a").addClass("on");
    } else if (ht >= 4600 && ht < 5800) {
      $(".light_btn li").removeClass();
      $(".light_btn li").eq(5).addClass("on");
      $(".light_btn li a").removeClass();
      $(".light_btn li").eq(5).find("a").addClass("on");
    } else if (ht >= 5800 && ht < 7000) {
      $(".light_btn li").removeClass();
      $(".light_btn li").eq(6).addClass("on");
      $(".light_btn li a").removeClass();
      $(".light_btn li").eq(6).find("a").addClass("on");
    }
  });
});
