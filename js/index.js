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

