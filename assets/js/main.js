$(document).ready(function () {
  // home slider

  var swiper = new Swiper('.home-slider', {
    effect: 'fade',
    speed: 2000,
    autoplay: {
      delay: 5000,
    },
    loop: true,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  // chisiamo team slider

  var swiper = new Swiper('.chi-team-slider', {
    autoplay: true,
    loop: true,
    effect: 'fade',
    speed: 2000,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
    },
  });

  // cambi slider automotive
  var swiper = new Swiper('.cambi-slider', {
    autoplay: true,
    loop: true,
    effect: 'fade',
    speed: 2000,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
    },
  });

  // mobility slider
  var swiper = new Swiper('.mobility-slider', {
    autoplay: true,
    loop: true,
    effect: 'fade',
    speed: 2000,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
    },
  });

  // motori slider
  var swiper = new Swiper('.motori-slider', {
    autoplay: true,
    loop: true,
    effect: 'fade',
    speed: 2000,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
    },
  });

  // motori slider
  var swiper = new Swiper('.carrozzeria-slider', {
    autoplay: true,
    loop: true,
    effect: 'fade',
    speed: 2000,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
    },
  });

  // motori slider
  var swiper = new Swiper('.pompe-slider', {
    autoplay: true,
    loop: true,
    effect: 'fade',
    speed: 2000,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
    },
  });

  // navbar sticky

  $(window).scroll(function () {
    var navbar = $('#main-header');

    if ($(window).scrollTop() >= 110) {
      navbar.addClass('sticky');
    } else {
      navbar.removeClass('sticky');
    }
  });

  // mobile sidebar show hide
  $(document).on('click', '#openButton', function () {
    $('#targetElement').removeClass('sidebar-hide');
  });
  $(document).on('click', '#closeButton', function () {
    $('#targetElement').addClass('sidebar-hide');
  });

  // mobile menu dropdown show hide with icon

  var previousClickedElement = null;

  $('.mobile-menu-items .has-children ul.sub-menu').hide();

  $('.mobile-menu-items .has-children').each(function () {
    $(this).click(function () {
      if (previousClickedElement !== null && previousClickedElement !== this) {
        $(previousClickedElement).removeClass('show');
        $(previousClickedElement).find('ul.sub-menu').slideUp(150);
        $(previousClickedElement).find('.mean-expand').html('+');
      }

      $(this).toggleClass('show');

      var currentIcon = $(this).find('.mean-expand');
      if ($(currentIcon).html() === '-') {
        $(currentIcon).html('+');
      } else {
        $(currentIcon).html('-');
      }

      $(this).find('ul.sub-menu').slideToggle(150);

      previousClickedElement = this;
    });
  });

  // automotive sub category menu active

  var menuitemSelector = '.title-box ul li a';

  $(document).on('click', menuitemSelector, function () {
    $(menuitemSelector).removeClass('active');

    $(this).addClass('active');
  });

  // scroll to top for all pages

  $('body').append(
    '<button id="scrollToTopBtn"><i class="fa-light fa-arrow-up"></i></button>'
  );

  $('#scrollToTopBtn').hide();

  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('#scrollToTopBtn').fadeIn();
    } else {
      $('#scrollToTopBtn').fadeOut();
    }
  });

  $('#scrollToTopBtn').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 'slow');
  });

  // contatti form validation

  const forms = $('.needs-validation');

  forms.on('submit', function (event) {
    if (!this.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    }

    $(this).addClass('was-validated');
  });

  // file name on custom input type for connoi page

  $('#cvfile').on('change', function () {
    var files = $(this).prop('files');
    var fileNameDisplay = $('#fileNameDisplay');

    if (files.length > 0) {
      var fileName = files[0].name;
      fileNameDisplay.text(fileName);
    } else {
      fileNameDisplay.text('Nessun file selezionato');
    }
  });

  // video pop up
 
});
