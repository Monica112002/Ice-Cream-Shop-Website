let navbar = document.querySelector('.header .navbar');
let menuBtn = document.querySelector('#menu-btn');

menuBtn.onclick = () =>{
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

var swiper = new Swiper(".home-slider", {
  loop:true,
  centeredSlides:true,
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".ice-slider", {
  grabCursor:true,
  loop:true,
  centeredSlides:true,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    700: {
      slidesPerView: 2,
    },
    1000: {
      slidesPerView: 3,
    },
  },
});

let previewContainer = document.querySelector('.icecream-preview-container');
let previewBox = previewContainer.querySelectorAll('.icecream-preview');

document.querySelectorAll('.icecream .slide').forEach(icecream =>{
  icecream.onclick = () =>{
    previewContainer.style.display = 'flex';
    let name = icecream.getAttribute('data-name');
    previewBox.forEach(preview =>{
       let target = preview.getAttribute('data-target');
      if(name==target){
        preview.classList.add('active');
      }
    });
  };
});

previewContainer.querySelector('#close-preview').onclick = () =>{
  previewContainer.style.display = 'none';
  previewBox.forEach(close =>{
    close.classList.remove('active');
  });
};

var swiper = new Swiper(".menu-slider", {
  grabCursor:true,
  loop:true,
  autoHeight:true,
  centeredSlides:true,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiper = new Swiper(".blogs-slider", {
  grabCursor:true,
  loop:true,
  centeredSlides:true,
  autoHeight:true,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    700: {
      slidesPerView: 2,
    },
    1000: {
      slidesPerView: 3,
    },
  },
});
