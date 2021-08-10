$(document).ready(function () {
  $(".menuToggle").click(function () {
    $(this).toggleClass("active");
    $(".menuMobile").slideToggle(300, function () {
      if ($(this).css("display") === "none") {
        $(this).removeAttr("style");
      }
    });
  });
});
