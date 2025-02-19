function loadCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartList = document.getElementById('cart-items');

    if (cart.length === 0) {
        cartList.innerHTML = "<p>Je winkelmand is leeg.</p>";
    } else {
        cartList.innerHTML = cart.map((item, index) => `
            <li>
                ${item.product} - Ingrediënten: ${item.ingredients.join(', ') || 'Geen'}
                <button class="adjust-btn" onclick="adjustIngredients('${item.product}')">Pas aan</button>
                <button onclick="removeItem(${index})">Verwijder</button>
            </li>
        `).join('');
    }
}
function goBack() {
    window.history.back();
}