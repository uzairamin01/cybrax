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

gsap.registerPlugin(ScrollTrigger);

let mm = gsap.matchMedia();

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
  const tl = gsap.timeline();

  tl.from('#nav', { y: -80, duration: 0.5 })
  tl.from('.hero-content h1', { y: -40, opacity: 0, duration: 0.7 })
  tl.from('.hero-content p', { y: 25, opacity: 0, duration: 0.6 })

  gsap.from('.first-sec', {
    y: 40,
    opacity: 0,
    duration: 0.7,
    scrollTrigger: { trigger: '#main-first', start: 'top 85%' }
  });

  gsap.from('.exper, .proj, .satis', {
    x: 40,
    opacity: 0,
    duration: 0.6,
    stagger: 0.15,
    scrollTrigger: { trigger: '.top-right', start: 'top 85%' }
  });

  gsap.from('#sec1, #sec2, #sec6, #sec5', {
    y: 40,
    opacity: 0,
    duration: 0.7,
    stagger: 0.15,
    scrollTrigger: { trigger: '.cd', start: 'top 85%' }
  });

  gsap.from('#sec1 .left, #sec2 .right', {
    x: -60,
    opacity: 0,
    duration: 0.6,
    scrollTrigger: { trigger: '#sec1, #sec2', start: 'top 85%' }
  });

  gsap.from('#sec1 .right, #sec2 .left', {
    x: 60,
    opacity: 0,
    duration: 0.6,
    scrollTrigger: { trigger: '#sec1, #sec2', start: 'top 85%' }
  });

  gsap.from('#sec6 .left, #sec6 .right, #sec5 .left, #sec5 .right', {
    scale: 0.9,
    opacity: 0,
    duration: 0.6,
    ease: 'back.out(1.5)',
    stagger: 0.1,
    scrollTrigger: { trigger: '#sec6, #sec5', start: 'top 85%' }
  });
});

mm.add("(max-width: 768px)", () => {
  const tl = gsap.timeline();

  tl.from('#nav', { y: -60, duration: 0.4 })
  tl.from('.hero-content h1', { y: -30, opacity: 0, duration: 0.6 })
  tl.from('.hero-content p', { y: 20, opacity: 0, duration: 0.5 })

  gsap.from('.first-sec', {
    y: 30,
    opacity: 0,
    duration: 0.6,
    scrollTrigger: { trigger: '#main-first', start: 'top 90%' }
  });

  gsap.from('.exper, .proj, .satis', {
    x: 30,
    opacity: 0,
    duration: 0.5,
    stagger: 0.1,
    scrollTrigger: { trigger: '.top-right', start: 'top 90%' }
  });

  gsap.from('#sec1, #sec2, #sec6, #sec5', {
    y: 30,
    opacity: 0,
    duration: 0.6,
    stagger: 0.15,
    scrollTrigger: { trigger: '.cd', start: 'top 90%' }
  });

  gsap.from('#sec1 .left, #sec2 .right', {
    x: -40,
    opacity: 0,
    duration: 0.5,
    scrollTrigger: { trigger: '#sec1, #sec2', start: 'top 90%' }
  });

  gsap.from('#sec1 .right, #sec2 .left', {
    x: 40,
    opacity: 0,
    duration: 0.5,
    scrollTrigger: { trigger: '#sec1, #sec2', start: 'top 90%' }
  });

  gsap.from('#sec6 .left, #sec6 .right, #sec5 .left, #sec5 .right', {
    scale: 0.95,
    opacity: 0,
    duration: 0.5,
    ease: 'back.out(1.3)',
    stagger: 0.1,
    scrollTrigger: { trigger: '#sec6, #sec5', start: 'top 90%' }
  });
});


function animateCounter(element, targetValue, duration) {
  const obj = { value: 0 };
  gsap.to(obj, {
    value: targetValue,
    duration: duration,
    ease: 'power2.out',
    onUpdate: function () {
      element.setAttribute('data-count', Math.round(obj.value) + '+');
    }
  });
}

gsap.timeline({
  scrollTrigger: {
    trigger: '.top-right',
    start: 'top 80%'
  }
})
  .call(() => animateCounter(document.querySelector('.exper'), 10, 1.2))
  .call(() => animateCounter(document.querySelector('.proj'), 150, 1.5))
  .call(() => animateCounter(document.querySelector('.satis'), 110, 1.3));

