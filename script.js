// ===============================
// SECTION NAVIGATION
// ===============================
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
  showSection("home");
}

// ===============================
// DATA
// ===============================
const products = {
  cricket: [
    "Cricket Bat","Cricket Ball","Batting Pads","Batting Gloves","Helmet",
    "Thigh Guard","Abdominal Guard","Arm Guard","Cricket Shoes","Kit Bag"
  ],
  football: [
    "Football","Football Boots","Shin Guards","Goalkeeper Gloves","Jersey",
    "Football Socks","Training Cones","Captain Armband","Ankle Guard","Ball Pump"
  ],
  basketball: [
    "Basketball","Basketball Shoes","Jersey","Wrist Bands","Head Band",
    "Knee Support","Basketball Hoop","Net","Training Cones","Ball Pump"
  ],
  badminton: [
    "Badminton Racket","Shuttlecock","Badminton Shoes","Grip Tape","Racket Cover",
    "Kit Bag","Sweat Band","Towel","Net","String Set"
  ],
  tennis: [
    "Tennis Racket","Tennis Balls","Tennis Shoes","Grip Tape","Racket Cover",
    "Wrist Band","Head Band","Tennis Net","Kit Bag","String Set"
  ],
  swimming: [
    "Swimming Goggles","Swim Cap","Swimsuit","Swimming Trunks","Kickboard",
    "Pull Buoy","Ear Plugs","Nose Clip","Towel","Swim Bag"
  ]
};

let cart = [];

// ===============================
// OPEN SPORT
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
      <h3>${item}</h3>

      <label>Size</label>
      <select class="size">
        <option value="0">Standard</option>
        <option value="100">Medium (+₹100)</option>
        <option value="200">Large (+₹200)</option>
      </select>

      <label>Quality</label>
      <select class="quality">
        <option value="0">Normal</option>
        <option value="300">Premium (+₹300)</option>
      </select>

      <p class="price">₹1000</p>

      <button class="add-btn">Add to Cart</button>
    `;

    const priceEl = card.querySelector(".price");
    const sizeEl = card.querySelector(".size");
    const qualityEl = card.querySelector(".quality");
    const addBtn = card.querySelector(".add-btn");

    function updatePrice() {
      const base = 1000;
      const total =
        base + Number(sizeEl.value) + Number(qualityEl.value);
      priceEl.innerText = "₹" + total;
    }

    sizeEl.addEventListener("change", updatePrice);
    qualityEl.addEventListener("change", updatePrice);

    addBtn.addEventListener("click", () => {
      cart.push({
        name: item,
        price: priceEl.innerText
      });
      alert(item + " added to cart");
    });

    list.appendChild(card);
  });
}

// ===============================
// CART PAGE LOGIC (READY)
// ===============================
function openCart() {
  showSection("cart");

  const cartList = document.getElementById("cartItems");
  const totalEl = document.getElementById("cartTotal");

  cartList.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    const price = Number(item.price.replace("₹", ""));
    total += price;

    const row = document.createElement("div");
    row.className = "product";

    row.innerHTML = `
      <h3>${item.name}</h3>
      <p>${item.price}</p>
      <button onclick="removeItem(${index})">Remove</button>
    `;

    cartList.appendChild(row);
  });

  totalEl.innerText = "Total: ₹" + total;
}

function removeItem(index) {
  cart.splice(index, 1);
  openCart();
}
