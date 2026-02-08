// ================= EXISTING FUNCTIONS (UNCHANGED) =================
function showSection(id) {
  document.querySelectorAll(".section").forEach(sec =>
    sec.classList.remove("active")
  );
  const target = document.getElementById(id);
  if (target) target.classList.add("active");
}

function goLogin() {
  window.location.href = "login.html";
}

function goHome() {
  window.location.href = "index.html";
}

// ================= NEW DATA STRUCTURE (ONLY ADDITION) =================
const products = {
  cricket: {
    Bat: [
      { name: "English Willow Bat", price: 2999 },
      { name: "Kashmir Willow Bat", price: 1999 },
      { name: "Lightweight Bat", price: 2499 },
      { name: "Power Bat", price: 3499 },
      { name: "Junior Bat", price: 1499 }
    ],
    Ball: [
      { name: "Leather Ball", price: 299 },
      { name: "Red Ball", price: 249 },
      { name: "White Ball", price: 269 },
      { name: "Practice Ball", price: 199 },
      { name: "Tennis Ball", price: 99 }
    ]
  },

  football: {
    Shoes: [
      { name: "Stud Football Shoes", price: 2599 },
      { name: "Training Shoes", price: 1999 },
      { name: "Grass Grip Shoes", price: 2899 },
      { name: "Ankle Support Shoes", price: 2399 },
      { name: "Junior Shoes", price: 1599 }
    ]
  },

  basketball: {
    Ball: [
      { name: "Indoor Basketball", price: 1799 },
      { name: "Outdoor Basketball", price: 1499 },
      { name: "Training Ball", price: 999 },
      { name: "Rubber Ball", price: 799 },
      { name: "Match Ball", price: 1999 }
    ]
  },

  badminton: {
    Racket: [
      { name: "Carbon Racket", price: 2199 },
      { name: "Lightweight Racket", price: 1899 },
      { name: "Beginner Racket", price: 999 },
      { name: "Professional Racket", price: 2999 },
      { name: "Junior Racket", price: 1299 }
    ]
  },

  tennis: {
    Racket: [
      { name: "Graphite Racket", price: 2799 },
      { name: "Beginner Racket", price: 1499 },
      { name: "Pro Racket", price: 3499 },
      { name: "Light Racket", price: 2299 },
      { name: "Junior Racket", price: 1199 }
    ]
  },

  swimming: {
    Goggles: [
      { name: "Anti Fog Goggles", price: 699 },
      { name: "Professional Goggles", price: 1299 },
      { name: "Beginner Goggles", price: 499 },
      { name: "UV Protection Goggles", price: 999 },
      { name: "Kids Goggles", price: 399 }
    ]
  }
};

// ================= OPEN SPORT (EXTENDED, NOT REPLACED) =================
function openSport(sport) {
  showSection("products");

  const title = document.getElementById("sportTitle");
  const list = document.getElementById("productList");

  title.innerText = sport.toUpperCase() + " EQUIPMENT";
  list.innerHTML = "";

  const sportItems = products[sport];

  for (let item in sportItems) {
    const itemCard = document.createElement("div");
    itemCard.className = "product";
    itemCard.innerHTML = `<h3>${item}</h3><p>Click to view options</p>`;
    itemCard.onclick = () => openSubItems(sport, item);
    list.appendChild(itemCard);
  }
}

// ================= SUB-ITEMS FEATURE (NEW) =================
function openSubItems(sport, item) {
  const title = document.getElementById("sportTitle");
  const list = document.getElementById("productList");

  title.innerText = `${sport.toUpperCase()} → ${item}`;
  list.innerHTML = "";

  products[sport][item].forEach(sub => {
    const card = document.createElement("div");
    card.className = "product";
    card.innerHTML = `
      <h3>${sub.name}</h3>
      <p>₹${sub.price}</p>
      <button class="explore-btn">Add to Cart</button>
    `;
    list.appendChild(card);
  });
}
