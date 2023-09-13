$(function () {
  $(".main_value li").css({ opacity: "0" });

  $(".lush_value_list li").hover(
    function () {
      let i = $(this).index();
      console.log(i);
      $(".main_value li").eq(i).siblings().css({ opacity: "0" });
      $(".main_value li").eq(i).css({ opacity: "1" });
      $(".lush_value_list li").eq(i).siblings().addClass("on");
    },
    function () {
      $(".main_value li").css({ opacity: "0" });
      $(".lush_value_list li").removeClass("on");
    }
  );
});
