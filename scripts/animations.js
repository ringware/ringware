document.addEventListener("DOMContentLoaded", function () {
    // Fade in when the page loads
    document.body.classList.add("fade-in");

    // Add transition effect when navigating pages
    document.querySelectorAll(".nav a").forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent instant navigation
            const href = this.getAttribute("href");

            document.body.classList.add("fade-out"); // Start fade-out effect
            setTimeout(() => {
                window.location.href = href; // Navigate after fade-out
            }, 400); // Delay matches CSS transition (0.4s)
        });
    });
});
