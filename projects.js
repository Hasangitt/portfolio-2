document.addEventListener("scroll", function() {
    const elements = document.querySelectorAll(".fade-in");
    const triggerPoint = window.innerHeight * 0.8;

    elements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;

      if (elementTop < triggerPoint) {
        element.classList.add("visible");
      }
    });
  });