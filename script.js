/* MENU  */

const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle')

/*  Menu show - hidden  */

navToggle.addEventListener('click', ()=> {
    navMenu.classList.toggle('show-menu');
    navToggle.classList.toggle('animate-toggle')
})

/*  Remove Menu Mobile  */

const navLink = document.querySelectorAll('.nav-link');

const linkAction = () => {
  const navMenu = document.getElementById('nav-menu');

  navToggle.classList.remove('animate-toggle');
  navMenu.classList.remove('show-menu')
};

navLink.forEach((n) => n.addEventListener('click', linkAction));

/* Change background header */

const scrollHeader = () => {
  const header = document.getElementById('header')

  this.scrollY >= 20 
  ? header.classList.add('bg-header') 
  : header.classList.remove('bg-header');
}

window.addEventListener('scroll', scrollHeader)

/*  Scroll Sections Active Link  */
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
    sectionTop = current.offsetTop - 58,
    sectionId = current.getAttribute('id'),
    sectionsClass = document.querySelector('.nav-menu a[href*=' + sectionId + ']')
  
    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionsClass.classList.add('active-link');
    } else {
      sectionsClass.classList.remove('active-link');
    }
  });
};

window.addEventListener('scroll', scrollActive);


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
        768: {
          slidesPerView: 2,
          },
        1023: {
          slidesPerView: 3,          
        },
      },
});