function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

function showEquipment(sport) {
  document.getElementById("clickSound").play();

  let items = document.querySelectorAll(".equipment");
  items.forEach(i => i.style.display = "none");

  let selected = document.getElementById(sport);
  selected.style.display = "block";

  document.getElementById("equipment").scrollIntoView({ behavior: "smooth" });
}
