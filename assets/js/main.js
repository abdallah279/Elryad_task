// loader js
$(window).on("load", function () {
  $(".loader").delay(300).fadeOut(1000);
});

// Aos
aos_init();

function aos_init() {
  AOS.init({
    duration: 700,
    easing: "ease-in-out",
    once: true,
    mirror: false,
  });
}

// Header Fixed
let whatsapp_btn = document.querySelector(".whatsapp_btn");
// header.classList.toggle('scroll', window.scrollY > 48);

window.addEventListener("scroll", function () {
  whatsapp_btn.classList.toggle("active", window.scrollY > 100);
});

// SideBar
$(".side-open").on("click", function () {
  $(".links").addClass("active");
  $(".overlay-m").fadeIn(600);
});

$(".side-user-open").on("click", function () {
  $(".sidebar").addClass("active");
  $(".overlay-m").fadeIn(600);
});

$(".close").on("click", function () {
  $(".links").removeClass("active");
  $(".overlay-m").fadeOut(500);
});

$(".overlay-m").on("click", function () {
  $(".links").removeClass("active");
  $(".sidebar").removeClass("active");
  $(".main-search").removeClass("active");
  $(this).fadeOut(500);
});

// Placeholder links
$('a[href="#"]').on("click", function (e) {
  e.preventDefault();
});

// dropDown stopPropagation
$(".dropdown-menu").click(function (e) {
  e.stopPropagation();
});

if($('.num').length){
  $(".num").countUp();
}