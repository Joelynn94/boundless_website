
// Mobile navigation function
const navToggle = document.getElementById('navToggle');
const nav = document.querySelector('.nav');


// Scroll function to change header background color
// const onScroll = document.getElementsByTagName('header');
// const onScrollColorChange = document.querySelector('hero-text');
// const addClassOnScroll = onScroll.classList.add('fade-in');
// const removeClassOnScroll = onScroll.classList.remove('fade-in');


navToggle.addEventListener('click', function() {
    if (nav.style.display == "none") {
        nav.style.display = "block";
    } else {
        nav.style.display = "none";
    }
});



