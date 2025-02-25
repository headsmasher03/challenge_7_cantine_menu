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
        });
    });

    clearCartBtn.addEventListener("click", function () {
        cartList.innerHTML = "";
        totalPrice = 0;
        totalPriceEl.textContent = "0";
    });
});
