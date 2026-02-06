function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });
}

function showEquipment(sport) {
  let all = document.querySelectorAll(".equipment-list");
  all.forEach(item => item.style.display = "none");

  document.getElementById("equipment").scrollIntoView({
    behavior: "smooth"
  });

  document.getElementById(sport).style.display = "block";
}
