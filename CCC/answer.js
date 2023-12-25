$(document).ready(function () {
  // 功能1: 初始顯示學號、姓名、大頭照
  // 在這裡加入相應的學號和姓名

  // 功能2: 調整字體和顏色
  $("#btnFontColor").click(function () {
    $("#studentId, #studentName").css({
      "font-size": "20px",
      "color": "blue"
    });
  });

  // 功能3: 調整大頭照樣式
  $("#btnPhotoStyle").click(function () {
    $("#selfie").css({
      "border-radius": "50%",
      "border": "2px solid red"
    });
  });

  // 功能4: 換圖
  $("#btnChangePhoto").click(function () {
    $("#selfie").attr("src", "new_photo.jpg");
  });

  // 功能5: 動畫切換
  $("#btnAnimate").click(function () {
    $("#selfie").fadeOut(1000, function () {
      $(this).attr("src", "new_photo.jpg").fadeIn(1000);
    });
  });
});