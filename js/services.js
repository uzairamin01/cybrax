fetch('/components/nav.html')
  .then(res => res.text())
  .then(data => {
    document.querySelector("nav").innerHTML = data;

    // Ab JS ko initialize karo
    initNav();
  });

// Function jo event listeners lagata hai
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
  if (window.scrollY > window.innerHeight * 0.3) { // 20% of viewport height
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

mm.add("(min-width: 1025px)", () => {
  const tl = gsap.timeline();

  tl.from('#nav', { y: -100, duration: 0.6 })
  tl.from('.bg h1', { y: -50, opacity: 0, duration: 0.8 })

  gsap.from('.web-dev', {
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    scrollTrigger: {
      trigger: '.web-dev',
      start: "top 80%",
      end: "bottom 20%",
    }
  });

  gsap.from('.web-dev .img', {
    scale: 0.8,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    scrollTrigger: {
      trigger: '.web-dev',
      start: "top 80%",
      end: "bottom 20%",
    }
  });

  gsap.from('.ui-ux', {
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    scrollTrigger: {
      trigger: '.ui-ux',
      start: "top 80%",
      end: "bottom 20%",
    }
  });

  gsap.from('.ui-ux .img', {
    scale: 0.8,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    scrollTrigger: {
      trigger: '.ui-ux',
      start: "top 80%",
      end: "bottom 20%",
    }
  });

  gsap.from('.seo', {
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    scrollTrigger: {
      trigger: '.seo',
      start: "top 80%",
      end: "bottom 20%",
    }
  });

  gsap.from('.seo .img', {
    scale: 0.8,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    scrollTrigger: {
      trigger: '.seo',
      start: "top 80%",
      end: "bottom 20%",
    }
  });

  gsap.from('.ecommerce', {
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    scrollTrigger: {
      trigger: '.ecommerce',
      start: "top 80%",
      end: "bottom 20%",
    }
  });

  gsap.from('.ecommerce .img', {
    scale: 0.8,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    scrollTrigger: {
      trigger: '.ecommerce',
      start: "top 80%",
      end: "bottom 20%",
    }
  });

  gsap.from('.mobile-app', {
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    scrollTrigger: {
      trigger: '.mobile-app',
      start: "top 80%",
      end: "bottom 20%",
    }
  });

  gsap.from('.mobile-app .img', {
    scale: 0.8,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    scrollTrigger: {
      trigger: '.mobile-app',
      start: "top 80%",
      end: "bottom 20%",
    }
  });

  gsap.from('.cloud', {
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    scrollTrigger: {
      trigger: '.cloud',
      start: "top 80%",
      end: "bottom 20%",
    }
  });

  gsap.from('.cloud .img', {
    scale: 0.8,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    scrollTrigger: {
      trigger: '.cloud',
      start: "top 80%",
      end: "bottom 20%",
    }
  });

});

mm.add("(min-width: 769px) and (max-width: 1024px)", () => {
  const tl = gsap.timeline();

  tl.from('#nav', { y: -80, duration: 0.5 })
  tl.from('.bg h1', { y: -40, opacity: 0, duration: 0.7 })

  gsap.from('.web-dev', {
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    scrollTrigger: {
      trigger: '.web-dev',
      start: "top 80%",
      end: "bottom 20%",
    }
  });

  gsap.from('.web-dev .img', {
    scale: 0.8,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    scrollTrigger: {
      trigger: '.web-dev',
      start: "top 80%",
      end: "bottom 20%",
    }
  });

  gsap.from('.ui-ux', {
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    scrollTrigger: {
      trigger: '.ui-ux',
      start: "top 80%",
      end: "bottom 20%",
    }
  });

  gsap.from('.ui-ux .img', {
    scale: 0.8,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    scrollTrigger: {
      trigger: '.ui-ux',
      start: "top 80%",
      end: "bottom 20%",
    }
  });

  gsap.from('.seo', {
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    scrollTrigger: {
      trigger: '.seo',
      start: "top 80%",
      end: "bottom 20%",
    }
  });

  gsap.from('.seo .img', {
    scale: 0.8,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    scrollTrigger: {
      trigger: '.seo',
      start: "top 80%",
      end: "bottom 20%",
    }
  });

  gsap.from('.ecommerce', {
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    scrollTrigger: {
      trigger: '.ecommerce',
      start: "top 80%",
      end: "bottom 20%",
    }
  });

  gsap.from('.ecommerce .img', {
    scale: 0.8,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    scrollTrigger: {
      trigger: '.ecommerce',
      start: "top 80%",
      end: "bottom 20%",
    }
  });

  gsap.from('.mobile-app', {
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    scrollTrigger: {
      trigger: '.mobile-app',
      start: "top 80%",
      end: "bottom 20%",
    }
  });

  gsap.from('.mobile-app .img', {
    scale: 0.8,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    scrollTrigger: {
      trigger: '.mobile-app',
      start: "top 80%",
      end: "bottom 20%",
    }
  });

  gsap.from('.cloud', {
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    scrollTrigger: {
      trigger: '.cloud',
      start: "top 80%",
      end: "bottom 20%",
    }
  });

  gsap.from('.cloud .img', {
    scale: 0.8,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    scrollTrigger: {
      trigger: '.cloud',
      start: "top 80%",
      end: "bottom 20%",
    }
  });
});

mm.add("(max-width: 768px)", () => {
  const tl = gsap.timeline();

  tl.from('#nav', { y: -60, duration: 0.4 })
  tl.from('.bg h1', { y: -30, opacity: 0, duration: 0.6 })

  gsap.from('.web-dev', {
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    scrollTrigger: {
      trigger: '.web-dev',
      start: "top 80%",
      end: "bottom 20%",
    }
  });

  gsap.from('.web-dev .img', {
    scale: 0.8,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    scrollTrigger: {
      trigger: '.web-dev',
      start: "top 80%",
      end: "bottom 20%",
    }
  });

  gsap.from('.ui-ux', {
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    scrollTrigger: {
      trigger: '.ui-ux',
      start: "top 80%",
      end: "bottom 20%",
    }
  });

  gsap.from('.ui-ux .img', {
    scale: 0.8,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    scrollTrigger: {
      trigger: '.ui-ux',
      start: "top 80%",
      end: "bottom 20%",
    }
  });

  gsap.from('.seo', {
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    scrollTrigger: {
      trigger: '.seo',
      start: "top 80%",
      end: "bottom 20%",
    }
  });

  gsap.from('.seo .img', {
    scale: 0.8,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    scrollTrigger: {
      trigger: '.seo',
      start: "top 80%",
      end: "bottom 20%",
    }
  });

  gsap.from('.ecommerce', {
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    scrollTrigger: {
      trigger: '.ecommerce',
      start: "top 80%",
      end: "bottom 20%",
    }
  });

  gsap.from('.ecommerce .img', {
    scale: 0.8,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    scrollTrigger: {
      trigger: '.ecommerce',
      start: "top 80%",
      end: "bottom 20%",
    }
  });

  gsap.from('.mobile-app', {
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    scrollTrigger: {
      trigger: '.mobile-app',
      start: "top 80%",
      end: "bottom 20%",
    }
  });

  gsap.from('.mobile-app .img', {
    scale: 0.8,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    scrollTrigger: {
      trigger: '.mobile-app',
      start: "top 80%",
      end: "bottom 20%",
    }
  });

  gsap.from('.cloud', {
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    scrollTrigger: {
      trigger: '.cloud',
      start: "top 80%",
      end: "bottom 20%",
    }
  });

  gsap.from('.cloud .img', {
    scale: 0.8,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    scrollTrigger: {
      trigger: '.cloud',
      start: "top 80%",
      end: "bottom 20%",
    }
  });
});

