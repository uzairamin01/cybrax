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


fetch("./components/nav.html")
    .then(response => response.text())
    .then(data => {
        document.querySelector("#nav").innerHTML = data;

        // Set active class based on current page
        const navItems = document.querySelectorAll('#nav ul li');
        const pages = ['index.html', '/pages/about.html', '/pages/services.html', '/pages/contact.html'];
        let currentPage = window.location.pathname.split('/').pop();
        if (currentPage === '' || currentPage === 'index.html') {
            currentPage = 'index.html';
        }

        navItems.forEach((item, idx) => {
            if (currentPage === pages[idx].split('/').pop()) {
                item.classList.add('active');
            }
            item.addEventListener('click', () => {
                navItems.forEach(li => li.classList.remove('active'));
                item.classList.add('active');
                window.location.href = pages[idx]
            });
        });
    });

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

 var swiper = new Swiper(".mySwiper", {
      slidesPerView: 3,
      spaceBetween: 10,
    });

let nextBtn = document.querySelector("#review .review-top .revtop-right .next").addEventListener("click", () => {
    swiper.slideNext()
})

let prevBtn = document.querySelector("#review .review-top .revtop-right .prev").addEventListener("click", () => {
    swiper.slidePrev()
})