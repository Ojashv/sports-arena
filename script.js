// SHOW SECTIONS WITH ANIMATION
function showSection(id) {
    const sections = document.querySelectorAll(".section");
    sections.forEach(section => section.classList.remove("active"));

    const target = document.getElementById(id);
    if (target) target.classList.add("active");
}

// GO TO LOGIN PAGE
function goLogin() {
    window.location.href = "login.html";
}

// GO BACK TO HOME
function goHome() {
    window.location.href = "index.html";
}

// OPEN SPORT DETAILS WITH 10 EQUIPMENTS
function openSport(sport) {
    const box = document.getElementById("sport-details");
    if (!box) return;

    const equipment = {
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

    const list = equipment[sport]
        .map(item => `<li>${item}</li>`)
        .join("");

    box.style.display = "block";
    box.innerHTML = `
        <h3>${sport.toUpperCase()} EQUIPMENT</h3>
        /* ===== PRODUCT CARDS FOR ALL SPORTS ===== */

const products = {
  cricket: [
    "Cricket Bat", "Leather Ball", "Batting Gloves", "Helmet",
    "Leg Pads", "Kit Bag", "Stumps", "Abdominal Guard",
    "Thigh Guard", "Arm Guard"
  ],

  football: [
    "Football", "Stud Shoes", "Shin Guards", "Goalkeeper Gloves",
    "Jersey", "Football Socks", "Training Cones",
    "Goal Net", "Air Pump", "Captain Armband"
  ],

  basketball: [
    "Basketball", "Basketball Shoes", "Jersey", "Wrist Band",
    "Knee Support", "Basketball Hoop", "Net",
    "Training Ladder", "Water Bottle", "Sports Bag"
  ],

  tennis: [
    "Tennis Racket", "Tennis Balls", "Grip Tape", "Tennis Shoes",
    "Net", "Wrist Band", "Head Band",
    "Racket Cover", "Sports Cap", "Towel"
  ],

  volleyball: [
    "Volleyball", "Volleyball Shoes", "Knee Pads", "Net",
    "Jersey", "Ankle Support", "Whistle",
    "Training Cones", "Scoreboard", "Ball Pump"
  ],

  badminton: [
    "Badminton Racket", "Shuttlecock", "Grip",
    "Badminton Shoes", "Net", "Kit Bag",
    "Wrist Band", "Head Band", "Racket Strings", "Towel"
  ],

  swimming: [
    "Swimming Goggles", "Swim Cap", "Swimming Costume",
    "Swimming Trunks", "Nose Clip", "Ear Plugs",
    "Kickboard", "Pull Buoy", "Swim Fins", "Towel"
  ],

  tabletennis: [
    "TT Bat", "TT Balls", "Net",
    "Grip Tape", "Table Cover", "Score Counter",
    "Bat Case", "Training Robot", "Cleaner Spray", "Towel"
  ],

  boxing: [
    "Boxing Gloves", "Punching Bag", "Hand Wraps",
    "Mouth Guard", "Head Guard", "Boxing Shoes",
    "Skipping Rope", "Focus Pads", "Groin Guard", "Kit Bag"
  ],

  athletics: [
    "Running Shoes", "Track Spikes", "Stopwatch",
    "Relay Baton", "Starting Blocks", "Measuring Tape",
    "Hurdles", "Javelin", "Shot Put", "Discus"
  ]
};

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
      <h3>${item}</h3>
    `;

    list.appendChild(card);
  });
}

        <ul style="list-style:none; margin-top:15px;">
            ${list}
        </ul>
    `;
}
