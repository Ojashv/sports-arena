/* CLICK SOUND */
const clickSound = new Audio(
  "https://assets.mixkit.co/sfx/preview/mixkit-select-click-1109.mp3"
);

function playSound() {
    clickSound.currentTime = 0;
    clickSound.play();
}

/* OPEN SPORTS */
function openSports() {
    playSound();
    document.getElementById("sports").classList.remove("hidden");
    document.getElementById("sports").scrollIntoView({ behavior: "smooth" });
}

/* SHOW EQUIPMENT */
function showEquipment(sport) {
    playSound();

    document.getElementById("sports").classList.add("hidden");
    document.getElementById("equipment").classList.remove("hidden");

    let lists = document.querySelectorAll(".equip-list");
    lists.forEach(list => list.style.display = "none");

    document.getElementById(sport).style.display = "block";

    document.getElementById("equipment")
        .scrollIntoView({ behavior: "smooth" });
}

/* GO BACK */
function goBack() {
    playSound();
    document.getElementById("equipment").classList.add("hidden");
    document.getElementById("sports").classList.remove("hidden");
}

/* LOGIN */
function goLogin() {
    playSound();
    window.location.href = "login.html";
}
