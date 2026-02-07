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

/* ================= PRODUCTS WITH PRICE & IMAGE ================= */

const products = {
  cricket: [
    { name: "Cricket Bat", price: "₹2,999", img: "https://via.placeholder.com/200?text=Cricket+Bat" },
    { name: "Cricket Ball", price: "₹299", img: "https://via.placeholder.com/200?text=Cricket+Ball" },
    { name: "Batting Pads", price: "₹1,499", img: "https://via.placeholder.com/200?text=Batting+Pads" },
    { name: "Batting Gloves", price: "₹999", img: "https://via.placeholder.com/200?text=Batting+Gloves" },
    { name: "Helmet", price: "₹1,899", img: "https://via.placeholder.com/200?text=Helmet" },
    { name: "Thigh Guard", price: "₹499", img: "https://via.placeholder.com/200?text=Thigh+Guard" },
    { name: "Abdominal Guard", price: "₹399", img: "https://via.placeholder.com/200?text=Abdominal+Guard" },
    { name: "Arm Guard", price: "₹599", img: "https://via.placeholder.com/200?text=Arm+Guard" },
    { name: "Cricket Shoes", price: "₹2,499", img: "https://via.placeholder.com/200?text=Cricket+Shoes" },
    { name: "Kit Bag", price: "₹1,299", img: "https://via.placeholder.com/200?text=Kit+Bag" }
  ],

  football: [
    { name: "Football", price: "₹899", img: "https://via.placeholder.com/200?text=Football" },
    { name: "Football Boots", price: "₹2,999", img: "https://via.placeholder.com/200?text=Football+Boots" },
    { name: "Shin Guards", price: "₹699", img: "https://via.placeholder.com/200?text=Shin+Guards" },
    { name: "Goalkeeper Gloves", price: "₹1,499", img: "https://via.placeholder.com/200?text=GK+Gloves" },
    { name: "Jersey", price: "₹999", img: "https://via.placeholder.com/200?text=Jersey" },
    { name: "Football Socks", price: "₹299", img: "https://via.placeholder.com/200?text=Football+Socks" },
    { name: "Training Cones", price: "₹499", img: "https://via.placeholder.com/200?text=Training+Cones" },
    { name: "Captain Armband", price: "₹199", img: "https://via.placeholder.com/200?text=Armband" },
    { name: "Ankle Guard", price: "₹399", img: "https://via.placeholder.com/200?text=Ankle+Guard" },
    { name: "Ball Pump", price: "₹299", img: "https://via.placeholder.com/200?text=Ball+Pump" }
  ],

  basketball: [
    { name: "Basketball", price: "₹1,299", img: "https://via.placeholder.com/200?text=Basketball" },
    { name: "Basketball Shoes", price: "₹3,499", img: "https://via.placeholder.com/200?text=Basketball+Shoes" },
    { name: "Jersey", price: "₹999", img: "https://via.placeholder.com/200?text=Jersey" },
    { name: "Wrist Bands", price: "₹299", img: "https://via.placeholder.com/200?text=Wrist+Bands" },
    { name: "Head Band", price: "₹199", img: "https://via.placeholder.com/200?text=Head+Band" },
    { name: "Knee Support", price: "₹599", img: "https://via.placeholder.com/200?text=Knee+Support" },
    { name: "Basketball Hoop", price: "₹4,999", img: "https://via.placeholder.com/200?text=Hoop" },
    { name: "Net", price: "₹499", img: "https://via.placeholder.com/200?text=Net" },
    { name: "Training Cones", price: "₹399", img: "https://via.placeholder.com/200?text=Cones" },
    { name: "Ball Pump", price: "₹299", img: "https://via.placeholder.com/200?text=Pump" }
  ],

  badminton: [
    { name: "Badminton Racket", price: "₹1,999", img: "https://via.placeholder.com/200?text=Racket" },
    { name: "Shuttlecock", price: "₹499", img: "https://via.placeholder.com/200?text=Shuttlecock" },
    { name: "Badminton Shoes", price: "₹2,799", img: "https://via.placeholder.com/200?text=Shoes" },
    { name: "Grip Tape", price: "₹199", img: "https://via.placeholder.com/200?text=Grip" },
    { name: "Racket Cover", price: "₹299", img: "https://via.placeholder.com/200?text=Cover" },
    { name: "Kit Bag", price: "₹1,299", img: "https://via.placeholder.com/200?text=Kit+Bag" },
    { name: "Sweat Band", price: "₹199", img: "https://via.placeholder.com/200?text=Sweat+Band" },
    { name: "Towel", price: "₹299", img: "https://via.placeholder.com/200?text=Towel" },
    { name: "Net", price: "₹1,499", img: "https://via.placeholder.com/200?text=Net" },
    { name: "String Set", price: "₹399", img: "https://via.placeholder.com/200?text=String+Set" }
  ],

  tennis: [
    { name: "Tennis Racket", price: "₹2,999", img: "https://via.placeholder.com/200?text=Tennis+Racket" },
    { name: "Tennis Balls", price: "₹499", img: "https://via.placeholder.com/200?text=Tennis+Balls" },
    { name: "Tennis Shoes", price: "₹3,499", img: "https://via.placeholder.com/200?text=Tennis+Shoes" },
    { name: "Grip Tape", price: "₹199", img: "https://via.placeholder.com/200?text=Grip" },
    { name: "Racket Cover", price: "₹399", img: "https://via.placeholder.com/200?text=Cover" },
    { name: "Wrist Band", price: "₹299", img: "https://via.placeholder.com/200?text=Wrist+Band" },
    { name: "Head Band", price: "₹199", img: "https://via.placeholder.com/200?text=Head+Band" },
    { name: "Tennis Net", price: "₹1,999", img: "https://via.placeholder.com/200?text=Net" },
    { name: "Kit Bag", price: "₹1,499", img: "https://via.placeholder.com/200?text=Kit+Bag" },
    { name: "String Set", price: "₹399", img: "https://via.placeholder.com/200?text=String+Set" }
  ]
};

/* ================= OPEN SPORT ================= */

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
      <img src="${item.img}" alt="${item.name}">
      <h3>${item.name}</h3>
      <p class="price">${item.price}</p>
      <button class="buy-btn">Add to Cart</button>
    `;

    list.appendChild(card);
  });
}
