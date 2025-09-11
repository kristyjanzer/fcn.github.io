// Open menu
$(function() {
    $('.header-menu-more').click(function() {
      $(this).toggleClass('active');
    });
});

// // Burger Menu
// const body = document.querySelector("body");
// const header = document.querySelector(".header");
// const burgerMenu = document.querySelector(".header .header-button-menu");
// const burgerBody = document.querySelector(".header .header-button-menu__body");


// burgerMenu.addEventListener("click", (e) => {
//   header.classList.toggle("header-info-open");
//   burgerBody.classList.toggle("active");
//   body.classList.toggle("lock");
//   e.stopPropagation();


//   if($('.header-menu-more').hasClass('active')) {
//     $(".header").addClass("header-info-open");
//     $(".header .header-button-menu__body").addClass("active");
//   }
// });

// $(".header-info").clone().appendTo(".header-button-menu__body");
