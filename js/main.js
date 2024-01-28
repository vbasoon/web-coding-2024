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