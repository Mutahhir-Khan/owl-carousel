$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 500,
  nav: true,
  //   autoplay: true,
  smartSpeed: 600,
  //   autoplayTimeout: 1000,
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



var clickElements = document.querySelector(".circle");
// clickElements.insertAdjacentHTML(
//   "beforebegin",
//   `<button type="button" role="presentation" class="owl-next"><span aria-label="Next">›</span></button>`
// );
// console.log(clickElements)

var desktopContainer = document.querySelector(".desktop-container");
var carouselImagesChanger = () => {
  console.log(window.innerWidth);
  if (window.innerWidth < 600) {
    // desktopContainer.style.display = "none";
  } else {
    // desktopContainer.style.display = "block";
  }
  //   if(window.innerWidth)
};

window.addEventListener("resize", carouselImagesChanger);
window.onload = () => carouselImagesChanger();
