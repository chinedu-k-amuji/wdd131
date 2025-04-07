const temples = [
    {
      templeName: "Aba, Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti, Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson, Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
        // Existing temple objects here...
    {
      templeName: "Salt Lake, Utah",
      location: "Salt Lake City, Utah, United States",
      dedicated: "1893, April, 6",
      area: 253015,
      imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-8454-thumb.jpg"
    },
    {
      templeName: "Accra, Ghana",
      location: "Accra, Ghana",
      dedicated: "2004, January, 11",
      area: 17000,
      imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-7182-thumb.jpg"
    },
    {
      templeName: "Sydney, Australia",
      location: "Carlingford, New South Wales, Australia",
      dedicated: "1984, September, 20",
      area: 21000, 
      imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/sydney-australia-temple/sydney-australia-temple-16029-thumb.jpg"
    }
      ];
    // Additional temple objects here...
  function displayAll() {
    renderTemples(temples);
  }
  
  function filterByOld() {
    const filtered = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
    renderTemples(filtered);
  }
  
  function filterByNew() {
    const filtered = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
    renderTemples(filtered);
  }
  
  function filterByLarge() {
    const filtered = temples.filter(temple => temple.area > 90000);
    renderTemples(filtered);
  }
  
  function filterBySmall() {
    const filtered = temples.filter(temple => temple.area < 12000);
    renderTemples(filtered);
  }
  
  function renderTemples(templesArray) {
    const container = document.getElementById("temples-container");
    container.innerHTML = ""; // Clear previous content
    templesArray.forEach(temple => {
      const card = document.createElement("div");
      card.className = "temple-card";
      card.innerHTML = `
        <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
        <h2>${temple.templeName}</h2>
        <p>Location: ${temple.location}</p>
        <p>Dedicated: ${temple.dedicated}</p>
        <p>Area: ${temple.area} sq ft</p>
      `;
      container.appendChild(card);
    });
  }
  
  // Set footer year and last modified date
  document.getElementById("year").textContent = new Date().getFullYear();
  document.getElementById("last-modified").textContent = document.lastModified;
  
  // Initial display
  displayAll();