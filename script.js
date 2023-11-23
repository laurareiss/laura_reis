document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuButton = document.getElementById('burgerMenu');
    const navbar = document.querySelector('.navbar');
    const backgroundOverlay = document.querySelector('.background-overlay');
    const logo = document.querySelector('.logo');
    const navItens = document.querySelector('.nav-itens');

   

    mobileMenuButton.addEventListener('click', function () {
        if (navbar.classList.contains('open')) {
            navbar.classList.remove('open');
            backgroundOverlay.classList.remove('active');
            navbar.style.flexDirection = 'row';
            logo.style.width = '100%';
            navItens.style.display = 'none';
            navItens.style.flexDirection = 'row';
            navItens.style.maxWidth = 'initial';
        } else {
            navbar.classList.add('open');
            backgroundOverlay.classList.add('active');
            navbar.style.display = 'flex';
            backgroundOverlay.classList.add('active');
            navbar.style.flexDirection = 'column';
            logo.style.width = '20%';
            navItens.style.display = 'flex';
            navItens.style.flexDirection = 'column';
            navItens.style.maxWidth = '60%';
        }
    });

    const navItems = document.querySelectorAll('.nav-itens a');
    navItems.forEach(function (item) {
        item.addEventListener('click', function () {
            navbar.classList.remove('open');
            backgroundOverlay.classList.remove('active');
        });
    });
});