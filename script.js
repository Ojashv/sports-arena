/* Smooth scroll to any section */
function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

/* Show equipment for selected sport with animation */
function showEquipment(sport) {
  // Play click sound if available
  const sound = document.getElementById("clickSound");
  if (sound) {
    sound.currentTime = 0;
    sound.play();
  }

  // Hide all equipment sections
  const allEquipment = document.querySelectorAll(".equipment");
  allEquipment.forEach(item => {
    item.style.display = "none";
  });

  // Show selected sport equipment
  const selected = document.getElementById(sport);
  if (selected) {
    selected.style.display = "block";
  }

  // Scroll smoothly to equipment section
  const equipmentSection = document.getElementById("equipment");
  if (equipmentSection) {
    equipmentSection.scrollIntoView({ behavior: "smooth" });
  }
}

/* Demo login function (for school project) */
function login(event) {
  event.preventDefault(); // stop page reload

  alert("Login successful! (Demo)");
  
  // Redirect to home page
  window.location.href = "index.html";
}
