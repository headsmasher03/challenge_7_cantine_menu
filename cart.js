function loadCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartList = document.getElementById('cart-list');
    const totalPriceElement = document.getElementById('total-price');
    let totalPrice = 0;

    cartList.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} (€${item.price})`;
        cartList.appendChild(li);
        totalPrice += parseFloat(item.price);
    });

    totalPriceElement.textContent = totalPrice.toFixed(2);
}

function addToCart(name, price) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ name, price });
    localStorage.setItem('cart', JSON.stringify(cart));
    loadCart();
}

function clearCart() {
    localStorage.removeItem('cart');
    loadCart();
}
