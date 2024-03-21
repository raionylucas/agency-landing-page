$(document).ready(() => {
  $("#mobile_btn").on("click", () => {
    $("#mobile_menu").toggleClass("active");
    $("#mobile_btn").find("i").toggleClass("fa-x");
  });

  $(".nav-item").on("click", () => {
    $("#mobile_menu").toggleClass("active");
    $("#mobile_btn").find("i").toggleClass("fa-x");
  });

  const sections = $("section");
  const navItems = $(".nav-item");

  ScrollReveal().reveal("#cta", {
    origin: "left",
    duration: 2000,
    distance: "20%",
  });

  ScrollReveal().reveal(".services-card", {
    origin: "left",
    duration: 2000,
    distance: "20%",
  });

  ScrollReveal().reveal(".project-card", {
    origin: "top",
    duration: 2000,
    distance: "20%",
  });

  ScrollReveal().reveal(".btn-default", {
    origin: "left",
    duration: 2000,
    distance: "10%",
  });

  ScrollReveal().reveal(".testemonial-card-content", {
    origin: "right",
    duration: 2000,
    distance: "20%",
  });
});
