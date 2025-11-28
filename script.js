// -------------------------------
// Smooth Scrolling for Navigation
// -------------------------------
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// -------------------------------
// Fade-in Animation on Scroll
// -------------------------------
const fadeSections = document.querySelectorAll('.fade-section');

const appearOptions = {
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
    });
}, appearOptions);

fadeSections.forEach(section => {
    appearOnScroll.observe(section);
});

// -------------------------------
// Contact Form Validation
// -------------------------------
const btn = document.querySelector("button");
btn.addEventListener("click", () => {
    const name = document.querySelector("input[type='text']").value.trim();
    const email = document.querySelector("input[type='email']").value.trim();
    const msg = document.querySelector("#mess").value.trim();

    if (name === "" || email === "" || msg === "") {
        alert("Please fill in all fields!");
    } else {
        alert("Message sent successfully!");
    }
});

// -------------------------------
// Optional: Sticky Navbar Effect
// -------------------------------
window.addEventListener("scroll", () => {
    const nav = document.querySelector("nav");
    if (window.scrollY > 50) {
        nav.classList.add("nav-scroll");
    } else {
        nav.classList.remove("nav-scroll");
    }
});
