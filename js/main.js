$(document).ready(function () {
  $('.popup__img').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    image: {
      verticalFit: false
    }
  });
  $('.direction__gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
      titleSrc: function (item) {
        return item.el.attr('data-title') + '<small>Основные направления деятельности</small>';
      }
    }
  });
  $(".telephone").inputmask({
    mask: "+375 (99) 999 99 99",
    clearIncomplete: true,
    greedy: false
  });
  $("submit__form").submit(function () { //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "/mail.php", //Change
      data: th.serialize()
    }).done(function () {
      $('._def').hide();
      $('._thx').show();
      setTimeout(function () {
        $('._thx').hide();
        $('._def').show();
        $('.popup__close').click();
        th.trigger("reset");
      }, 1000);
    });
    return false;
  });
  $("form").keydown(function () {
    if (event.keyCode == 13) {
      event.preventDefault();
    }
  });
});
// slick
$(document).ready(function () {
  $('.top__slider').slick({
    dots: false,
    infinite: true,
    speed: 2500,
    fade: true,
    autoplay: true,
      autoplaySpeed: 2000,
    cssEase: 'ease-in-out',
    nextArrow: '<div class="top__slider-next top__slider-arrow "></div>',
    prevArrow: '<div class="top__slider-prev top__slider-arrow"></div>',
  });
  $('.direction__slider').slick({
    dots: false,
    infinite: true,
    speed: 1500,
 
    autoplay: true,
      autoplaySpeed: 1600,
    cssEase: 'ease-in-out',
    nextArrow: '<div class="direction__slider-next direction__slider-arrow "></div>',
    prevArrow: '<div class="direction__slider-prev direction__slider-arrow"></div>',
      responsive: [
    {
      breakpoint: 1029,
      settings: {
        arrows: false,
      }
    } 
  ]
  });
  $('.reviews__slider').slick({
    dots: true,
    infinite: true,
     slidesToShow: 2,
    slidesToScroll: 1,
     cssEase: 'linear',
    nextArrow: '<div class="reviews__slider-next reviews__slider-arrow "></div>',
    prevArrow: '<div class="reviews__slider-prev reviews__slider-arrow"></div>',
    responsive: [
    {
      breakpoint: 1025,
      settings: {
    slidesToShow: 1,

        // arrows: false,
      }
    } 
  ]
  });
});
$(document).ready(function () {
    $(window).scroll(function () {
    slideShow();
    closeHide();
  });
  function slideShow(thisThing) {
    $(thisThing).parents('.option').find('.option-list').slideToggle();
  }
  $('.option-selected').on('click', function () {
    slideShow($(this));
  });
  $('.option-icon').on('click', function () {
    slideShow($(this));
  });

  function closeHide() {
    $('.option-list').slideUp();
    $('.find__form').removeClass('__show');
       $('.burger__menu').removeClass('__clicked');
   $('.menu').removeClass('__show');
  }
  $(document).keyup(function (e) {
    if (e.keyCode === 27) {
      closeHide();
    }
  });
  $('.option-list li').on('click', function () {
    var selectText = $(this).text();
    $('.option-selected').text(selectText);
    closeHide();
  });
  $('.option-list').hover(function () {}, function () {
    closeHide();
  });
  $('.find__form-icon').on('click', function () {
    $('.find__form').toggleClass('__show');
  });
  var counter = 0;
  $('.custom-number').each(function () {
    counter++;
    $(this).text(counter);
  });
 $('.burger__menu').on('click', function () {
   $('.burger__menu').toggleClass('__clicked');
   $('.menu').toggleClass('__show');
 });
  
});