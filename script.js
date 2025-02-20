// Simulating a shopping cart stored in localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [
    { name: 'Product 1', price: 20 },
    { name: 'Product 2', price: 15 },
    { name: 'Product 3', price: 30 }
];

// Function to display cart items in the list
function displayCartItems() {
    const cartItemsList = document.getElementById("cart-items");
    cartItemsList.innerHTML = ''; // Clear the current items
    cart.forEach(item => {
        const listItem = document.createElement("li");
        listItem.textContent = `${item.name} - €${item.price}`;
        cartItemsList.appendChild(listItem);
    });
}

// Function to clear the cart
function clearCart() {
    cart = []; // Empty the cart array
    localStorage.removeItem('cart'); // Clear the cart from localStorage
    displayCartItems(); // Update the UI with an empty cart
}

// Function to go back to the main menu (you can replace the URL with the actual one)
function goBack() {
    window.location.href = "index.html"; // Redirect to the main menu (replace "index.html" with the actual menu page)
}

// Function to go to the payment page
function goToBetaalmethode() {
    if (cart.length === 0) {
        alert("Je winkelmand is leeg! Voeg producten toe om te betalen.");
    } else {
        localStorage.setItem('cart', JSON.stringify(cart)); // Save the cart to localStorage
        window.location.href = "betaalmethode.html"; // Redirect to the payment method page
    }
}

// Initialize the page by displaying the cart items
displayCartItems();
