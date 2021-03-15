var swiper = new Swiper('.swiper-container_whole_page', {
  direction: 'vertical',
  mousewheel: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
swiper.params.mousewheel.releaseOnEdges = true;



var swiper = new Swiper('.swiper-container_services', {
  direction: 'vertical',
  mousewheel: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
swiper.params.mousewheel.releaseOnEdges = true;



var swiper = new Swiper('.swiper-container_tech', {
  effect: 'cube',
  // grabCursor: true,
  mousewheel: true,
  // loop: true,
  cubeEffect: {
  shadow: true,
  slideShadows: true,
  shadowOffset: 20,
  shadowScale: 0.94,
  },
  // pagination: {
  //   el: '.swiper-pagination',
  // },
});
swiper.params.mousewheel.releaseOnEdges = true;



var client_slides_per_view = 3

if(window.matchMedia("(max-width: 400px)").matches){
  client_slides_per_view = 1;
}
else if(window.matchMedia("(max-width: 1100px)").matches){
  client_slides_per_view = 2;
}
var swiper = new Swiper('.swiper-container_client', {
  
  slidesPerView: client_slides_per_view,
  spaceBetween: 30,
  freeMode: true,
  loop: true,
  autoplay: {
      delay: 2500,
      disableOnInteraction: false,
  },
  // pagination: {
  //     el: '.swiper-pagination',
  //     clickable: true,
  // },
  // navigation: {
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev',
  // },
});
  









// var swiper = new Swiper('.swiper-container1', {
//   effect: 'cube',
//   // grabCursor: true,
//   mousewheel: true,
//   // loop: true,
//   cubeEffect: {
//   shadow: true,
//   slideShadows: true,
//   shadowOffset: 20,
//   shadowScale: 0.94,
//   },
//   // pagination: {
//   //   el: '.swiper-pagination',
//   // },
// });
// swiper.params.mousewheel.releaseOnEdges = true;