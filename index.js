var desktopContainer = document.querySelector(".desktop-container");
var mobileContainer = document.querySelector(".mobile-container")

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 500,
  nav: true,
  // navText:["",""],
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
  animateOut: 'fadeOut',
});

var navTextChanger = (innerWidth) => {
  if(innerWidth < 768) {
    $(".owl-carousel").owlCarousel({
      loop: true,
      margin: 500,
      nav: true,
      navText:[" "," "],
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
      animateOut: 'fadeOut',
    });
    console.log($(".owl-carousel").owlCarousel())
  }
}

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
    navTextChanger(window.innerWidth)
  } else {
    desktopContainer.style.display = "block";  
    mobileContainer.style.display = "none"
  }
};

window.addEventListener("resize", carouselImagesChanger);
window.onload = () => carouselImagesChanger();

// LOADER -----------------------------------------------
window.addEventListener("load", function () {
  const loader = document.querySelector(".loader");
  const loaderImg = document.querySelector(".loader img");
  loader.className += " hidden"; // class "loader hidden"
    loader.style.height = 0
    loader.style.width = 0
    loaderImg.style.width = 0
    loaderImg.style.height = 0
});