function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

function submitForm(event) {
  event.preventDefault();
  alert("Thank you! Your message has been sent.");
}
