// ===============================
// SECTION NAVIGATION
// ===============================
function showSection(id) {
  document.querySelectorAll(".section").forEach(sec => {
    sec.classList.remove("active");
  });

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
// PRODUCT DATA
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

// ===============================
// CART STORAGE
// ===============================
let cart = [];

// ===============================
// OPEN SPORT → SHOW PRODUCTS
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

    const basePrice = 1000;

    card.innerHTML = `
      <h3>${item}</h3>

      <label>Size</label>
      <select class="size">
        <option value="0">Standard</option>
        <option value="150">Medium (+₹150)</option>
        <option value="300">Large (+₹300)</option>
      </select>

      <label>Quality</label>
      <select class="quality">
        <option value="0">Normal</option>
        <option value="400">Premium (+₹400)</option>
      </select>

      <p class="price">₹${basePrice}</p>

      <button class="add-btn">Add to Cart</button>
    `;

    const sizeEl = card.querySelector(".size");
    const qualityEl = card.querySelector(".quality");
    const priceEl = card.querySelector(".price");
    const addBtn = card.querySelector(".add-btn");

    function updatePrice() {
      const total =
        basePrice +
        Number(sizeEl.value) +
        Number(qualityEl.value);

      priceEl.innerText = "₹" + total;
    }

    sizeEl.addEventListener("change", updatePrice);
    qualityEl.addEventListener("change", updatePrice);

    addBtn.addEventListener("click", () => {
      cart.push({
        name: item,
        size: sizeEl.options[sizeEl.selectedIndex].text,
        quality: qualityEl.options[qualityEl.selectedIndex].text,
        price: priceEl.innerText
      });
      alert(item + " added to cart ✅");
    });

    list.appendChild(card);
  });
}

// ===============================
// OPEN CART
// ===============================
function openCart() {
  showSection("cart");

  const cartList = document.getElementById("cartItems");
  const totalEl = document.getElementById("cartTotal");

  cartList.innerHTML = "";
  let total = 0;

  if (cart.length === 0) {
    cartList.innerHTML = "<p>Your cart is empty</p>";
    totalEl.innerText = "Total: ₹0";
    return;
  }

  cart.forEach((item, index) => {
    const priceNum = Number(item.price.replace("₹", ""));
    total += priceNum;

    const row = document.createElement("div");
    row.className = "product";

    row.innerHTML = `
      <h3>${item.name}</h3>
      <p>Size: ${item.size}</p>
      <p>Quality: ${item.quality}</p>
      <p class="price">${item.price}</p>
      <button onclick="removeItem(${index})">Remove</button>
    `;

    cartList.appendChild(row);
  });

  totalEl.innerText = "Total: ₹" + total;
}

// ===============================
// REMOVE ITEM
// ===============================
function removeItem(index) {
  cart.splice(index, 1);
  openCart();
}
