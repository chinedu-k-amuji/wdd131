// Product Array
const products = [
    { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
    { id: "fc-2050", name: "power laces", averagerating: 4.7 },
    { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
    { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
    { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];

// Populate Product Name Options
const productSelect = document.getElementById('productName');
products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.name;
    option.textContent = product.name;
    productSelect.appendChild(option);
});

// Counter for Reviews
document.addEventListener('DOMContentLoaded', () => {
    const reviewCount = localStorage.getItem('reviewCount') || 0;
    const incrementedCount = parseInt(reviewCount) + 1;
    localStorage.setItem('reviewCount', incrementedCount);
    const countDisplay = document.getElementById('reviewCount');
    if (countDisplay) {
        countDisplay.textContent = incrementedCount;
    }
     // Footer Dynamic Updates
     const currentYear = new Date().getFullYear(); // Get current year
     const lastModified = document.lastModified; // Get last modified date
     document.getElementById('currentYear').textContent = currentYear; // Update year
     document.getElementById('lastModified').textContent = lastModified; // Update l
});
