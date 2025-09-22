fetch('/components/nav.html')
    .then(res => res.text())
    .then(data => {
        document.querySelector("nav").innerHTML = data;

        // Ab JS ko initialize karo
        initNav();

        if (window.ScrollTrigger) ScrollTrigger.refresh(true);
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

// Ensure ScrollTrigger plugin is registered
if (window.gsap && window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
}

// Refresh ScrollTrigger after critical events to fix offset issues on mobile
window.addEventListener('load', () => {
    if (window.ScrollTrigger) ScrollTrigger.refresh(true);
});

// Refresh after images load (hero and content images)
document.querySelectorAll('img').forEach((img) => {
    if (!img.complete) {
        img.addEventListener('load', () => {
            if (window.ScrollTrigger) ScrollTrigger.refresh(true);
        }, { once: true });
    }
});

// Refresh on orientation change / resize for mobile correctness
window.addEventListener('orientationchange', () => {
    if (window.ScrollTrigger) ScrollTrigger.refresh(true);
});
window.addEventListener('resize', () => {
    if (window.ScrollTrigger) ScrollTrigger.refresh(true);
});

fetch("/components/footer.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("footer").innerHTML = data;
        if (window.ScrollTrigger) ScrollTrigger.refresh(true);
    });





function numCounter() {
    function animateCounter(element, targetValue, duration = 2) {
        const obj = { value: 0 };
        gsap.to(obj, {
            value: targetValue,
            duration: duration,
            ease: "power2.out",
            onUpdate: function () {
                element.setAttribute('data-count', Math.round(obj.value) + "+");
            }
        });
    }

    // Statistics counter animation
    gsap.timeline({
        scrollTrigger: {
            trigger: ".top-right",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
        }
    })
        .call(() => {
            animateCounter(document.querySelector(".exper"), 10, 2);
        })
        .call(() => {
            animateCounter(document.querySelector(".proj"), 150, 2.5);
        }, [], 0.3)
        .call(() => {
            animateCounter(document.querySelector(".satis"), 110, 2.2);
        }, [], 0.6);

}
numCounter()


let mm = gsap.matchMedia();

mm.add("(min-width: 1025px)", () => {
    gsap.from('#nav', {
        y: -100,
        opacity: 0,
        duration: 0.6,
    }),

        gsap.from('.hero-content', {
            y: 50,
            opacity: 0,
            duration: 1.2,
            ease: "power2.out"
        });

    gsap.from('.hero-content h1', {
        y: -50,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: "power3.out"
    });

    gsap.from('.hero-content p', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.6,
        ease: "power2.out"
    });

    gsap.from('.first-sec', {
        y: 30,
        opacity: 0,
        duration: 1.2,
        scrollTrigger: {
            trigger: '#main-first',
            start: 'top 80%'
        }
    });

    gsap.from('.first-sec h3', {
        x: -50,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
            trigger: '#main-first',
            start: 'top 80%'
        }
    });

    gsap.from('.first-sec h1', {
        y: -50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
            trigger: '#main-first',
            start: 'top 80%'
        }
    });

    gsap.from('.first-sec p', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
            trigger: '#main-first',
            start: 'top 80%'
        }
    });

    gsap.from('.exper, .proj, .satis', {
        x: 50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.2,
        scrollTrigger: {
            trigger: '.top-right',
            start: 'top 80%'
        }
    });

    gsap.from('.cd', {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
            trigger: '.cd',
            start: 'top 85%'
        }
    });


    gsap.from('#sec1 .left', {
        x: -100,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
            trigger: '#sec1',
            start: 'top 85%'
        }
    });

    gsap.from('#sec1 .right', {
        x: 100,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
            trigger: '#sec1',
            start: 'top 85%'
        }
    });

    gsap.from('#sec2 .left', {
        x: 100,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
            trigger: '#sec2',
            start: 'top 85%'
        }
    });

    gsap.from('#sec2 .right', {
        x: -100,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
            trigger: '#sec2',
            start: 'top 85%'
        }
    });

    gsap.from('#sec6 .left', {
        scale: 0.8,
        opacity: 0,
        duration: 0.8,
        ease: "back.out(1.7)",
        scrollTrigger: {
            trigger: '#sec6',
            start: 'top 85%'
        }
    });

    gsap.from('#sec6 .right', {
        scale: 0.8,
        opacity: 0,
        duration: 0.8,
        ease: "back.out(1.7)",
        scrollTrigger: {
            trigger: '#sec6',
            start: 'top 85%'
        }
    });

    gsap.from('#sec5 .left', {
        scale: 0.8,
        opacity: 0,
        duration: 0.8,
        ease: "back.out(1.7)",
        scrollTrigger: {
            trigger: '#sec5',
            start: 'top 85%'
        }
    });

    gsap.from('#sec5 .right', {
        scale: 0.8,
        opacity: 0,
        duration: 0.8,
        ease: "back.out(1.7)",
        scrollTrigger: {
            trigger: '#sec5',
            start: 'top 85%'
        }
    });
});

mm.add("(min-width: 769px) and (max-width: 1024px)", () => {
    gsap.from('.hero-content', {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
    });

    gsap.from('.hero-content h1', {
        y: -40,
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
        ease: "power2.out"
    });

    gsap.from('.hero-content p', {
        y: 25,
        opacity: 0,
        duration: 0.7,
        delay: 0.4,
        ease: "power2.out"
    });

    gsap.from('.first-sec', {
        y: 25,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
            trigger: '#main-first',
            start: 'top 85%'
        }
    });

    gsap.from('.first-sec h3', {
        x: -40,
        opacity: 0,
        duration: 0.7,
        scrollTrigger: {
            trigger: '#main-first',
            start: 'top 85%'
        }
    });

    gsap.from('.first-sec h1', {
        y: -40,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
            trigger: '#main-first',
            start: 'top 85%'
        }
    });

    gsap.from('.first-sec p', {
        y: 25,
        opacity: 0,
        duration: 0.7,
        scrollTrigger: {
            trigger: '#main-first',
            start: 'top 85%'
        }
    });

    gsap.from('.exper, .proj, .satis', {
        x: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        scrollTrigger: {
            trigger: '.top-right',
            start: 'top 85%'
        }
    });

    gsap.from('.cd', {
        y: 40,
        opacity: 0,
        duration: 0.7,
        stagger: 0.2,
        scrollTrigger: {
            trigger: '.cd',
            start: 'top 85%'
        }
    });


});

mm.add("(max-width: 768px)", () => {
    gsap.from('.hero-content', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out"
    });

    gsap.from('.hero-content h1', {
        y: -30,
        opacity: 0,
        duration: 0.7,
        delay: 0.2,
        ease: "power2.out"
    });

    gsap.from('.hero-content p', {
        y: 20,
        opacity: 0,
        duration: 0.6,
        delay: 0.4,
        ease: "power2.out"
    });

    gsap.from('.first-sec', {
        y: 20,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
            trigger: '#main-first',
            start: 'top 90%'
        }
    });

    gsap.from('.first-sec h3', {
        x: -30,
        opacity: 0,
        duration: 0.6,
        scrollTrigger: {
            trigger: '#main-first',
            start: 'top 90%',
        }
    });

    gsap.from('.first-sec h1', {
        y: -30,
        opacity: 0,
        duration: 0.7,
        scrollTrigger: {
            trigger: '#main-first',
            start: 'top 90%'
        }
    });

    gsap.from('.first-sec p', {
        y: 20,
        opacity: 0,
        duration: 0.6,
        scrollTrigger: {
            trigger: '#main-first',
            start: 'top 90%'
        }
    });

    gsap.from('.exper, .proj, .satis', {
        x: 30,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        scrollTrigger: {
            trigger: '.top-right',
            start: 'top 90%'
        }
    });

});