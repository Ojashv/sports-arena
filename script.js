let cart = [];

function showSection(id) {
  document.querySelectorAll(".section").forEach(sec => {
    sec.classList.remove("active");
  });
  document.getElementById(id).classList.add("active");
}

function guestLogin() {
  showSection("guest");
}

const sportsData = {
  cricket: {
    title: "Cricket Equipment",
    items: {
      Bat: [
        { name: "MRF Bat", price: 2500 },
        { name: "SS Bat", price: 2200 },
        { name: "SG Bat", price: 2000 },
        { name: "GM Bat", price: 2800 },
        { name: "Kookaburra Bat", price: 3000 }
      ],
      Ball: [
        { name: "Leather Ball", price: 450 },
        { name: "Tennis Ball", price: 200 }
      ],
      Pads: [
        { name: "Batting Pads", price: 1200 }
      ]
    }
  },

  football: {
    title: "Football Equipment",
    items: {
      Ball: [
        { name: "Nivia Ball", price: 900 },
        { name: "Cosco Ball", price: 850 }
      ]
    }
  },

  basketball: {
    title: "Basketball Equipment",
    items: {
      Ball: [
        { name: "Spalding Ball", price: 1400 }
      ]
    }
  },

  badminton: {
    title: "Badminton Equipment",
    items: {
      Racket: [
        { name: "Yonex Racket", price: 1800 }
      ]
    }
  }
};

function openSport(sport) {
  const data = sportsData[sport];
  document.getElementById("sportTitle").innerText = data.title;

  const list = document.getElementById("productList");
  list.innerHTML = "";

  for (let item in data.items) {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `<h3>${item}</h3>`;
    div.onclick = () => showOptions(data.items[item]);
    list.appendChild(div);
  }

  showSection("products");
}

function showOptions(options) {
  const list = document.getElementById("productList");
  list.innerHTML = "";

  options.forEach(opt => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <h3>${opt.name}</h3>
      <p>₹${opt.price}</p>
      <button onclick="addToCart('${opt.name}', ${opt.price})">Add to Cart</button>
    `;
    list.appendChild(div);
  });
}

function addToCart(name, price) {
  cart.push({ name, price });
  alert(name + " added to cart");
}

function openCart() {
  const list = document.getElementById("cartList");
  list.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    total += item.price;
    list.innerHTML += `<p>${item.name} - ₹${item.price}</p>`;
  });

  list.innerHTML += `<h3>Total: ₹${total}</h3>`;
  showSection("cart");
}
