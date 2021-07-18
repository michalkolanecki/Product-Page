const navButton = document.querySelector ('.header__button--active-js');
const form = document.querySelector('.payment-card__details');

navButton.addEventListener('click', () => {
    const nav = document.querySelector('.header__sidebar--inactive-js');
    nav.classList.toggle('nav--open');
    const overlayBackground = document.querySelector('.header__overlay');
    overlayBackground.removeAttribute('display');
});

form.addEventListener('submit', e => {
    e.preventDefault();
});