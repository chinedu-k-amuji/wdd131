// Footer: Display current year, last modified date, and current date & time
document.addEventListener('DOMContentLoaded', () => {
    const footer = document.querySelector('footer');
    const currentYear = new Date().getFullYear();
    const lastModified = document.lastModified;
    const currentDateTime = new Date().toLocaleString('en-US', { timeZone: 'Africa/Lagos' });
    
    const currentYearElement = document.getElementById('currentYear');
    const lastModifiedElement = document.getElementById('lastModified');

    currentYearElement.textContent = currentYear;
    lastModifiedElement.textContent = lastModified;

    const dateTimeDisplay = document.createElement('p');
    dateTimeDisplay.textContent = `Current Date and Time: ${currentDateTime}`;
    footer.appendChild(dateTimeDisplay);
});

// Static inputs for temperature and wind speed
const temperature = 5; // Celsius
const windSpeed = 10; // km/h

// Function to calculate wind chill factor
function calculateWindChill(temp, windSpeed) {
    return (13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)).toFixed(2);
}

// Conditions for viable wind chill calculations
function displayWindChill(temp, windSpeed) {
    if (temp <= 10 && windSpeed > 4.8) { // Metric conditions
        return calculateWindChill(temp, windSpeed);
    }
    return "N/A"; // Not applicable if conditions aren't met
}

// Display the wind chill factor in the "Weather" section
document.addEventListener('DOMContentLoaded', () => {
    const windChillElement = document.getElementById('windchill');
    windChillElement.textContent = `${displayWindChill(temperature, windSpeed)} °C`;
});