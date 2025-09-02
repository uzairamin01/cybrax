fetch("/components/nav.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("nav").innerHTML = data;

        // Set active class based on current page
        const navItems = document.querySelectorAll('#nav ul li');
        const pages = ['/index.html', '/pages/about.html', '/pages/service.html', '/pages/contact.html'];
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

