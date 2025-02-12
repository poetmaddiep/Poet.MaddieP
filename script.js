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

let currentPage = 1;

function nextPage() {
    if (currentPage < 3) {
        document.getElementById(`page${currentPage}`).style.transform = "rotateY(-180deg)";
        document.getElementById(`page${currentPage + 1}`).style.transform = "rotateY(0deg)";
        currentPage++;
    }
}

function prevPage() {
    if (currentPage > 1) {
        document.getElementById(`page${currentPage}`).style.transform = "rotateY(180deg)";
        document.getElementById(`page${currentPage - 1}`).style.transform = "rotateY(0deg)";
        currentPage--;
    }
}
