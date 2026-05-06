// Smooth scroll + scroll spy
const links = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (pageYOffset >= sectionTop) current = section.getAttribute('id');
  });
  links.forEach(a => a.classList.remove('active'));
  document.querySelector('.nav-links a[href*=' + current + ']')?.classList.add('active');
});

// Scroll animations
const fadeEls = document.querySelectorAll('.fade-up');
window.addEventListener('scroll', () => {
  fadeEls.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) el.classList.add('show');
  });
});

// Back-to-top
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  backToTop.style.display = window.scrollY > 500 ? 'block' : 'none';
});
backToTop.addEventListener('click', () => window.scrollTo({top: 0, behavior: 'smooth'}));

// Mobile menu
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
menuToggle.addEventListener('click', () => navLinks.classList.toggle('open'));

// Typing effect
const typing = document.querySelector('.typing');
const roles = ["Information Technology Expert", "Systems & Network Administrator"];
let idx = 0, char = 0, deleting = false;

function type() {
  const current = roles[idx];
  typing.textContent = current.substring(0, char);
  if (!deleting && char < current.length) {
    char++;
    setTimeout(type, 100);
  } else if (deleting && char > 0) {
    char--;
    setTimeout(type, 50);
  } else {
    deleting = !deleting;
    if (!deleting) idx = (idx + 1) % roles.length;
    setTimeout(type, 800);
  }
}
type();
