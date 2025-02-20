const cartCount = document.getElementById('cart-count');
let count = 0;

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const product = button.parentElement;
        const name = product.getAttribute('data-name');
        const price = product.getAttribute('data-price');
        alert(`Added ${name} to cart for $${price}`);
        count++;
        cartCount.textContent = count;
    });
});
