/* MENU  */

const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle')

/*  Menu show - hidden  */

navToggle.addEventListener('click', ()=> {
    navMenu.classList.toggle('show-menu');
    navToggle.classList.toggle('animate-toggle')
}

)

/* MIXITUP Filter Publications */
var mixer = mixitup('.publication-container', {
  selectors: {
      target: '.mix '
  },
  animation: {
      duration: 300
  },
  load: {
    filter: '.twentyfour'  
  }
});

/* Active publications  */ 

const linkPublication = document.querySelectorAll('.publication-item');

function activePublication ( ) {
  linkPublication.forEach((a) => {
    a.classList.remove('active-publications');
  });

  this.classList.add('active-publications');
}

linkPublication.forEach((a) => {
  a.addEventListener('click', activePublication)
});


/* Research Swiper  */ 

var researchSwiper = new Swiper(".research-swiper", {
    spaceBetween: 32,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },

      breakpoints: {
        /*768*/250: {
          slidesPerView: 2,
          },
        /*1024: {
          slidesPerView: 3,          
        },*/
      },
});