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

gsap.registerPlugin(ScrollTrigger);

let mm = gsap.matchMedia();

mm.add("(min-width: 1025px)", () => {
  const tl = gsap.timeline();
  
  tl.from('#nav', { y: -100, duration: 0.6 })
  tl.from('.text h1', { y: -50, opacity: 0, duration: 0.8 })
  tl.from('.text p', { y: -30, opacity: 0, duration: 0.8, delay: 0.2 })

  gsap.from('.form-cont', {
    y: 50,
    opacity: 0,
    duration: 0.8,
    scrollTrigger: {
      trigger: '.form-cont',
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse"
    }
  });

  gsap.from('.link a', {
    scale: 0,
    opacity: 0,
    duration: 0.6,
    stagger: 0.1,
    scrollTrigger: {
      trigger: '.link',
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse"
    }
  });

  gsap.from('iframe', {
    scale: 0.9,
    opacity: 0,
    duration: 0.8,
    scrollTrigger: {
      trigger: 'iframe',
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse"
    }
  });
});

mm.add("(min-width: 769px) and (max-width: 1024px)", () => {
  const tl = gsap.timeline();
  
  tl.from('#nav', { y: -80, duration: 0.5 })
  tl.from('.text h1', { y: -40, opacity: 0, duration: 0.7 })
  tl.from('.text p', { y: -30, opacity: 0, duration: 0.7, delay: 0.2 })

  gsap.from('.form-cont', {
    y: 40,
    opacity: 0,
    duration: 0.7,
    scrollTrigger: {
      trigger: '.form-cont',
      start: "top 80%",
      toggleActions: "play none none reverse"
    }
  });

  gsap.from('.link a', {
    scale: 0.8,
    opacity: 0,
    duration: 0.6,
    stagger: 0.1,
    scrollTrigger: {
      trigger: '.link',
      start: "top 80%",
      toggleActions: "play none none reverse"
    }
  });
});

mm.add("(max-width: 768px)", () => {
  const tl = gsap.timeline();
  
  tl.from('#nav', { y: -60, duration: 0.4 })
  tl.from('.text h1', { y: -30, opacity: 0, duration: 0.6 })
  tl.from('.text p', { y: -30, opacity: 0, duration: 0.6, delay: 0.1 })

  gsap.from('.form-cont', {
    y: 30,
    opacity: 0,
    duration: 0.6,
    scrollTrigger: {
      trigger: '.form-cont',
      start: "top 85%",
      toggleActions: "play none none none"
    }
  });

  gsap.from('.link a', {
    scale: 0.9,
    opacity: 0,
    duration: 0.6,
    stagger: 0.1,
    scrollTrigger: {
      trigger: '.link',
      start: "top 85%",
      toggleActions: "play none none none"
    }
  });
});