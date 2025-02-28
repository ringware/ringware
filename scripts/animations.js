document.addEventListener("DOMContentLoaded", function () {
    // Apply fade-in effect on page load
    document.body.classList.add("fade-in");

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
