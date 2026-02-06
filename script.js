function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });
}

function showEquipment(sport) {
  let lists = document.querySelectorAll(".equipment-list");
  lists.forEach(list => list.style.display = "none");

  document.getElementById(sport).style.display = "block";
}
