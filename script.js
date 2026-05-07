// ===== NAVBAR SCROLL EFFECT =====
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 50);
});

// ===== SMOOTH SCROLL + SCROLL SPY =====
const links = document.querySelectorAll(".nav-links a");
const sections = document.querySelectorAll("section");

function updateActiveLink() {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;

    if (window.pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  links.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
}

window.addEventListener("scroll", updateActiveLink);

// ===== SCROLL REVEAL ANIMATIONS =====
const fadeElements = document.querySelectorAll(".fade-up");

function revealOnScroll() {
  fadeElements.forEach((el) => {
    const rect = el.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top < windowHeight - 100) {
      el.classList.add("show");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// ===== BACK TO TOP BUTTON =====
const backToTop = document.getElementById("backToTop");

if (backToTop) {
  window.addEventListener("scroll", () => {
    backToTop.classList.toggle("visible", window.scrollY > 500);
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

// ===== MOBILE MENU =====
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    navLinks.classList.toggle("open");

    document.body.style.overflow = navLinks.classList.contains("open")
      ? "hidden"
      : "";
  });
}

// ===== CLOSE MOBILE MENU WHEN LINK CLICKED =====
if (navLinks) {
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      if (menuToggle) {
        menuToggle.classList.remove("active");
      }

      navLinks.classList.remove("open");
      document.body.style.overflow = "";
    });
  });
}

// ===== TYPING EFFECT =====
const typingElement = document.querySelector(".typing");

const roles = [
"Administrative & IT Support Professional",
  "Administrative Officer",
  "IT Systems Support Specialist",
  "Technical Support Specialist",
  "Systems & Network Support",
  "Office & ICT Administrator",
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function typeEffect() {
  if (!typingElement) return;

  const currentRole = roles[roleIndex];

  // Typing
  if (!isDeleting) {
    typingElement.textContent = currentRole.substring(
      0,
      charIndex + 1
    );

    charIndex++;
    typingSpeed = 100;
  }

  // Deleting
  else {
    typingElement.textContent = currentRole.substring(
      0,
      charIndex - 1
    );

    charIndex--;
    typingSpeed = 50;
  }

  // Pause before deleting
  if (!isDeleting && charIndex === currentRole.length) {
    isDeleting = true;
    typingSpeed = 2000;
  }

  // Next word
  else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    typingSpeed = 500;
  }

  setTimeout(typeEffect, typingSpeed);
}

// START TYPING EFFECT
typeEffect();

// ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(
      this.getAttribute("href")
    );

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

<script>
  const form = document.querySelector('.contact-form');
  
  form.addEventListener('submit', function(e) {
    e.preventDefault(); // Stop muna natin yung normal na pag-lipat ng page

    const formData = new FormData(this);

    // Dito natin ise-send ang data sa background
    fetch(this.action, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => {
      // Kapag okay na, automatic siyang babalik sa home
      if (response.ok) {
        // Option A: I-refresh ang page
        window.location.reload(); 
        
        // Option B: Kung gusto mo specific URL:
        // window.location.href = "https://jmlimocon.vercel.app/";
      } else {
        alert("May error sa pag-send.");
      }
    })
    .catch(error => {
      console.log("Error:", error);
    });
  });
</script>
