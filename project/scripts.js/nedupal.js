document.addEventListener("DOMContentLoaded", () => {
    // Display Current Date and Time
    const dateTimeElement = document.getElementById("datetime");
    if (dateTimeElement) {
        const now = new Date();
        dateTimeElement.textContent = `Current Date & Time: ${now.toLocaleString()}`;
    }

    // Populate Product Carousel
    const products = [
        { name: "Phone Case", price: "$10" },
        { name: "Screen Protector", price: "$5" },
        { name: "Wireless Charger", price: "$20" }
    ];

    const carousel = document.getElementById("product-carousel");
    if (carousel) {
        products.forEach(product => {
            const div = document.createElement("div"); // Fixed typo in 'documentdocument'
            div.innerHTML = `<strong>${product.name}</strong>: ${product.price}`;
            carousel.appendChild(div);
        });
    }

    // Form Validation
    const form = document.getElementById("contact-form");
    if (form) {
        form.addEventListener("submit", (e) => {
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;

            if (!name || !email) {
                e.preventDefault();
                alert("Please fill in all fields.");
            }
        });
    }
});