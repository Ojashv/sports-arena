/* ===============================
   CLICK SOUND
================================ */
const clickSound = new Audio(
  "https://assets.mixkit.co/sfx/preview/mixkit-select-click-1109.mp3"
);

function playSound() {
    clickSound.currentTime = 0;
    clickSound.play();
}

/* ===============================
   OPEN SPORTS SECTION
================================ */
function openSports() {
    playSound();

    // Hide other sections
    document.getElementById("about").classList.add("hidden");
    document.getElementById("equipment").classList.add("hidden");

    // Show sports
    const sports = document.getElementById("sports");
    sports.classList.remove("hidden");
    sports.scrollIntoView({ behavior: "smooth" });
}

/* ===============================
   SHOW EQUIPMENT
================================ */
function showEquipment(sport) {
    playSound();

    // Hide other sections
    document.getElementById("sports").classList.add("hidden");
    document.getElementById("about").classList.add("hidden");

    // Show equipment section
    const equipment = document.getElementById("equipment");
    equipment.classList.remove("hidden");

    // Hide all equipment lists
    const lists = document.querySelectorAll(".equip-list");
    lists.forEach(list => list.style.display = "none");

    // Show selected sport equipment
    document.getElementById(sport).style.display = "block";

    equipment.scrollIntoView({ behavior: "smooth" });
}

/* ===============================
   GO BACK TO SPORTS
================================ */
function goBack() {
    playSound();

    // Hide equipment
    document.getElementById("equipment").classList.add("hidden");

    // Show sports
    const sports = document.getElementById("sports");
    sports.classList.remove("hidden");
    sports.scrollIntoView({ behavior: "smooth" });
}

/* ===============================
   LOGIN PAGE
================================ */
function goLogin() {
    playSound();
    window.location.href = "login.html";
}

/* ===============================
   ABOUT SECTION (FIXED)
================================ */
function toggleAbout() {
    playSound();

    // Hide other sections
    document.getElementById("sports").classList.add("hidden");
    document.getElementById("equipment").classList.add("hidden");

    // Show About
    const about = document.getElementById("about");
    about.classList.remove("hidden");
    about.scrollIntoView({ behavior: "smooth" });
}
