document.addEventListener("DOMContentLoaded", function () {
    // Ensure the fade-in effect happens on page load
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
            }, 300); // Delay ensures fade-out plays before navigation
        });
    });
});
