fetch('/components/nav.html')
  .then(res => res.text())
  .then(data => {
    document.querySelector("nav").innerHTML = data;
    initNav();
  });

function initNav() {
  const menu = document.querySelector('.mobile-res');
  const openBtn = document.querySelector('.right-btn button');
  const closeBtn = document.querySelector('.mobile-res .top i');

  if (openBtn && closeBtn && menu) {
    openBtn.addEventListener('click', () => {
      menu.classList.add("show");
      document.body.style.overflow = "hidden";
    });

    closeBtn.addEventListener('click', () => {
      menu.classList.remove("show");
      document.body.style.overflow = "";
    });
  }
}

window.addEventListener('scroll', function () {
  const nav = document.querySelector('nav');
  if (window.scrollY > window.innerHeight * 0.3) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

fetch('/components/footer.html')
  .then(req => req.text())
  .then(data => {
    document.querySelector('#footer').innerHTML = data
  });

let mm = gsap.matchMedia();
let tl = gsap.timeline();

mm.add("(min-width: 1025px)", () => {
  const tl = gsap.timeline();

  tl.from('#nav', { y: -100, duration: 0.6 })
  tl.from('.hero-content h1', { y: -50, opacity: 0, duration: 0.8 })
  tl.from('.hero-content p', { y: 30, opacity: 0, duration: 0.7 })

  gsap.from('.first-sec', {
    y: 50,
    opacity: 0,
    duration: 0.8,
    scrollTrigger: {
      trigger: '#main-first',
      start: 'top 80%'
    }
  });

  gsap.from('.first-sec h3', {
    x: -50,
    opacity: 0,
    duration: 0.6,
    scrollTrigger: { trigger: '#main-first', start: 'top 80%' }
  });

  gsap.from('.first-sec h1', {
    y: -40,
    opacity: 0,
    duration: 0.6,
    scrollTrigger: { trigger: '#main-first', start: 'top 80%' }
  });

  gsap.from('.first-sec p', {
    y: 30,
    opacity: 0,
    duration: 0.6,
    scrollTrigger: { trigger: '#main-first', start: 'top 80%' }
  });

  gsap.from('.exper, .proj, .satis', {
    x: 50,
    opacity: 0,
    duration: 0.6,
    stagger: 0.15,
    scrollTrigger: { trigger: '.top-right', start: 'top 80%' }
  });

  gsap.from('#sec1', {
    y: 50,
    opacity: 0,
    duration: 0.8,
    scrollTrigger: { trigger: '#sec1', start: 'top 80%' }
  });
  gsap.from('#sec1 .left', {
    x: -80,
    opacity: 0,
    duration: 0.7,
    scrollTrigger: { trigger: '#sec1', start: 'top 80%' }
  });
  gsap.from('#sec1 .right', {
    x: 80,
    opacity: 0,
    duration: 0.7,
    scrollTrigger: { trigger: '#sec1', start: 'top 80%' }
  });

  gsap.from('#sec2', {
    y: 50,
    opacity: 0,
    duration: 0.8,
    scrollTrigger: { trigger: '#sec2', start: 'top 80%' }
  });
  gsap.from('#sec2 .left', {
    x: 80,
    opacity: 0,
    duration: 0.7,
    scrollTrigger: { trigger: '#sec2', start: 'top 80%' }
  });
  gsap.from('#sec2 .right', {
    x: -80,
    opacity: 0,
    duration: 0.7,
    scrollTrigger: { trigger: '#sec2', start: 'top 80%' }
  });

  gsap.from('#sec6', {
    y: 50,
    opacity: 0,
    duration: 0.8,
    scrollTrigger: { trigger: '#sec6', start: 'top 80%' }
  });
  gsap.from('#sec6 .left, #sec6 .right', {
    scale: 0.85,
    opacity: 0,
    duration: 0.7,
    ease: 'back.out(1.5)',
    stagger: 0.1,
    scrollTrigger: { trigger: '#sec6', start: 'top 80%' }
  });

  gsap.from('#sec5', {
    y: 50,
    opacity: 0,
    duration: 0.8,
    scrollTrigger: { trigger: '#sec5', start: 'top 80%' }
  });
  gsap.from('#sec5 .left, #sec5 .right', {
    scale: 0.85,
    opacity: 0,
    duration: 0.7,
    ease: 'back.out(1.5)',
    stagger: 0.1,
    scrollTrigger: { trigger: '#sec5', start: 'top 80%' }
  });
});

mm.add("(min-width: 769px) and (max-width: 1024px)", () => {
  tl.from('#nav', {
    y: -100,
    duration: 0.6,
  })
  
  tl.from('.hero-content h1', {
    y: -50,
    opacity: 0,
  })
  
  tl.from('.hero-content p', {
    y: 50,
    opacity: 0,
  })
});

mm.add("(max-width: 768px)", () => {
  tl.from('#nav', {
    y: -100,
    duration: 0.6,
  })
  
  tl.from('.hero-content h1', {
    y: -50,
    opacity: 0,
  })
  
  tl.from('.hero-content p', {
    y: 50,
    opacity: 0,
  })
});