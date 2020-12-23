var desktopContainer = document.querySelector(".desktop-container");
var mobileContainer = document.querySelector(".mobile-container")

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 500,
  nav: true,
  autoplay: true,
  smartSpeed: 600,
  autoplayTimeout: 10000,
  autoHeight: true,
  responsive: {
    0: { items: 1 },
    600: { items: 1 },
    1100: { items: 1 },
  },
  animateIn: 'fadeIn',
  animateOut: 'fadeOut'
});

var owl = $('.owl-carousel');
owl.owlCarousel();
// Go to the next item
$('.clickable').click(function() {
    owl.trigger('next.owl.carousel');
})
// Go to the previous item
// $('.customPrevBtn').click(function() {
//     // With optional speed parameter
//     // Parameters has to be in square bracket '[]'
//     owl.trigger('prev.owl.carousel', [300]);
// })

var carouselImagesChanger = () => {
  console.log(window.innerWidth);
  if (window.innerWidth < 768) {
    desktopContainer.style.display = "none";
    mobileContainer.style.display = "block"
  } else {
    desktopContainer.style.display = "block";  
    mobileContainer.style.display = "none"
  }
};

window.addEventListener("resize", carouselImagesChanger);
window.onload = () => carouselImagesChanger();
