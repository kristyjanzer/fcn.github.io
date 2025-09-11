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

