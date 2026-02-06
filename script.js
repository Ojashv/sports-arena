function showSection(id) {
    const sections = document.querySelectorAll(".section");
    sections.forEach(section => section.classList.remove("active"));

    document.getElementById(id).classList.add("active");
}

function goLogin() {
    window.location.href = "login.html";
}

function openSport(sport) {
    const box = document.getElementById("sport-details");
    box.style.display = "block";

    let content = "";

    if (sport === "cricket") {
        content = "<h3>🏏 Cricket Equipment</h3><p>Bat, Ball, Pads, Gloves, Helmet</p>";
    } else if (sport === "football") {
        content = "<h3>⚽ Football Equipment</h3><p>Football, Studs, Shin Guards</p>";
    } else if (sport === "basketball") {
        content = "<h3>🏀 Basketball Equipment</h3><p>Basketball, Shoes, Jersey</p>";
    } else if (sport === "badminton") {
        content = "<h3>🏸 Badminton Equipment</h3><p>Racket, Shuttle, Shoes</p>";
    } else if (sport === "tennis") {
        content = "<h3>🎾 Tennis Equipment</h3><p>Tennis Racket, Balls, Shoes</p>";
    } else if (sport === "swimming") {
        content = "<h3>🏊 Swimming Equipment</h3><p>Swimsuit, Goggles, Cap</p>";
    }

    box.innerHTML = content;
}
