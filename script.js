let swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
  });

  const items = document.querySelectorAll('.appear2');

  const active = function(entries){
      entries.forEach(entry => {
          if(entry.isIntersecting){
          entry.target.classList.add('inview2'); 
          }else{
              entry.target.classList.remove('inview2'); 
          }
      });
  }
  const io2 = new IntersectionObserver(active);
   for(let i=0; i < items.length; i++){
      io2.observe(items[i]);
   }
  