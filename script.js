// // ---------------- Contact Form CSV Download -----------------

document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const myname = document.getElementById("myname").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (!myname || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }

    const data = [
      ["Name", "Email", "Message"],
      [myname, email, message],
    ];

    const csvContent =
      "data:text/csv;charset=utf-8," +
      data.map((row) => row.join(",")).join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "contact_messages.csv");

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    document.getElementById("contact-form").reset();
    alert("Your message has been saved successfully!");
  });

// ---------------- Navigation Scroll Indicator -----------------

const navLinks = document.querySelectorAll(".nav-link");
const scrollIndicator = document.querySelector(".scroll-indicator");
const sections = document.querySelectorAll("section");

function updateScrollIndicator() {
  let activeSection = null;

  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (
      rect.top < window.innerHeight / 2 &&
      rect.bottom > window.innerHeight / 2
    ) {
      activeSection = section.id;
    }
  });

  if (activeSection) {
    navLinks.forEach((link) => {
      const sectionId = link.getAttribute("data-section");
      if (sectionId === activeSection) {
        navLinks.forEach((lnk) => lnk.classList.remove("active"));
        link.classList.add("active");

        const linkRect = link.getBoundingClientRect();
        scrollIndicator.style.width = `${linkRect.width}px`;
        scrollIndicator.style.left = `${linkRect.left}px`;
        scrollIndicator.style.opacity = 1;
      }
    });
  }
}

window.addEventListener("scroll", updateScrollIndicator);
window.addEventListener("load", updateScrollIndicator);
window.addEventListener("resize", updateScrollIndicator);

// ---------------- Typing Effect -----------------
const roles = ["Frontend Developer", "Web Developer", "FullStack Developer"];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingEl = document.getElementById("typing");

function typeAnimation() {
  const currentRole = roles[roleIndex];

  if (!isDeleting) {
    typingEl.textContent = currentRole.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentRole.length) {
      setTimeout(() => (isDeleting = true), 1000);
    }
  } else {
    // Deleting
    typingEl.textContent = currentRole.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length; // next role
    }
  }

  setTimeout(typeAnimation, isDeleting ? 70 : 120);
}

typeAnimation();
