const swiper = new Swiper('.swiper', {
  // Optional parameters
      slidesPerView: 2,
      spaceBetween: 22,
  //direction: 'vertical',
  loop: true,
  // slidesPerView: 1,

  // Navigation arrows
  navigation: {
    nextEl: '.review-next',
    prevEl: '.review-prev',
  },

  
});

const menuBtn = document.querySelector('.menu__btn');
const menuList = document.querySelector('.menu__list');

menuBtn.addEventListener('click', () => {
  menuList.classList.toggle('menu--open');
})

const swiper2 = new Swiper('.team-slider', {
  // slidesPerView: 2,
  // spaceBetween: 20,
  // loop: true,
  
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },
});

// Додати цю частину коду

if (window.innerWidth <= 768) {
  swiper2.init();
} else {
  swiper2.destroy();
}

window.addEventListener('resize', () => {
  if (window.innerWidth <= 768) {
    swiper2.init();
  } else {
    swiper2.destroy();
  }
});