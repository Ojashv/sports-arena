function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });
}

function showEquipment(sport) {
  let all = document.querySelectorAll(".equipment-list");

  all.forEach(item => {
    item.classList.remove("active");
    item.style.display = "none";
  });

  let selected = document.getElementById(sport);
  selected.style.display = "block";

  setTimeout(() => {
    selected.classList.add("active");
  }, 50);

  document.getElementById("equipment").scrollIntoView({
    behavior: "smooth"
  });
}
