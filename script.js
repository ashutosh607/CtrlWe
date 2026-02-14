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
