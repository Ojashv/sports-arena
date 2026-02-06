// SHOW SECTIONS WITH ANIMATION
function showSection(id) {
    const sections = document.querySelectorAll(".section");
    sections.forEach(section => {
        section.classList.remove("active");
    });

    const target = document.getElementById(id);
    if (target) {
        target.classList.add("active");
    }
}

// GO TO LOGIN PAGE
function goLogin() {
    window.location.href = "login.html";
}

// GO BACK TO HOME
function goHome() {
    window.location.href = "index.html";
}

// OPEN SPORT DETAILS
function openSport(sport) {
    const box = document.getElementById("sport-details");
    if (!box) return;

    const equipment = {
        cricket: "Bat, Ball, Pads, Gloves, Helmet",
        football: "Football, Studs, Shin Guards",
        basketball: "Basketball, Shoes, Jersey",
        badminton: "Racket, Shuttle, Shoes",
        tennis: "Tennis Racket, Balls, Shoes",
        swimming: "Goggles, Cap, Swimwear"
    };

    box.style.display = "block";
    box.innerHTML = `
        <h3>${sport.toUpperCase()}</h3>
        <p>${equipment[sport]}</p>
    `;
}
