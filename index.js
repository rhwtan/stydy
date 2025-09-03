//slick                                

$(function() {
  $('#slick-slide').slick({
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: true,
    dots: true, // ←これでドットが出ます
    fade: true,
    prevArrow: '<button type="button" class="my-arrow my-prev"><img src="←.png" alt="前へ"></button>',
    nextArrow: '<button type="button" class="my-arrow my-next"><img src="→.png" alt="次へ"></button>'
  });
});

$('.insta-slider').slick({
  slidesToShow: 5,      // 一度に表示する枚数（例：3枚）
  slidesToScroll: 1,
  arrows: true,
  dots: false,
  autoplay: false,
  prevArrow: '<button type="button" class="my-arrow my-prev"><img src="←.png" alt="前へ"></button>',
  nextArrow: '<button type="button" class="my-arrow my-next"><img src="→.png" alt="次へ"></button>'
});

$(function() {
$('#sry-slider').slick({
  slidesToShow: 2,
  // slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  dots: true,
  arrows: true,
  prevArrow: '<button type="button" class="my-arrow my-prev"><img src="←.png" alt="前へ"></button>',
  nextArrow: '<button type="button" class="my-arrow my-next"><img src="→.png" alt="次へ"></button>'
});
});

