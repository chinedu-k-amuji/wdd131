document.addEventListener("DOMContentLoaded", () => {
    updateDateTime();
    setupCarousel();
    setupCartFeature();
});

// Function to update the date and time dynamically
function updateDateTime() {
    const datetimeElement = document.getElementById("datetime");
    setInterval(() => {
        const now = new Date();
        datetimeElement.textContent = `Current Date & Time: ${now.toLocaleString()}`;
    }, 1000);
}

// Array of product objects
const products = [
    { id: 1, name: "Shplus AAA Car Charger" },
    { id: 2, name: "Airpod Black" },
    { id: 3, name: "Airpod Pro" },
    { id: 4, name: "Airpod White" },
    { id: 5, name: "Fsudz Iphone 14 Pro Max Charger" },
    { id: 6, name: "Star 200 White" },
    { id: 7, name: "Star 200 Black" },
    { id: 8, name: "Nedupal Charger" },
    { id: 9, name: "Realme Data Cable" },
    { id: 10, name: "Sh-A970PD" },
    { id: 11, name: "Shplus Intelligent" },
    { id: 12, name: "Shplus 120W" }
];

// Function to set up the product carousel
function setupCarousel() {
    const carousel = document.getElementById("product-carousel");
    let currentIndex = 0;
    const productsArray = Array.from(carousel.children);
    
    setInterval(() => {
        productsArray.forEach(product => product.style.display = "none");
        productsArray[currentIndex].style.display = "block";
        currentIndex = (currentIndex + 1) % productsArray.length;
    }, 3000);
}

// Function to set up a cart feature using localStorage
function setupCartFeature() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    document.querySelectorAll(".products figure").forEach((figure, index) => {
        const button = document.createElement("button");
        button.textContent = "Add to Cart";
        figure.appendChild(button);

        button.addEventListener("click", () => {
            const productName = products[index].name;
            cart.push({ id: products[index].id, name: productName });
            localStorage.setItem("cart", JSON.stringify(cart));

            alert(`✅ Added ${productName} to cart!`);
            displayCart();
        });
    });
}

// Function to display cart items dynamically
function displayCart() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartDisplay = document.createElement("div");
    cartDisplay.id = "cart-items";
    document.body.appendChild(cartDisplay);

    cartDisplay.innerHTML = cart.length === 0 
        ? `<p>Your cart is empty.</p>`
        : `<h3>🛒 Cart Items</h3><ul>${cart.map(item => `<li>${item.name}</li>`).join("")}</ul>`;
}