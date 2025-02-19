function adjustIngredients(item) {
    window.location.href = 'ingredienten.html?item=' + encodeURIComponent(item);
}

function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    loadCart();
}

function clearCart() {
    localStorage.removeItem('cart');
    loadCart();
}

function goBack() {
    window.location.href = 'index.html';
}

window.onload = loadCart;

const express = require("express");
const Stripe = require("stripe");
const cors = require("cors");

const app = express();
const stripe = Stripe("JOUW_SECRET_KEY"); // Vervang met je echte API-sleutel

app.use(express.json());
app.use(cors());

app.post("/create-payment-intent", async (req, res) => {
try {
const paymentIntent = await stripe.paymentIntents.create({
amount: 5000, // Bedrag in centen (50 euro)
currency: "eur",
payment_method_types: ["card"],
});

res.json({ clientSecret: paymentIntent.client_secret });
} catch (error) {
res.status(500).json({ error: error.message });
}
});

app.listen(3000, () => console.log("Server draait op poort 3000"));


function adjustIngredients(item) {
    window.location.href = 'ingredienten.html?item=' + encodeURIComponent(item);
}

function addToCart(item) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ product: item, ingredients: [] });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(item + " is toegevoegd aan je winkelmand!");
}

function goToCart() {
    window.location.href = 'winkelmand.html';
}