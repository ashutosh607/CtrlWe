// ===== Scroll to Provider Dashboard =====
const scrollBtn = document.getElementById("scroll");

scrollBtn.addEventListener("click", function () {
    document.getElementById("dashboard").scrollIntoView({
        behavior: "smooth"
    });
});


// ===== Sign In Modal =====
const signinBtn = document.querySelector(".signin-btn");
const overlay = document.querySelector(".overlay");
const signinModal = document.querySelector(".signin-modal");

// Open modal
signinBtn.addEventListener("click", function () {
    overlay.classList.add("active");
    signinModal.classList.add("active");
});

// Close when clicking outside
overlay.addEventListener("click", function () {
    overlay.classList.remove("active");
    signinModal.classList.remove("active");
});

// Close with ESC key
document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
        overlay.classList.remove("active");
        signinModal.classList.remove("active");
    }
});


// ===== Matchmaking Page Redirect =====
function openMatchmaking() {
    window.location.href = "matchmaking.html";
}


// ===== Play Video =====
function playVideo() {
    const video = document.getElementById("promoVideo");
    video.play();
    document.querySelector(".play-btn").style.display = "none";
}


document.addEventListener("DOMContentLoaded", function () {

    let slides = document.querySelectorAll(".slide");
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove("active"));
        slides[index].classList.add("active");
    }

    document.querySelector(".next").addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    });

    document.querySelector(".prev").addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    });

    function autoSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
        setTimeout(autoSlide, 3000);
    }

    setTimeout(autoSlide, 3000);

});
// ===== Mobile Menu Toggle =====
const mobileMenu = document.getElementById("mobile-menu");
const navLinks = document.querySelector(".nav-links");
const navButtons = document.querySelector(".nav-buttons");

mobileMenu.addEventListener("click", function () {
    navLinks.classList.toggle("active");
    navButtons.classList.toggle("active");
});

