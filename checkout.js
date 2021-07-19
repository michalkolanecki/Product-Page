const form = document.querySelector('.payment-card__details');
const decrease = document.querySelector('.product-cart__minus');
const increase = document.querySelector('.product-cart__plus');
let result = document.querySelector('.product-cart__result');
let start = 1;

form.addEventListener('submit', e => {
    e.preventDefault();
});

function plusClick() {
    start++;
    result.innerText = `${start}`;
    if (start >= 1) {
        decrease.addEventListener('click', minusClick);
    }
}
increase.addEventListener('click', plusClick);

function minusClick() {
    start--;
    result.innerText = `${start + 1}`;
    if (start <= 0) {
        decrease.removeEventListener('click', minusClick);
    } 
}
decrease.addEventListener('click', minusClick);
