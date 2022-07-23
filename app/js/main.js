$(function () {
  var mixer = mixitup(".popular__items");

  $(".reviews__items").slick({
    dots: true,
    prevArrow: $(".slider__arrows-btn--left"),
    nextArrow: $(".slider__arrows-btn--right"),
    appendDots: $(".slider__items"),
  });

});
