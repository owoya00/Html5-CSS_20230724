$(function () {
  $("html,body").stop().animate({ scrollTop: 0 }, 1500);
  $(window).scroll(function () {
    let scroll = $(this).scrollTop();
    console.log(scroll);
    for (let i = 0; i < 5; i++) {
      $("section article")
        .eq(i)
        .css({
          transform: "translateZ(" + parseInt(-5000 * i + scroll) + "px)",
        });
      if (scroll >= i * 5000 && scroll < (i + 1) * 5000) {
        $(".nav li").removeClass("on");
        $(".nav li").eq(i).addClass("on");
        $("section article").removeClass("on");
        $("section article").eq(i).addClass("on");
      }
    }
  });
  $(".nav li").click(function () {
    let i = $(this).index();
    $("html,body")
      .stop()
      .animate({ scrollTop: i * 5000 }, 1500);
  });
});
