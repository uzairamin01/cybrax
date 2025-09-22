let sections = [
    document.querySelector('.home-content'),
    document.querySelector('.home-content2')
]

let currentIndex = 0
setInterval(() => {
    sections[currentIndex].classList.remove('active')
    sections[currentIndex].classList.add('hide')

    currentIndex = (currentIndex + 1) % sections.length
    sections[currentIndex].classList.remove('hide')
    sections[currentIndex].classList.add('active')
}, 5000)


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


fetch("./components/footer.html")
    .then(response => response.text())
    .then(data =>
        document.querySelector("#footer").innerHTML = data);


window.addEventListener('scroll', function () {
    const nav = document.querySelector('nav');
    if (window.scrollY > window.innerHeight * 0.2) { // 20% of viewport height
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

const swiper = new Swiper('.swiper', {
  // Default Swiper parameters for all screen sizes
  slidesPerView: 1,
  spaceBetween: 10,
  // Breakpoints for responsive behavior
  breakpoints: {
    // When window width is >= 640px
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // When window width is >= 768px
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    // When window width is >= 1024px
    1025: {
      slidesPerView: 4,
      spaceBetween: 40,
      // You can also disable or enable modules based on breakpoints
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        enabled: true, // Enable navigation for larger screens
      },
      pagination: {
        enabled: false, // Disable pagination for larger screens
      },
    },
  },
});



let nextBtn = document.querySelector("#review .review-top .revtop-right .next").addEventListener("click", () => {
    swiper.slideNext()
})

let prevBtn = document.querySelector("#review .review-top .revtop-right .prev").addEventListener("click", () => {
    swiper.slidePrev()
})

const tl = gsap.timeline()

mm = gsap.matchMedia()
mm.add("(min-width: 1025px)", () => {
  tl.from('#nav', {
    y: -100,
    duration: 0.6,
  })
  
  tl.from('.home-content h1', {
    y: -50,
    opacity: 0,
  })
  
  tl.from('.home-content p', {
    y: -50,
    opacity: 0,
  })
  
  tl.from('.btns', {
    y: -50,
    opacity: 0,
  })
  
  gsap.from('.abouttop-left h1', {
    y: -50,
    opacity: 0,
    duration: 0.8,
    scrollTrigger: {
      trigger: '.abouttop-left h1',
      start: "top 80%",
      end: "bottom 20%",
    }
  })
  
  gsap.from('.abouttop-left p', {
    y: -50,
    opacity: 0,
    duration: 0.8,
    delay: 0.2,
    scrollTrigger: {
      trigger: '.abouttop-left p',
      start: "top 80%",
      end: "bottom 20%",
    }
  })
  
  gsap.from('.abouttop-right button', {
    scale: 0,
    opacity: 0,
    duration: 0.6,
    delay: 0.4,
    scrollTrigger: {
      trigger: '.abouttop-right',
      start: "top 80%",
      end: "bottom 20%",
    }
  })
  

  gsap.from('.about-card', {
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    scrollTrigger: {
      trigger: '.about-left',
      start: "top 80%",
      end: "bottom 20%",
    }
  })
  
  gsap.from('.about-right img', {
    scale: 0.8,
    opacity: 0,
    duration: 1,
    delay: 0.3,
    scrollTrigger: {
      trigger: '.about-right',
      start: "top 80%",
      end: "bottom 20%",
    }
  })
  
  gsap.from('.service-top h1', {
    y: -50,
    opacity: 0,
    duration: 0.8,
    scrollTrigger: {
      trigger: '.service-top h1',
      start: "top 80%",
      end: "bottom 20%",
    }
  })
  
  gsap.from('.service-top p', {
    y: -30,
    opacity: 0,
    duration: 0.8,
    delay: 0.2,
    scrollTrigger: {
      trigger: '.service-top p',
      start: "top 80%",
      end: "bottom 20%",
    }
  })
  
  gsap.from('.service-top button', {
    scale: 0,
    opacity: 0,
    duration: 0.6,
    delay: 0.4,
    scrollTrigger: {
      trigger: '.service-top button',
      start: "top 80%",
      end: "bottom 20%",
    }
  })
  
  gsap.from('.service-card', {
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    scrollTrigger: {
      trigger: '.service-cont',
      start: "top 80%",
      end: "bottom 20%",
    }
  })
  
  gsap.from('.revtop-left h5', {
    y: -30,
    opacity: 0,
    duration: 0.6,
    scrollTrigger: {
      trigger: '.revtop-left',
      start: "top 80%",
      end: "bottom 20%",
    }
  })
  
  gsap.from('.revtop-left h1', {
    y: -50,
    opacity: 0,
    duration: 0.8,
    delay: 0.2,
    scrollTrigger: {
      trigger: '.revtop-left h1',
      start: "top 80%",
      end: "bottom 20%",
    }
  })
  
  gsap.from('.revtop-right button', {
    scale: 0,
    opacity: 0,
    duration: 0.6,
    stagger: 0.1,
    delay: 0.4,
    scrollTrigger: {
      trigger: '.revtop-right',
      start: "top 80%",
      end: "bottom 20%",
    }
  })
  
  gsap.from('.swiper-slide', {
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.35,
    scrollTrigger: {
      trigger: '.swiper',
      start: "top 80%",
      end: "bottom 20%",
    }
  })
  
  gsap.from('.contact-left h1', {
    y: -50,
    opacity: 0,
    duration: 0.8,
    scrollTrigger: {
      trigger: '.contact-left h1',
      start: "top 80%",
      end: "bottom 20%",
    }
  })
  
  gsap.from('.contact-left p', {
    y: -30,
    opacity: 0,
    duration: 0.8,
    delay: 0.2,
    scrollTrigger: {
      trigger: '.contact-left p',
      start: "top 80%",
      end: "bottom 20%",
    }
  })
  
  gsap.from('.contact-links', {
    x: -50,
    opacity: 0,
    duration: 0.8,
    delay: 0.4,
    scrollTrigger: {
      trigger: '.contact-links',
      start: "top 80%",
      end: "bottom 20%",
    }
  })
  
  gsap.from('.contact-form', {
    x: 50,
    opacity: 0,
    duration: 0.8,
    delay: 0.2,
    scrollTrigger: {
      trigger: '.contact-form',
      start: "top 80%",
      end: "bottom 20%",
    }
  })
});

mm.add("(min-width: 769px) and (max-width: 1024px)", () => {
  const tlTablet = gsap.timeline();
  
  tlTablet.from('#nav', {
    y: -80,
    duration: 0.5,
  })
  
  tlTablet.from('.home-content h1', {
    y: -40,
    opacity: 0,
    duration: 0.6,
  })
  
  tlTablet.from('.home-content p', {
    y: -40,
    opacity: 0,
    duration: 0.6,
  })
  
  tlTablet.from('.btns', {
    y: -40,
    opacity: 0,
    duration: 0.6,
  })

  gsap.from('.abouttop-left h1', {
    y: -40,
    opacity: 0,
    duration: 0.7,
    scrollTrigger: {
      trigger: '.abouttop-left h1',
      start: "top 80%",
    }
  });

  gsap.from('.about-card', {
    y: 40,
    opacity: 0,
    duration: 0.7,
    stagger: 0.15,
    scrollTrigger: {
      trigger: '.about-left',
      start: "top 80%",
    }
  });

  gsap.from('.about-right img', {
    scale: 0.9,
    opacity: 0,
    duration: 0.8,
    delay: 0.2,
    scrollTrigger: {
      trigger: '.about-right',
      start: "top 80%",
    }
  });

  gsap.from('.service-card', {
    y: 40,
    opacity: 0,
    duration: 0.7,
    stagger: 0.1,
    scrollTrigger: {
      trigger: '.service-cont',
      start: "top 80%",
    }
  });

  gsap.from('.swiper-slide', {
    y: 40,
    opacity: 0,
    duration: 0.7,
    stagger: 0.15,
    scrollTrigger: {
      trigger: '.swiper',
      start: "top 80%",
    }
  });

  gsap.from('.contact-left h1', {
    y: -40,
    opacity: 0,
    duration: 0.7,
    scrollTrigger: {
      trigger: '.contact-left h1',
      start: "top 80%",
    }
  });

  gsap.from('.contact-form', {
    y: 40,
    opacity: 0,
    duration: 0.7,
    delay: 0.2,
    scrollTrigger: {
      trigger: '.contact-form',
      start: "top 80%",
    }
  });
});

mm.add("(max-width: 768px)", () => {
  const tlMobile = gsap.timeline();
  
  tlMobile.from('#nav', {
    y: -60,
    duration: 0.4,
  })
  
  tlMobile.from('.home-content h1', {
    y: -30,
    opacity: 0,
    duration: 0.5,
  })
  
  tlMobile.from('.home-content p', {
    y: -30,
    opacity: 0,
    duration: 0.5,
  })
  
  tlMobile.from('.btns', {
    y: -30,
    opacity: 0,
    duration: 0.5,
  })

  gsap.from('.abouttop-left h1', {
    y: -30,
    opacity: 0,
    duration: 0.6,
    scrollTrigger: {
      trigger: '.abouttop-left h1',
      start: "top 85%",
      toggleActions: "play none none none"
    }
  });

  gsap.from('.about-card', {
    y: 30,
    opacity: 0,
    duration: 0.6,
    stagger: 0.1,
    scrollTrigger: {
      trigger: '.about-left',
      start: "top 85%",
      toggleActions: "play none none none"
    }
  });

  gsap.from('.about-right img', {
    scale: 0.95,
    opacity: 0,
    duration: 0.7,
    delay: 0.1,
    scrollTrigger: {
      trigger: '.about-right',
      start: "top 85%",
      toggleActions: "play none none none"
    }
  });

  gsap.from('.service-card', {
    y: 30,
    opacity: 0,
    duration: 0.6,
    stagger: 0.1,
    scrollTrigger: {
      trigger: '.service-cont',
      start: "top 85%",
      toggleActions: "play none none none"
    }
  });

  gsap.from('.swiper-slide', {
    y: 30,
    opacity: 0,
    duration: 0.6,
    scrollTrigger: {
      trigger: '.swiper',
      start: "top 85%",
      toggleActions: "play none none none"
    }
  });

  gsap.from('.contact-left h1', {
    y: -30,
    opacity: 0,
    duration: 0.6,
    scrollTrigger: {
      trigger: '.contact-left h1',
      start: "top 85%",
      toggleActions: "play none none none"
    }
  });

  gsap.from('.contact-form', {
    y: 30,
    opacity: 0,
    duration: 0.6,
    delay: 0.1,
    scrollTrigger: {
      trigger: '.contact-form',
      start: "top 85%",
      toggleActions: "play none none none"
    }
  });
});

