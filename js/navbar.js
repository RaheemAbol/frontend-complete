document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".navbar");

  const handleMouseMove = (e) => {
    if (e.clientY <= 250) {
      navbar.classList.remove("navbar-hidden");
    } else {
      navbar.classList.add("navbar-hidden");
    }
  };

  document.addEventListener("mousemove", handleMouseMove);
});
