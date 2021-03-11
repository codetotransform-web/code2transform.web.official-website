var swiper = new Swiper('.swiper-container1', {
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


var swiper = new Swiper('.swiper-container2', {
    slidesPerView: 3,
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
    








// $("section").SnapScroll({

//     // Add classes to elements
//     classes:true,                   
  
//     // Class applied to snap point elements
//     classSnap:"snap-scroll",              
  
//     // Class applied to a snap point element when within the window
//     classVisible:"snap-scroll-visible",         
  
//     // Class applied to a snap point element when snapped
//     classActive:"snap-scroll-active",         
  
//     // Use element id in hash
//     hashes:false,                   
  
//     // Delay between scroll events needed to trigger scroll action
//     scrollDelay:300,                  
  
//     // Interval used for wheel to trigger scroll action
//     wheelInterval:1000,                 
  
//     // The amount of time it takes to animate to a snap point
//     animateDuration:250,       
  
//     // The amount of time to wait after an animation is complete before scrolling can be triggered         
//     animateTimeBuffer:100,                
  
//     // Snap to the top of page regardless of there being an element
//     snapTop:true,           
  
//     // Snap to the bottom of page regardless of there being an element        
//     snapBottom:true,                  
  
//     // Extra snap points not tied to an element
//     snaps:[],                     
  
//     // Deviation in milliseconds from the average needed to separate wheel events
//     maxWheelDeviation:100       
  
//   });