window.addEventListener("load", function () {
  document.body.classList.remove("page-hidden");

  const sections = document.querySelectorAll(".content-section");
  sections.forEach(section => {
    section.classList.add("hidden");
  });
});

function showSection(sectionId) {
  const sections = document.querySelectorAll(".content-section");

  sections.forEach(section => {
    section.classList.remove("visible");
    section.classList.add("hidden");
  });

  const target = document.getElementById(sectionId);

  target.classList.remove("hidden");

  setTimeout(() => {
    target.classList.add("visible");
  }, 10);
}

function resetSections() {
  const sections = document.querySelectorAll(".content-section");

  sections.forEach(section => {
    section.classList.remove("visible");
    section.classList.add("hidden");
  });

    document.getElementById("hero").scrollIntoView({ behavior: "smooth" });
}