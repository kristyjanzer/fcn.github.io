// Open menu
const menuItems = document.querySelectorAll('.header-menu-more');

menuItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.stopPropagation();

        const isActive = item.classList.contains('active');

        menuItems.forEach(i => i.classList.remove('active'));

        if (!isActive) {
            item.classList.add('active');
        }
    });

    document.addEventListener('click', (e) => {
        if (!item.contains(e.target)) {
            item.classList.remove('active');
        }
    });
});

// Burger Menu
const body = document.querySelector("body");
const header = document.querySelector(".header");
const burgerMenu = document.querySelector(".header .header-button-menu");
const burgerBody = document.querySelector(".header .header-button-menu__body");


burgerMenu.addEventListener("click", (e) => {
  header.classList.toggle("header-menu-open");
  burgerBody.classList.toggle("active");
  body.classList.toggle("lock");
  e.stopPropagation();


  if($('.header-menu-more').hasClass('active')) {
    $(".header").addClass("header-menu-open");
    $(".header .header-button-menu__body").addClass("active");
  }
});

$(".header-info").clone().appendTo(".header-button-menu__body");



// Content Ranks Slider
$('.content-ranks-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    infinite: false,
    responsive: [
      {
        breakpoint: 1400,
          settings: {
            dots: true,
            arrows: false,
            slidesToShow: 2,
            slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
          settings: {
            dots: true,
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
        },
      }
    ]
});




const $slider = $('.rating-info-slider');
const $pagination = $('.slider-pagination');
const visibleNumbers = 2; // Количество видимых номеров с каждой стороны

// Rating Info Slider
$('.rating-info-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    infinite: false,
    customPaging : function(slider, index) { 
        var num = index + 1;
        return '<span class="number">'+ num +'</span>';
    }
});


let totalSlides = $slider.slick("getSlick").slideCount;

 // Создаем пагинацию
 function createPagination(currentSlide) {
 $pagination.empty();
 
 // Определяем границы отображения
 const start = Math.max(1, currentSlide - visibleNumbers);
 const end = Math.min(totalSlides, currentSlide + visibleNumbers);
 
 // Добавляем точки в начале, если нужно
 if (start > 1) {
 $pagination.append('<span class="dots">...</span>');
 }
 
 // Добавляем номера
 for(let i = start; i <= end; i++) {
 createDot(i);
 }
 
 // Добавляем точки в конце, если нужно
 if (end < totalSlides) {
 $pagination.append('<span class="dots">...</span>');
 }
 }

 // Создаем отдельный элемент пагинации
 function createDot(number) {
 const $dot = $('<div class="dot">' + number + '</div>');
 $dot.click(function() {
 $slider.slick('slickGoTo', number - 1);
 updatePagination();
 });
 $pagination.append($dot);
 }

 // Обновляем пагинацию
 function updatePagination() {
 const currentSlide = $slider.slick("slickCurrentSlide") + 1;
 createPagination(currentSlide);
 updateActiveDot();
 }

 // Обновляем активный элемент
 function updateActiveDot() {
 const currentSlide = $slider.slick("slickCurrentSlide") + 1;
 $pagination.find('.dot').removeClass('active');
 const activeDot = $pagination.find('.dot').filter(function() {
 return parseInt($(this).text()) === currentSlide;
 });
 if (activeDot.length) {
 activeDot.addClass('active');
 }
 }

 // Инициализация
 updatePagination();

 // Обработка смены слайда
 $slider.on('afterChange', function(event, slick, currentSlide) {
 updatePagination();
 });

 // Обновление при изменении количества слайдов
 $slider.on('init reInit', function() {
 totalSlides = $slider.slick("getSlick").slideCount;
 updatePagination();
 });

 // Обработка ошибок
 $slider.on('error', function(message) {
 console.error('Slick error:', message);
 });