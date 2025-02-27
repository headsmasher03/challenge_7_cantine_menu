document.addEventListener("DOMContentLoaded", function () {
    const cartList = document.getElementById("cart-list");
    const totalPriceEl = document.getElementById("total-price");
    const clearCartBtn = document.getElementById("clear-cart");
    let totalPrice = 0;

    document.querySelectorAll(".add-item").forEach(button => {
        button.addEventListener("click", function () {
            const name = this.getAttribute("data-name");
            const price = parseFloat(this.getAttribute("data-price"));

            // Voeg item toe aan de lijst
            const listItem = document.createElement("li");
            listItem.textContent = `${name} - €${price}`;
            cartList.appendChild(listItem);

            // Update totaalprijs
            totalPrice += price;
            totalPriceEl.textContent = totalPrice.toFixed(2);
            addItemphp(name);
        });
    });

    clearCartBtn.addEventListener("click", function () {
        cartList.innerHTML = "";
        totalPrice = 0;
        totalPriceEl.textContent = "0";
    });
});

document.addEventListener('DOMContentLoaded', () => {
    loadCart();
    if (document.querySelectorAll('.add-item').length > 0) {
        document.querySelectorAll('.add-item').forEach(button => {
            button.addEventListener('click', () => {
                addToCart(button.dataset.name, button.dataset.price);
            });
        });
    }

    if (document.getElementById('clear-cart')) {
        document.getElementById('clear-cart').addEventListener('click', () => {
            clearCart();
        });
    }
});

function addToCart(item) {
    let cart =JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
}

function loadCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    console.log(cart);	
}
const params = new URLSearchParams(window.location.search);
let cart = params.get("cart").split(",");
console.log(cart);


function addItemphp(item) {
    alert(item);
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      }
    xhttp.open("GET", "test1.php?item"+item, true);
    xhttp.send();
  }