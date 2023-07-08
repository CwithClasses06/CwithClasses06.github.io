
(function() {
  "use strict";

  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }


  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }


  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }


  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

 
  const scrollto = (el) => {
    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos,
      behavior: 'smooth'
    })
  }





  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

 
  on('click', '.mobile-nav-toggle', function(e) {
    select('body').classList.toggle('mobile-nav-active')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

 
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let body = select('body')
      if (body.classList.contains('mobile-nav-active')) {
        body.classList.remove('mobile-nav-active')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)


  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  
  const typed = select('.typed')
  if (typed) {
    let typed_strings = typed.getAttribute('data-typed-items')
    typed_strings = typed_strings.split(',')
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 40,
      backSpeed: 50,
      backDelay: 2000
    });
  }

 
  let skilsContent = select('.skills-content');
  if (skilsContent) {
    new Waypoint({
      element: skilsContent,
      offset: '80%',
      handler: function(direction) {
        let progress = select('.progress .progress-bar', true);
        progress.forEach((el) => {
          el.style.width = el.getAttribute('aria-valuenow') + '%'
        });
      }
    })
  }




  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

 
  new PureCounter();

 



})()




const portfolioItem1 = document.querySelector('.portfolio-item:nth-child(1)');
const portfolioImage1 = portfolioItem1.querySelector('.projectimg');

portfolioItem1.addEventListener('mouseenter', function() {
  portfolioImage1.src = 'assets/img/projects/paradiseph1.gif';
});

portfolioItem1.addEventListener('mouseleave', function() {
  portfolioImage1.src = 'assets/img/projects/paradiseph1.png';
});

const portfolioItem2 = document.querySelector('.portfolio-item:nth-child(2)');
const portfolioImage2 = portfolioItem2.querySelector('.projectimg');

portfolioItem2.addEventListener('mouseenter', function() {
  portfolioImage2.src = 'assets/img/projects/caveman.gif';
});

portfolioItem2.addEventListener('mouseleave', function() {
  portfolioImage2.src = 'assets/img/projects/caveman1.png';
});


const portfolioItemVideo = document.querySelector('.portfolio-item:nth-child(3) .projectvideo');

portfolioItemVideo.addEventListener('click', function() {
  if (portfolioItemVideo.paused) {
    portfolioItemVideo.play();
  } else {
    portfolioItemVideo.pause();
    portfolioItemVideo.currentTime = 0;
  }
});


const portfolioItemVideo1 = document.querySelector('.portfolio-item:nth-child(4) .projectvideo');
const thumbnailImage = document.querySelector('.portfolio-item:nth-child(4) .thumbnail-img');

portfolioItemVideo1.addEventListener('click', function() {
  if (portfolioItemVideo1.paused) {
    portfolioItemVideo1.play();
    thumbnailImage.style.opacity = 0;
  } else {
    portfolioItemVideo1.pause();
    portfolioItemVideo1.currentTime = 0;
    thumbnailImage.style.opacity = 1;
  }
});

const portfolioItem3 = document.querySelector('.portfolio-item:nth-child(5)');
const portfolioImage3 = portfolioItem3.querySelector('.projectimg');

portfolioItem3.addEventListener('mouseenter', function() {
  portfolioImage3.src = 'assets/img/projects/VR.gif';
});

portfolioItem3.addEventListener('mouseleave', function() {
  portfolioImage3.src = 'assets/img/projects/VR.png';
});



const imageWrapper = document.querySelector('.portfolio-item:nth-child(6) .image-wrapper');
const fileUrl = 'Panaginip_Ahren Eric Tiamzon.pdf';

imageWrapper.addEventListener('click', function() {
  const link = document.createElement('a');
  link.href = fileUrl;
  link.download = fileUrl.substring(fileUrl.lastIndexOf('/') + 1);
  link.click();
});

const audioWrapper = document.querySelector('.audio-image');
const audioPlayer = document.querySelector('.projectaudio');

audioWrapper.addEventListener('click', function() {
  if (audioWrapper.classList.contains('active')) {
    audioWrapper.classList.remove('active');
    audioPlayer.pause();
    audioPlayer.currentTime = 0;
  } else {
    audioWrapper.classList.add('active');
    audioPlayer.play();
    setTimeout(function() {
      audioWrapper.classList.remove('active');
      audioPlayer.pause();
      audioPlayer.currentTime = 0;
    }, 441000);
  }
});