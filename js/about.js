fetch("/components/nav.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("nav").innerHTML = data;
    })

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
    
