var menu = ['Slide 1', 'Slide 2', 'Slide 3']
var mySwiper = new Swiper ('.swiper-container', {
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
			clickable: true,
        renderBullet: function (index, className) {
          return '';
        },
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })