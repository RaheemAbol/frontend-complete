document.addEventListener("DOMContentLoaded", function () {
  // Create the glow effect element
  const glow = document.createElement("div");
  glow.style.position = "fixed";
  glow.style.width = "1px"; // Increased size for a more noticeable glow
  glow.style.height = "1px"; // Increased size for a more noticeable glow
  glow.style.borderRadius = "50%";
  glow.style.backgroundColor = "rgba(255, 255, 255, 0.1)"; // Subtle white color with transparency
  glow.style.boxShadow = "0 0 50px 30px rgba(255, 255, 255, 0.5)";
  glow.style.pointerEvents = "none"; // Prevents interaction
  glow.style.zIndex = "-9999"; // Ensure it is behind other elements

  // Append the glow element to the body
  document.body.appendChild(glow);

  // Update the position of the glow element to follow the cursor
  document.addEventListener("mousemove", function (event) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    // Offset by half the size of the glow to center it on the cursor
    glow.style.left = `${mouseX - 5}px`;
    glow.style.top = `${mouseY - 5}px`;
  });

  // Animate the glow to create a magical, wand-like effect
  function animateGlow() {
    glow.animate(
      [
        { boxShadow: "0 0 50px 30px rgba(255, 255, 255, 0.5)" },
        { boxShadow: "0 0 30px 20px rgba(255, 255, 255, 0.3)" },
        { boxShadow: "0 0 50px 30px rgba(255, 255, 255, 0.5)" },
      ],
      {
        duration: 2000,
        iterations: Infinity,
      }
    );
  }

  animateGlow();
});
