document.addEventListener("DOMContentLoaded", function () {
    document.body.style.opacity = "1"; // Ensure opacity starts at 1 after load

    // Apply fade-in effect on page load
    setTimeout(() => {
        document.body.classList.add("fade-in");
    }, 50); // Small delay to ensure smooth transition

    // Smooth page transition effect
    document.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", function (event) {
            const href = this.getAttribute("href");
            if (!href.startsWith("http")) {  // Ignore external links
                event.preventDefault();
                document.body.classList.remove("fade-in");
                setTimeout(() => {
                    window.location.href = href;
                }, 300);  // Delay to match fade-out transition
            }
        });
    });
});
