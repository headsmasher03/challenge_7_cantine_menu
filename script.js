// Function to display cart items in the list
function displayCartItems() {
    const cartItemsList = document.getElementById("cart-items");
    cartItemsList.innerHTML = ''; // Clear the current items
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.forEach((item, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${item.name} - €${item.price}`;
        const removeButton = document.createElement("button");
        removeButton.textContent = "Verwijder";
        removeButton.onclick = () => removeFromCart(index);
        listItem.appendChild(removeButton);
        cartItemsList.appendChild(listItem);
    });
}

// Function to add an item to the cart
function addToCart(item, price) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ name: item, price: price });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(item + " is toegevoegd aan je winkelmand!");
}

// Function to remove an item from the cart
function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCartItems();
}

// Function to clear the cart
function clearCart() {
    localStorage.removeItem('cart'); // Clear the cart from localStorage
    displayCartItems(); // Update the UI with an empty cart
}

// Function to go back to the main menu (you can replace the URL with the actual one)
function goBack() {
    window.location.href = "index.html"; // Redirect to the main menu (replace "index.html" with the actual menu page)
}

// Function to go to the payment page
function goToBetaalmethode() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart.length === 0) {
        alert("Je winkelmand is leeg! Voeg producten toe om te betalen.");
    } else {
        localStorage.setItem('cart', JSON.stringify(cart)); // Save the cart to localStorage
        window.location.href = "betaalmethode.html"; // Redirect to the payment method page
    }
}

// Initialize the page by displaying the cart items
displayCartItems();

// Event listeners for buttons
document.getElementById('clear-cart').addEventListener('click', clearCart);
document.getElementById('go-back').addEventListener('click', goBack);
document.getElementById('go-to-betaalmethode').addEventListener('click', goToBetaalmethode);
