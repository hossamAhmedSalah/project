window.addEventListener("load",function(){
    "use strict";

    const slide = document.querySelectorAll(".slide"); // nodeList === Array
    const buttonLeft = document.querySelector(".slider-btn--left");
    const buttonRight = document.querySelector(".slider-btn--right");
    
    let currentSlide = 0;
    let maximumSlide = slide.length - 1;
    
    slide.forEach(function (slide, i) {
      slide.style.transform = `translateX(${100 * i}%)`;
      // 0% 100% 200% 300%
    });
    
    // setInterval(function () {
    //   currentSlide === maximumSlide ? (currentSlide = 0) : currentSlide++;
    
    //   if (currentSlide >= maximumSlide) return;
    
    //   slide.forEach(function (slide, i) {
    //     slide.style.transform = `translateX(${100 * (i - currentSlide)}%)`;
    //     // -100% 0% 100% 200%
    //   });
    // }, 2000);
    
    // Button Right
    buttonRight.addEventListener("click", function (e) {
      currentSlide === maximumSlide ? (currentSlide = 0) : currentSlide++;
    
      slide.forEach(function (slide, i) {
        slide.style.transform = `translateX(${100 * (i - currentSlide)}%)`;
        // -100% 0% 100% 200%
      });
    });
    
    // Button left
    buttonLeft.addEventListener("click", function (e) {
      currentSlide === 0 ? (currentSlide = maximumSlide) : currentSlide--;
    
      slide.forEach(function (slide, i) {
        slide.style.transform = `translateX(${100 * (i - currentSlide)}%)`;
        // 100% 0% 100% 200%
      });
    });
});