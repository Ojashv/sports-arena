function showSection(id) {
  document.querySelectorAll(".section").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

function goLogin() {
  window.location.href = "login.html";
}

const products = {
  cricket:["Bat","Ball","Pads","Gloves","Helmet","Shoes","Kit Bag","Guard","Thigh Pad","Arm Guard"],
  football:["Ball","Boots","Shin Guard","Jersey","Socks","Pump","Cones","Gloves","Cap","Bag"],
  basketball:["Ball","Shoes","Jersey","Hoop","Net","Knee Pad","Wrist Band","Bag","Bottle","Ladder"],
  badminton:["Racket","Shuttle","Shoes","Grip","Net","Bag","Band","Towel","String","Cover"],
  tennis:["Racket","Balls","Shoes","Grip","Net","Band","Cap","Bag","Cover","String"],
  swimming:["Goggles","Cap","Suit","Trunks","Kickboard","Fins","Towel","Bag","Clip","Buoy"]
};

let cart = [];
let currentUser = localStorage.getItem("user");

function openSport(sport) {
  showSection("products");
  const list = document.getElementById("productList");
  document.getElementById("sportTitle").innerText = sport.toUpperCase();
  list.innerHTML = "";

  products[sport].forEach(item => {
    const card = document.createElement("div");
    card.className = "product";
    card.innerHTML = `
      <h3>${item}</h3>
      <select class="size">
        <option value="0">Standard</option>
        <option value="150">Medium +₹150</option>
        <option value="300">Large +₹300</option>
      </select>
      <select class="quality">
        <option value="0">Normal</option>
        <option value="400">Premium +₹400</option>
      </select>
      <p class="price">₹1000</p>
      <button>Add to Cart</button>
    `;

    const priceEl = card.querySelector(".price");
    const size = card.querySelector(".size");
    const quality = card.querySelector(".quality");
    const btn = card.querySelector("button");

    function update() {
      priceEl.innerText = "₹" + (1000 + +size.value + +quality.value);
    }

    size.onchange = quality.onchange = update;

    btn.onclick = () => {
      cart.push({name:item, price:priceEl.innerText});
      alert("Added to cart");
    };

    list.appendChild(card);
  });
}

function openCart() {
  showSection("cart");
  const list = document.getElementById("cartItems");
  const totalEl = document.getElementById("cartTotal");
  list.innerHTML = "";
  let total = 0;

  cart.forEach((i,idx)=>{
    total += +i.price.replace("₹","");
    const d = document.createElement("div");
    d.className = "product";
    d.innerHTML = `<h3>${i.name}</h3><p>${i.price}</p>
    <button onclick="cart.splice(${idx},1);openCart()">Remove</button>`;
    list.appendChild(d);
  });

  totalEl.innerText = "Total: ₹"+total;
}

function clearCart() {
  cart = [];
  openCart();
}

window.onload = () => {
  const box = document.getElementById("userBox");
  if (box) {
    box.innerHTML = currentUser
      ? `👋 Welcome, ${currentUser} <button class="logout-btn" onclick="logout()">Logout</button>`
      : "👤 Guest User";
  }
};

function logout() {
  localStorage.removeItem("user");
  location.reload();
}
