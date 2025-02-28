document.addEventListener("DOMContentLoaded", function () {
    // Ensure the new page fades in after loading
    document.body.classList.add("loaded");

    // Smooth page transition when clicking links
    document.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const href = this.getAttribute("href");

            // Apply fade-out effect before navigating
            document.body.classList.add("fade-out");

            setTimeout(() => {
                window.location.href = href;
            }, 300); // Delay ensures fade-out animation completes
        });
    });
});
