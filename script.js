// ===============================
// SECTION NAVIGATION
// ===============================
function showSection(id) {
  document.querySelectorAll(".section").forEach(section => {
    section.classList.remove("active");
  });

  const target = document.getElementById(id);
  if (target) target.classList.add("active");
}

function goLogin() {
  window.location.href = "login.html";
}

function goHome() {
  window.location.href = "index.html";
}

// ===============================
// PRODUCTS DATA
// ===============================
const products = {
  cricket: [
    "Cricket Bat",
    "Cricket Ball",
    "Batting Pads",
    "Batting Gloves",
    "Helmet",
    "Thigh Guard",
    "Abdominal Guard",
    "Arm Guard",
    "Cricket Shoes",
    "Kit Bag"
  ],

  football: [
    "Football",
    "Football Boots",
    "Shin Guards",
    "Goalkeeper Gloves",
    "Jersey",
    "Football Socks",
    "Training Cones",
    "Captain Armband",
    "Ankle Guard",
    "Ball Pump"
  ],

  basketball: [
    "Basketball",
    "Basketball Shoes",
    "Jersey",
    "Wrist Bands",
    "Head Band",
    "Knee Support",
    "Basketball Hoop",
    "Net",
    "Training Cones",
    "Ball Pump"
  ],

  badminton: [
    "Badminton Racket",
    "Shuttlecock",
    "Badminton Shoes",
    "Grip Tape",
    "Racket Cover",
    "Kit Bag",
    "Sweat Band",
    "Towel",
    "Net",
    "String Set"
  ],

  tennis: [
    "Tennis Racket",
    "Tennis Balls",
    "Tennis Shoes",
    "Grip Tape",
    "Racket Cover",
    "Wrist Band",
    "Head Band",
    "Tennis Net",
    "Kit Bag",
    "String Set"
  ],

  swimming: [
    "Swimming Goggles",
    "Swim Cap",
    "Swimsuit",
    "Swimming Trunks",
    "Kickboard",
    "Pull Buoy",
    "Ear Plugs",
    "Nose Clip",
    "Towel",
    "Swim Bag"
  ]
};

// ===============================
// OPEN SPORT & SHOW PRODUCTS
// ===============================
function openSport(sport) {
  showSection("products");

  const title = document.getElementById("sportTitle");
  const list = document.getElementById("productList");

  title.innerText = sport.toUpperCase() + " EQUIPMENT";
  list.innerHTML = "";

  products[sport].forEach(item => {
    const card = document.createElement("div");
    card.className = "product";

    card.innerHTML = `
      <div style="font-size:36px; text-align:center;">🏆</div>
      <h3>${item}</h3>
      <p>₹ 999</p>

      <div class="product-options">
        <p>✔ Brand: Pro Sports</p>
        <p>✔ Quality: Premium</p>
        <p>✔ Availability: In Stock</p>
        <button>Add to Cart</button>
      </div>
    `;

    // TOGGLE OPTIONS ON CLICK
    card.addEventListener("click", () => {
      const options = card.querySelector(".product-options");
      options.style.display =
        options.style.display === "block" ? "none" : "block";
    });

    list.appendChild(card);
  });
}
