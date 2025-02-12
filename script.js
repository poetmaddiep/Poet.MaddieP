document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });

        // Close menu when clicking a link (for better mobile UX)
        document.querySelectorAll(".nav-links a").forEach(link => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("active");
            });
        });
    }
});
let currentPage = 0;
const pages = document.querySelectorAll(".page");

function nextPage() {
    if (currentPage < pages.length - 2) {
        pages[currentPage].style.transform = "rotateY(-180deg)";
        pages[currentPage].style.zIndex = "1";
        currentPage += 2;
    }
}

function prevPage() {
    if (currentPage > 0) {
        currentPage -= 2;
        pages[currentPage].style.transform = "rotateY(0deg)";
        pages[currentPage].style.zIndex = "2";
    }
}

/* Swipe Gesture for Mobile */
document.addEventListener("touchstart", handleTouchStart, false);
document.addEventListener("touchmove", handleTouchMove, false);

let xStart = null;

function handleTouchStart(event) {
    xStart = event.touches[0].clientX;
}

function handleTouchMove(event) {
    if (!xStart) return;
    let xEnd = event.touches[0].clientX;
    let xDiff = xStart - xEnd;

    if (xDiff > 0) {
        nextPage();
    } else {
        prevPage();
    }

    xStart = null;
}
