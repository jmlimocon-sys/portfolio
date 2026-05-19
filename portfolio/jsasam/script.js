document.addEventListener('DOMContentLoaded', () => {

    /* --- 1. Mobile Navigation Toggle --- */
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');
        hamburger.innerHTML = navLinks.classList.contains('nav-active') 
            ? '<i class="fas fa-times"></i>' 
            : '<i class="fas fa-bars"></i>';
    });

    /* --- 2. Sticky Navbar & Back to Top --- */
    const navbar = document.getElementById('navbar');
    const backToTop = document.querySelector('.back-to-top');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
            backToTop.classList.add('active');
        } else {
            navbar.classList.remove('scrolled');
            backToTop.classList.remove('active');
        }
    });

    /* --- 3. Typing Effect in Hero Section --- */
    const typedTextSpan = document.querySelector(".typing-text");
    const textArray = ["Civil Engineer", "Master Plumber", "Engineering Professional"];
    const typingDelay = 100;
    const erasingDelay = 50;
    const newTextDelay = 2000; 
    let textArrayIndex = 0;
    let charIndex = 0;

    function type() {
        if (charIndex < textArray[textArrayIndex].length) {
            typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingDelay);
        } else {
            setTimeout(erase, newTextDelay);
        }
    }

    function erase() {
        if (charIndex > 0) {
            typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, erasingDelay);
        } else {
            textArrayIndex++;
            if (textArrayIndex >= textArray.length) textArrayIndex = 0;
            setTimeout(type, typingDelay + 1100);
        }
    }

    if (textArray.length) setTimeout(type, newTextDelay + 250);

    /* --- 4. Scroll Reveal Animations & Active Links --- */
    const reveals = document.querySelectorAll('.reveal');
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-links a');

    function checkScroll() {
        let current = '';
        
        // Active Nav Link mapping
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        // Add active class to corresponding link
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}` || (current === '' && item.getAttribute('href') === '#home')) {
                item.classList.add('active');
            }
        });

        // Reveal Elements
        reveals.forEach(reveal => {
            const windowHeight = window.innerHeight;
            const elementTop = reveal.getBoundingClientRect().top;
            const elementVisible = 100;

            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add('active');
                
                // If it's the stats container, trigger counter animation
                if (reveal.classList.contains('hero-content') && !reveal.classList.contains('counted')) {
                    triggerCounters();
                    reveal.classList.add('counted');
                }
            }
        });
    }

    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Trigger on load

    /* --- 5. Number Counter Animation --- */
    function triggerCounters() {
        const counters = document.querySelectorAll('.counter');
        const speed = 200;

        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText;
                const inc = target / speed;

                if (count < target) {
                    counter.innerText = Math.ceil(count + inc);
                    setTimeout(updateCount, 20);
                } else {
                    counter.innerText = target;
                }
            };
            updateCount();
        });
    }

    /* --- 6. Portfolio Filtering --- */
    const filterBtns = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active from all
            filterBtns.forEach(button => button.classList.remove('active'));
            // Add active to clicked
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            portfolioItems.forEach(item => {
                if (filterValue === 'all' || item.classList.contains(filterValue)) {
                    item.classList.remove('hide');
                } else {
                    item.classList.add('hide');
                }
            });
        });
    });
});

//------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', function () {

    const lightbox = GLightbox({
        selector: '.glightbox',
        touchNavigation: true,
        loop: true,
        openEffect: 'zoom',
        closeEffect: 'fade'
    });

});