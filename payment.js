// Simulate the payment process
document.getElementById("payment-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission for now

    // Get the form values
    const cardName = document.getElementById("card-name").value;
    const cardNumber = document.getElementById("card-number").value;
    const cardExpiry = document.getElementById("card-expiry").value;
    const cardCvc = document.getElementById("card-cvc").value;

    // Simple validation
    if (!cardName || !cardNumber || !cardExpiry || !cardCvc) {
        alert("Vul alstublieft alle velden in.");
        return;
    }

    // Simulate payment process
    alert(`Betaling geslaagd! Bedankt voor uw aankoop, ${cardName}.`);

    // Clear the cart after successful payment
    clearCart();
    window.location.href = "index.html"; // Redirect to the main page (menu)
});

// Function to clear the cart (if needed on this page as well)
function clearCart() {
    localStorage.removeItem('cart'); // Assuming you saved cart in localStorage
}
