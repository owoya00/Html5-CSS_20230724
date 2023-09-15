$(function () {
  let x_posi = 0;
  let y_posi = 0;
  let x_current = -50;
  let y_current = -50;
  let masksize = 50;
  let size_current = 0;
  let acc = 0.1;
  //acc 속도값
  let acc2 = 0.15;

  $(document).mousemove(function (e) {
    x_posi = e.pageX;
    y_posi = e.pageY;
    calEase();
  });
  function calEase() {
    x_current = x_current + (x_posi - x_current) * acc;
    // 마우스 움직일때 따라다니는 동그라미의 x좌표 속도
    y_current = y_current + (y_posi - y_current) * acc;
    size_current = size_current + (masksize - size_current) * acc2;
    $(".maskLayer").css({
      "--mask-size": size_current + "px",
      "--mask-x": x_current + "px",
      "--mask-y": y_current + "px",
    });
  }
  $(".hoverLayer").hover(
    function () {
      masksize = 150;
    },
    function () {
      masksize = 50;
    }
  );
});
