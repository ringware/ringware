document.addEventListener("DOMContentLoaded", function () {
    if (sessionStorage.getItem("fadeIn") === "true") {
        document.body.classList.add("fade-in");
        sessionStorage.removeItem("fadeIn"); // Remove so it doesn't stay forever
    }

    document.querySelectorAll(".nav a").forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Stop instant navigation
            const href = this.getAttribute("href");

            document.body.classList.add("fade-out"); // Start fade-out effect
            sessionStorage.setItem("fadeIn", "true"); // Tell next page to fade in

            setTimeout(() => {
                window.location.href = href; // Now load the new page
            }, 500); // Delay increased to 500ms for a smooth transition
        });
    });
});
