const openBtn = document.getElementById('openMenuButton');
const closeBtn = document.getElementById('closeMenuButton');
const mobileMenu = document.getElementById('mobileMenu');

openBtn.addEventListener('click', function() {
    mobileMenu.classList.add('is-open');
});

closeBtn.addEventListener('click', function() {
    mobileMenu.classList.remove('is-open');
});