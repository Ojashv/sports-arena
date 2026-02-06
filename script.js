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
        <ul style="list-style:none; margin-top:15px;">
            ${list}
        </ul>
    `;
}
