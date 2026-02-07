function showSection(id) {
  document.querySelectorAll(".section").forEach(sec =>
    sec.classList.remove("active")
  );
  document.getElementById(id).classList.add("active");
}

function goLogin() {
  window.location.href = "login.html";
}

/* ================= PRODUCTS DATA ================= */

const products = {
  cricket: [
    ["Cricket Bat", "₹2,999"],
    ["Cricket Ball", "₹299"],
    ["Batting Pads", "₹1,499"],
    ["Batting Gloves", "₹999"],
    ["Helmet", "₹1,899"],
    ["Thigh Guard", "₹499"],
    ["Abdominal Guard", "₹399"],
    ["Arm Guard", "₹599"],
    ["Cricket Shoes", "₹2,499"],
    ["Kit Bag", "₹1,299"]
  ],

  football: [
    ["Football", "₹899"],
    ["Football Boots", "₹2,499"],
    ["Shin Guards", "₹699"],
    ["Goalkeeper Gloves", "₹1,199"],
    ["Jersey", "₹799"],
    ["Football Socks", "₹299"],
    ["Training Cones", "₹499"],
    ["Captain Armband", "₹199"],
    ["Ankle Guard", "₹599"],
    ["Ball Pump", "₹249"]
  ],

  basketball: [
    ["Basketball", "₹1,199"],
    ["Basketball Shoes", "₹2,799"],
    ["Jersey", "₹899"],
    ["Wrist Band", "₹299"],
    ["Head Band", "₹249"],
    ["Knee Support", "₹599"],
    ["Basketball Hoop", "₹3,999"],
    ["Net", "₹499"],
    ["Training Cones", "₹399"],
    ["Ball Pump", "₹249"]
  ],

  badminton: [
    ["Badminton Racket", "₹1,799"],
    ["Shuttlecock", "₹399"],
    ["Badminton Shoes", "₹2,199"],
    ["Grip Tape", "₹199"],
    ["Racket Cover", "₹299"],
    ["Kit Bag", "₹999"],
    ["Sweat Band", "₹199"],
    ["Towel", "₹249"],
    ["Net", "₹699"],
    ["String Set", "₹349"]
  ],

  tennis: [
    ["Tennis Racket", "₹2,499"],
    ["Tennis Balls", "₹499"],
    ["Tennis Shoes", "₹2,799"],
    ["Grip Tape", "₹249"],
    ["Racket Cover", "₹349"],
    ["Wrist Band", "₹199"],
    ["Head Band", "₹199"],
    ["Tennis Net", "₹1,199"],
    ["Kit Bag", "₹1,299"],
    ["String Set", "₹399"]
  ],

  swimming: [
    ["Swimming Goggles", "₹699"],
    ["Swim Cap", "₹199"],
    ["Swimsuit", "₹1,499"],
    ["Swimming Trunks", "₹899"],
    ["Kickboard", "₹499"],
    ["Pull Buoy", "₹599"],
    ["Ear Plugs", "₹149"],
    ["Nose Clip", "₹149"],
    ["Towel", "₹399"],
    ["Swim Bag", "₹799"]
  ]
};

/* ================= OPEN SPORT ================= */

function openSport(sport) {
  showSection("products");

  document.getElementById("sportTitle").innerText =
    sport.toUpperCase() + " EQUIPMENT";

  const list = document.getElementById("productList");
  list.innerHTML = "";

  products[sport].forEach(item => {
    const card = document.createElement("div");
    card.className = "product";

    card.innerHTML = `
      <img src="https://via.placeholder.com/300x160?text=${item[0]}" alt="${item[0]}">
      <h3>${item[0]}</h3>
      <p class="price">${item[1]}</p>
      <button class="buy-btn">Add to Cart</button>
    `;

    list.appendChild(card);
  });
}
