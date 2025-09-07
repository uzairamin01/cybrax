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

fetch("/components/footer.html")
    .then(response => response.text())
    .then(data =>
        document.getElementById("footer").innerHTML = data);
    
